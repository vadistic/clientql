import { FieldNode, FragmentDefinitionNode, Kind, SelectionNode } from 'graphql'
import {
  createField,
  createFragment,
  createFragmentSpread,
  createInlineFragment,
  isEnumTypeDefinitionNode,
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  unwrapSelectionSet,
} from '../ast'
import { CoreProps, FragmentType } from '../config'
import { Edge } from '../type-graph'
import { isNotEmpty } from '../utils'
import {
  isStackCircural,
  lastFieldname,
  lastTypename,
  onlyUnique,
  replaceLastTypename,
} from './utils'

export interface SelectionResult {
  selection?: FieldNode
  fragmentnames: string[]
  complete: boolean
  flat: boolean
}

export interface NestedSelectionsResult {
  selections: SelectionNode[]
  fragmentnames: string[]
  complete: boolean
  flat: boolean
}

export interface FragmentResult {
  definition: FragmentDefinitionNode
  deps: string[]
  flat: boolean
  // always complete
}

/**
 * this is main recursive reducer
 *
 * splitted in 2 because
 *  - I cache nested fragments by Typename+ content, not by edge
 *  - split validation + building
 */

export const buildSelection = (props: CoreProps) => (
  stack: Edge[],
): SelectionResult => {
  const typename = lastTypename(stack)
  const fieldname = lastFieldname(stack)

  const vtx = props.graph.get(typename)
  const allowedDepth = props.config.maxDepth - (stack.length - 1)

  const noop = {
    complete: true,
    flat: true,
    fragmentnames: [],
    selections: undefined,
  }

  if (isStackCircural(props)(stack)) {
    return { ...noop, complete: false }
  }

  // trivial flat cases, always allowed
  if (
    !vtx ||
    isEnumTypeDefinitionNode(vtx.value) ||
    isScalarTypeDefinitionNode(vtx.value)
  ) {
    return {
      complete: true,
      flat: true,
      fragmentnames: [],
      selection: createField({ fieldname }),
    }
  }

  // disable nesting when depth 0 and circural queries
  if (allowedDepth < 1) {
    return { ...noop, complete: false }
  }

  // load from cache or build
  const nestedSelection = props.selections.has(typename)
    ? props.selections.get(typename)!
    : buildNestedSelection(props)(stack)

  // another noop
  if (!isNotEmpty(nestedSelection.selections)) {
    return noop
  }

  return {
    ...nestedSelection,
    flat: false,
    selection: createField({
      fieldname,
      selections: nestedSelection.selections,
    }),
  }
}

/**
 * build selection for nested types
 */
const buildNestedSelection = (props: CoreProps) => (
  stack: Edge[],
): NestedSelectionsResult => {
  const typename = lastTypename(stack)
  const vtx = props.graph.get(typename)!

  if (isObjectTypeDefinitionNode(vtx.value)) {
    let complete = true
    let flat = true

    const selections: SelectionNode[] = []
    const fragmentnames: string[] = []

    for (const edge of vtx.edgesArr || []) {
      const res = buildSelection(props)([...stack, edge])

      if (!res.selection) {
        complete = false
        continue
      }

      selections.push(res.selection)
      fragmentnames.push(...res.fragmentnames)

      flat = flat && res.flat
      complete = complete && res.complete
    }

    return cacheAndFragment(props)(stack, {
      complete,
      flat,
      fragmentnames,
      selections,
    })
  }

  if (isUnionTypeDefinitionNode(vtx.value)) {
    // weird case of union without members
    if (!vtx.implementations) {
      return {
        complete: true,
        flat: true,
        fragmentnames: [],
        selections: [],
      }
    }

    let complete = true
    let flat = true

    const selections: SelectionNode[] = []
    const fragmentnames: string[] = []

    for (const implem of vtx.implementations) {
      // replacing last stack entry when resolving union, kind of portal?
      const res = buildSelection(props)(replaceLastTypename(stack, implem))

      // because I did this stack replacing and
      // it need to be on the same level as other union members
      const unwrapped = unwrapSelectionSet(res.selection)

      if (!unwrapped || !isNotEmpty(unwrapped)) {
        complete = false
        continue
      }

      selections.push(createInlineFragment(implem, unwrapped))
      fragmentnames.push(...res.fragmentnames)

      flat = flat && res.flat
      complete = complete && res.complete
    }

    return cacheAndFragment(props)(stack, {
      complete,
      flat,
      fragmentnames,
      selections,
    })
  }

  if (isInterfaceTypeDefinitonNode(vtx.value)) {
    let complete = true
    let flat = true

    const selections: SelectionNode[] = []
    const fragmentnames: string[] = []

    for (const edge of vtx.edgesArr || []) {
      const res = buildSelection(props)([...stack, edge])

      if (!res.selection) {
        complete = false
        continue
      }

      selections.push(res.selection)
      fragmentnames.push(...res.fragmentnames)

      flat = flat && res.flat
      complete = complete && res.complete
    }

    for (const implem of vtx.implementations || []) {
      const res = buildSelection(props)(replaceLastTypename(stack, implem))

      // because it need to be on the same level as interfaces
      const unwrapped = unwrapSelectionSet(res.selection)

      if (!unwrapped || !isNotEmpty(unwrapped)) {
        complete = false
        continue
      }

      selections.push(createInlineFragment(implem, unwrapped))
      fragmentnames.push(...res.fragmentnames)

      flat = flat && res.flat
      complete = complete && res.complete
    }

    return cacheAndFragment(props)(stack, {
      complete,
      flat,
      fragmentnames,
      selections,
    })
  }

  // noop
  return {
    complete: true,
    flat: true,
    fragmentnames: [],
    selections: [],
  }
}

/**
 * logic by FragmentType is:
 *
 *  NONE => pass through
 *  DEEP => pack in fragment if complete
 *  FLAT =>
 *    pack in fragment if flat flag (which is also complete btw.)
 *    select flat if not flat
 *
 * cache fragmentnames will store all nested fragment dependencies
 *
 */
const cacheAndFragment = (props: CoreProps) => (
  stack: Edge[],
  result: NestedSelectionsResult,
): NestedSelectionsResult => {
  const typename = lastTypename(stack)
  const uniqueFragmentnames = onlyUnique(result.fragmentnames)
  let fragmentedResult = { ...result, fragmentnames: uniqueFragmentnames }

  if (props.config.useFragments === FragmentType.DEEP && result.complete) {
    const fragmentname = typename + (result.flat ? 'Flat' : 'Deep')

    if (!props.fragments.has(fragmentname)) {
      props.fragments.set(fragmentname, {
        definition: createFragment({
          condition: typename,
          fragmentname,
          selections: result.selections,
        }),
        deps: uniqueFragmentnames,
        flat: result.flat,
      })
    }

    fragmentedResult = {
      ...fragmentedResult,
      selections: [createFragmentSpread(fragmentname)],
      fragmentnames: [fragmentname, ...uniqueFragmentnames],
    }
  }

  if (props.config.useFragments === FragmentType.FLAT) {
    const fragmentname = typename + 'Flat'

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

    if (!props.fragments.has(fragmentname)) {
      props.fragments.set(fragmentname, {
        definition: createFragment({
          condition: typename,
          fragmentname,
          selections: flatSelections,
        }),
        deps: [],
        flat: true,
      })
    }

    fragmentedResult = {
      ...fragmentedResult,
      selections: [createFragmentSpread(fragmentname), ...deepSelections],
      fragmentnames: [fragmentname, ...uniqueFragmentnames],
    }
  }

  /*
   * write to cache, if selection is complete (does not make sense to store partial ones)
   */
  if (fragmentedResult.complete && !props.selections.has(typename)) {
    props.selections.set(typename, fragmentedResult)
  }

  // return
  return fragmentedResult
}
