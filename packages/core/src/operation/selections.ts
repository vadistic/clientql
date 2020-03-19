import { Kind, SelectionNode } from 'graphql'
import {
  createField,
  createFragment,
  createFragmentSpread,
  createInlineFragment,
  Fieldname,
  FragmentName,
  isEnumTypeDefinitionNode,
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  Typename,
} from '../ast'
import { FragmentType } from '../config'
import { CoreProps } from '../core'
import { Edge } from '../graph'
import { isNotEmpty } from '../utils'
import { getFragmentName } from './fragment'
import { FragmentResult, NestableSelectionResult, SelectionsResult } from './types'
import {
  isStackCircural,
  lastFieldname,
  lastTypename,
  onlyUnique,
  replaceLastTypename,
} from './utils'

/**
 * wraper with friendlier api for building selection of some `__typename`
 *
 * returns noop on invalid typename
 */
export const buildSelections = (props: CoreProps) => (typename: Typename) => {
  if (!props.graph.has(typename)) {
    return noopResult
  }

  return buildRecursiveSelections(props)([['$ROOT', typename]])
}

/**
 * empty result
 */
const noopResult: SelectionsResult = {
  complete: true,
  flat: true,
  fragmentNames: [],
  selections: undefined,
}

/**
 * build selection based on stack
 *
 * main reducer:
 * - validate
 * - build flat selection
 * - build/retrive cached nested selections
 */
const buildRecursiveSelections = (props: CoreProps) => (stack: Edge[]): SelectionsResult => {
  const typename = lastTypename(stack)
  const fieldname = lastFieldname(stack)

  const vtx = props.graph.get(typename)
  const allowedDepth = props.config.maxDepth - (stack.length - 1)

  // trivial flat cases, always allowed
  if (
    // scalar not in schema or explicit scalar
    !vtx ||
    isEnumTypeDefinitionNode(vtx.value) ||
    isScalarTypeDefinitionNode(vtx.value)
  ) {
    return {
      ...noopResult,
      selections: [createField({ fieldname })],
    }
  }

  // disable nesting when depth 0 and circural queries
  if (allowedDepth < 1 || isStackCircural(stack)) {
    return { ...noopResult, complete: false }
  }

  // load from cache or build
  const nestedSelection =
    props.cache.selections.get(typename) ?? buildNestedSelections(props)(stack)

  // another noop
  if (!isNotEmpty(nestedSelection.selections)) {
    return noopResult
  }

  return {
    ...nestedSelection,
    // mark as not flat here
    flat: false,
  }
}

/**
 * wraps non-flat selection result in field and passthrough flat fields
 *
 * I want `buildSelections` fn to return flat/spreaded result for easier use in other modules,
 * but recursion needs to wrap nesting on each level - hence this helper
 */

const wrapNestedSelections = (
  selectionsResult: SelectionsResult,
  fieldname: Fieldname,
): NestableSelectionResult => {
  if (!isNotEmpty(selectionsResult.selections)) {
    return noopResult
  }

  if (selectionsResult.flat) {
    return {
      ...selectionsResult,
      selection: selectionsResult.selections[0],
    }
  }

  return {
    ...selectionsResult,
    selection: createField({
      fieldname,
      selections: selectionsResult.selections,
    }),
  }
}

/**
 * build selection for nested types
 */
const buildNestedSelections = (props: CoreProps) => (stack: Edge[]): SelectionsResult => {
  const typename = lastTypename(stack)

  // ! validated in buildRecursiveSelections
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const vtx = props.graph.get(typename)!

  let complete = true
  let flat = true

  const selections: SelectionNode[] = []
  const fragmentNames: FragmentName[] = []

  /*
   * handle ObjectTypes
   */

  if (isObjectTypeDefinitionNode(vtx.value)) {
    for (const edge of vtx.edgesArr || []) {
      const fieldname = edge[0]
      const recursive = buildRecursiveSelections(props)([...stack, edge])
      const wrapped = wrapNestedSelections(recursive, fieldname)

      if (!wrapped.selection) {
        complete = false
        continue
      }

      selections.push(wrapped.selection)
      fragmentNames.push(...wrapped.fragmentNames)

      // basically AND gate^^
      flat = flat && recursive.flat
      complete = complete && recursive.complete
    }

    // add typename if config and not empty
    // not adding to interface since inlines will have it, it makes things easier
    if (props.config.addTypename && selections.length !== 0) {
      selections.unshift(createField({ fieldname: '__typename' }))
    }
  }

  /*
   * handle UnionTypes
   */

  if (isUnionTypeDefinitionNode(vtx.value)) {
    // weird case of union without members
    if (!vtx.implementations) {
      return noopResult
    }

    for (const implem of vtx.implementations) {
      // replacing last stack entry when resolving union
      // not wrapping result since inlines should be on the same level as the rest
      const recursive = buildRecursiveSelections(props)(replaceLastTypename(stack, implem))

      if (!isNotEmpty(recursive.selections)) {
        complete = complete && recursive.complete
        continue
      }

      // but wrapping in inline fragment
      selections.push(createInlineFragment(implem, recursive.selections))
      fragmentNames.push(...recursive.fragmentNames)

      flat = flat && recursive.flat
      complete = complete && recursive.complete
    }
  }

  /*
   * handle InterfaceTypes
   */

  if (isInterfaceTypeDefinitonNode(vtx.value)) {
    // handle own fields
    for (const edge of vtx.edgesArr || []) {
      const fieldname = edge[0]
      const recursive = buildRecursiveSelections(props)([...stack, edge])
      const wrapped = wrapNestedSelections(recursive, fieldname)

      if (!wrapped.selection) {
        complete = false
        continue
      }

      selections.push(wrapped.selection)
      fragmentNames.push(...wrapped.fragmentNames)

      flat = flat && recursive.flat
      complete = complete && recursive.complete
    }

    // handle possible implementations
    for (const implem of vtx.implementations || []) {
      const recursive = buildRecursiveSelections(props)(replaceLastTypename(stack, implem))

      if (!isNotEmpty(recursive.selections)) {
        complete = complete && recursive.complete
        continue
      }

      selections.push(createInlineFragment(implem, recursive.selections))
      fragmentNames.push(...recursive.fragmentNames)

      flat = flat && recursive.flat
      complete = complete && recursive.complete
    }
  }

  /*
   * handle fragmenting and caching
   */

  return cacheAndFragment(props)(stack, {
    complete,
    flat,
    fragmentNames,
    selections,
  })
}

const cacheAndFragment = (props: CoreProps) => (
  stack: Edge[],
  result: SelectionsResult,
): SelectionsResult => {
  if (!isNotEmpty(result.selections)) {
    return noopResult
  }

  // ensure unique fragmentnames from nested deps
  const uniqueFragmentNames = onlyUnique(result.fragmentNames)
  const typename = lastTypename(stack)

  const uniquedResult: SelectionsResult = {
    ...result,
    fragmentNames: uniqueFragmentNames,
  }

  /*
   * write to cache,
   * if selection is complete (complex and uneffective to store partial ones)
   */
  const withCache = (res: SelectionsResult) => {
    if (res.complete && !props.cache.selections.has(typename)) {
      props.cache.selections.set(typename, res)
    }
    return res
  }

  /*
   * selecions with DEEP fragments are fragmented only when selection was complete
   */

  if (props.config.useFragments === FragmentType.DEEP && result.complete) {
    const fragmentName = getFragmentName(props)({
      typename,
      flat: false,
      complete: true,
    })

    if (!props.cache.fragments.has(fragmentName)) {
      const fragmentResult: FragmentResult = {
        fragment: createFragment({
          condition: typename,
          fragmentname: fragmentName,
          selections: result.selections,
        }),
        fragmentNames: uniqueFragmentNames,
        flat: result.flat,
        complete: true,
      }

      props.cache.fragments.set(fragmentName, fragmentResult)
    }

    return withCache({
      ...result,
      selections: [createFragmentSpread(fragmentName)],
      fragmentNames: [fragmentName, ...uniqueFragmentNames],
    })
  }

  /*
   * selecions with FLAT can always store (non-empty) flat part of selection
   * (inlines & spreads are not considered flat part)
   */
  if (props.config.useFragments === FragmentType.FLAT) {
    const { flat: flatSelections, deep: deepSelections } = result.flat
      ? { flat: result.selections, deep: [] }
      : result.selections.reduce(
          (acc, node) => {
            if (node.kind === Kind.FIELD && !node.selectionSet) {
              acc.flat.push(node)
            } else {
              acc.deep.push(node)
            }

            return acc
          },
          {
            flat: [] as SelectionNode[],
            deep: [] as SelectionNode[],
          },
        )

    // need to check for emptines or the empty fragment will be created
    //  => no flat part => return default since this setting is on flat
    //  => only typename in flat part => also empty & default
    const hasOnlyTypename =
      flatSelections.length === 1 &&
      flatSelections[0].kind === Kind.FIELD &&
      (flatSelections[0] as any).name.value === '__typename'

    if (!isNotEmpty(flatSelections) || hasOnlyTypename) {
      return withCache(uniquedResult)
    }

    const fragmentName = getFragmentName(props)({
      typename,
      flat: true,
      // flat is complete when deep.length === 0
      complete: result.complete,
    })

    if (!props.cache.fragments.has(fragmentName)) {
      const fragmentResult: FragmentResult = {
        fragment: createFragment({
          condition: typename,
          fragmentname: fragmentName,
          selections: flatSelections,
        }),
        // flat fragment has no dependant fragments
        fragmentNames: [],
        flat: true,
        complete: true,
      }

      props.cache.fragments.set(fragmentName, fragmentResult)
    }

    return withCache({
      ...result,
      selections: [createFragmentSpread(fragmentName), ...deepSelections],
      fragmentNames: [fragmentName, ...uniqueFragmentNames],
    })
  }

  // pass through
  return withCache(uniquedResult)
}
