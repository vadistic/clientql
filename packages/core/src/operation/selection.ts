import { InlineFragmentNode, Kind, SelectionNode } from 'graphql'
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
  Typename,
} from '../ast'
import { CoreProps, FragmentType } from '../config'
import { Edge } from '../type-graph'
import { isNotEmpty } from '../utils'

export interface SelectionResult {
  selections: SelectionNode[]
  fragmentnames: string[]
  complete: boolean
  flat: boolean
}

export const buildSelections = (props: CoreProps) => (target: Typename) =>
  buildNestedSelection(props)([['$ROOT', target]])

export const retriveCacheFragments = (props: CoreProps) => (
  fragmentnames: string[],
) => onlyUnique(fragmentnames).map(name => props.fragments.get(name)!)

// not sure at which stage do it and if this is performant way
const onlyUnique = (input: string[]) => Array.from(new Set(input).values())

const lastTypename = (stack: Edge[]) => stack[stack.length - 1][1]
const lastFieldname = (stack: Edge[]) => stack[stack.length - 1][0]

/**
 * edge will be circural if...
 */
const isCircural = (props: CoreProps) => (stack: Edge[]) => {
  // cannot circle just on the begining
  if (stack.length === 1) {
    return false
  }

  const firstTypename = stack[0][1]
  const typename = lastTypename(stack)
  const fieldname = lastFieldname(stack)

  // no idea how to check the first edge so
  // I'm just banning root/first typename
  if (firstTypename === typename) {
    return true
  }

  // cannot allow to duplicate any stack entry
  // (except first edge that is kinda virtual and the last)
  return stack.slice(1, -1).some(([a, b]) => a === fieldname && b === typename)
}

/**
 * this is main recursive reducer
 *
 * splitted in 2 because
 *  - I cache nested fragments by Typename+ content, not by edge
 *  - split validation + building
 */

const buildSelection = (props: CoreProps) => (
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
    selections: [],
  }

  if (isCircural(props)(stack)) {
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
      selections: [createField({ fieldname })],
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

  // top case => return unpacked
  if (stack.length === 1) {
    return nestedSelection
  }

  // return nested on one wrapping field
  return {
    ...nestedSelection,
    flat: false,
    selections: [
      createField({
        fieldname,
        selections: nestedSelection.selections,
      }),
    ],
  }
}

const buildNestedSelection = (props: CoreProps) => (
  stack: Edge[],
): SelectionResult => {
  const typename = lastTypename(stack)
  const vtx = props.graph.get(typename)!

  if (isObjectTypeDefinitionNode(vtx.value)) {
    let complete = true
    let flat = true

    const selections: SelectionNode[] = []
    const fragmentnames: string[] = []

    for (const edge of vtx.edgesArr || []) {
      const res = buildSelection(props)([...stack, edge])

      if (!isNotEmpty(res.selections)) {
        complete = false
        continue
      }

      selections.push(...res.selections)
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

    const stackBase = stack.slice(0, -1)
    const fieldname = lastFieldname(stack)

    for (const implem of vtx.implementations) {
      // replacing last stack entry when resolving union, kind of portal?
      const res = buildSelection(props)([...stackBase, [fieldname, implem]])

      if (!isNotEmpty(res.selections)) {
        complete = false
        continue
      }

      selections.push(createInlineFragment(implem, res.selections))
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

    const stackBase = stack.slice(0, -1)
    const fieldname = lastFieldname(stack)

    for (const edge of vtx.edgesArr || []) {
      const res = buildSelection(props)([...stack, edge])

      if (!isNotEmpty(res.selections)) {
        complete = false
        continue
      }

      selections.push(...res.selections)
      fragmentnames.push(...res.fragmentnames)

      flat = flat && res.flat
      complete = complete && res.complete
    }

    for (const implem of vtx.implementations || []) {
      const res = buildSelection(props)([...stackBase, [fieldname, implem]])

      if (!isNotEmpty(res.selections)) {
        complete = false
        continue
      }

      selections.push(createInlineFragment(implem, res.selections))
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
 */
const cacheAndFragment = (props: CoreProps) => (
  stack: Edge[],
  result: SelectionResult,
): SelectionResult => {
  let fragmentedResult = result
  const typename = lastTypename(stack)

  if (props.config.useFragments === FragmentType.DEEP && result.complete) {
    const fragmentname = typename + (result.flat ? 'Flat' : 'Deep')

    if (!props.fragments.has(fragmentname)) {
      props.fragments.set(
        fragmentname,
        createFragment({
          condition: typename,
          fragmentname,
          selections: result.selections,
        }),
      )
    }

    fragmentedResult = {
      ...result,
      selections: [createFragmentSpread(fragmentname)],
      fragmentnames: [fragmentname, ...result.fragmentnames],
    }
  }

  if (props.config.useFragments === FragmentType.FLAT) {
    const fragmentname = typename + 'Flat'

    const { flat, deep } = result.flat
      ? { flat: result.selections, deep: [] }
      : result.selections.reduce(
          (acc, node) => {
            if (
              node.kind === Kind.FIELD &&
              (!node.selectionSet || node.selectionSet.selections.length === 0)
            ) {
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
      props.fragments.set(
        fragmentname,
        createFragment({
          condition: typename,
          fragmentname,
          selections: flat,
        }),
      )
    }

    fragmentedResult = {
      ...result,
      selections: [createFragmentSpread(fragmentname), ...deep],
      fragmentnames: [fragmentname, ...result.fragmentnames],
    }
  }

  /*
   * write to cache, if selection is complete (does not make sense to store partial ones)
   */
  if (fragmentedResult.complete && !props.selections.has(typename)) {
    props.selections.set(typename, {
      ...fragmentedResult,
      fragmentnames: onlyUnique(fragmentedResult.fragmentnames),
    })
  }

  // return
  return fragmentedResult
}
