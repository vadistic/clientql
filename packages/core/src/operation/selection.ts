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

export const buildSelections = (props: CoreProps) => (
  target: Typename,
  initalEdgeKey = '$ROOT',
) => {
  const initalStack: Edge[] = [[initalEdgeKey, target]]

  const { selections, complete, fragmentnames } = buildDeepSelection(props)(
    target,
    initalStack,
  )

  // I'm building those fragments anyway, but the goal for later
  // is to skip traversing graph where a tree was previously deemed complete and retrive from cache
  const cacheFragments = Array.from(new Set(fragmentnames).values()).map(
    name => props.fragments.get(name)!,
  )

  return {
    selections,
    fragments: cacheFragments,
    complete,
  }
}

/**
 * edge will be circural if...
 */
const isCircural = (props: CoreProps) => (
  stack: Edge[],
  [fieldname, typename]: Edge,
) => {
  // cannot circle just on the begining
  if (stack.length === 1) {
    return false
  }

  const [inital, second] = stack
  const [, initalTypename] = inital

  // do not go to the inital type so..
  // lets jsut check if duplicates any of stack entriess
  if (initalTypename !== typename) {
    return stack.some(([a, b]) => a === fieldname && b === typename)
  }

  // let's handle circle on the first element (since inital edge can be a mystery)
  const [secondFieldname, secondTypename] = second
  const target = props.graph.get(typename)

  // no target - no circle, life is simple
  if (!target) {
    return false
  }

  // this will mean a circle
  if (
    target.edgesMap &&
    target.edgesMap.get(secondFieldname) === secondTypename
  ) {
    return true
  }

  return false
}

/**
 * recursivelly build deep selection
 * as one big recursice fn + loop
 * and using function scope flags/mutation, but I hope it'll be fast this way
 */

const buildDeepSelection = (props: CoreProps) => (
  on: Typename,
  stack: Edge[],
) => {
  const current = props.graph.get(on)
  const allowedDepth = props.config.maxDepth - (stack.length - 1)
  const deepSelection = buildDeepSelection(props)

  const result: SelectionNode[] = []
  const nestedFragmentnames: string[] = []

  // flag to cheaply check if recursive selection can be wrapped in complete fragment
  let isComplete = true
  let isFlat = true

  // validation / base
  if (!current || !current.edgesArr || allowedDepth < 0) {
    return {
      selections: [],
      complete: true,
      fragmentnames: [],
      flat: true,
    }
  }

  for (const edge of current.edgesArr) {
    const [fieldname, typename] = edge
    const target = props.graph.get(typename)

    /*
     * handle flat
     */

    if (
      !target ||
      isEnumTypeDefinitionNode(target.value) ||
      isScalarTypeDefinitionNode(target.value)
    ) {
      result.push(createField({ fieldname }))
      continue
    }

    // cannot select nested on depth 0
    if (allowedDepth < 1) {
      isComplete = false
      continue
    }

    // avoid circles
    if (isCircural(props)(stack, edge)) {
      isComplete = false
      console.log('CIRCTLE', stack, '=>', edge)
      continue
    }

    /*
     * handle object
     */

    if (isObjectTypeDefinitionNode(target.value)) {
      const { complete, selections, fragmentnames } = deepSelection(typename, [
        ...stack,
        edge,
      ])

      if (fragmentnames.length !== 0) {
        nestedFragmentnames.push(...fragmentnames)
      }

      if (!complete) {
        isComplete = false
      }

      isFlat = false
      result.push(createField({ fieldname, selections }))
      continue
    }

    /*
     * handle union
     */

    if (isUnionTypeDefinitionNode(target.value)) {
      // union with no members
      if (!target.implementations) {
        continue
      }

      const inlines: InlineFragmentNode[] = []

      for (const implem of target.implementations) {
        const { complete, selections, fragmentnames } = deepSelection(implem, [
          ...stack,
          edge,
        ])

        if (fragmentnames.length !== 0) {
          nestedFragmentnames.push(...fragmentnames)
        }

        if (!complete) {
          isComplete = false
        }

        if (isNotEmpty(selections)) {
          inlines.push(createInlineFragment(implem, selections))
        }
      }

      if (!isNotEmpty(inlines)) {
        continue
      }

      isFlat = false
      result.push(createField({ fieldname, selections: inlines }))
      continue
    }

    /*
     * handle interfaces
     */

    if (isInterfaceTypeDefinitonNode(target.value)) {
      const own = deepSelection(typename, [...stack, edge])

      if (own.fragmentnames.length !== 0) {
        nestedFragmentnames.push(...own.fragmentnames)
      }

      if (!own.complete) {
        isComplete = false
      }

      const ownAndInlines: SelectionNode[] = own.selections

      // can interface have no implementations?? not sure if possible
      for (const implem of target.implementations || []) {
        const { complete, selections, fragmentnames } = deepSelection(implem, [
          ...stack,
          edge,
        ])

        if (fragmentnames.length !== 0) {
          nestedFragmentnames.push(...fragmentnames)
        }

        if (!complete) {
          isComplete = false
        }

        if (isNotEmpty(selections)) {
          ownAndInlines.push(createInlineFragment(implem, selections))
        }
      }

      if (!isNotEmpty(ownAndInlines)) {
        continue
      }

      isFlat = false
      result.push(createField({ fieldname, selections: ownAndInlines }))
      continue
    }
  }

  /**
   * process result
   */

  // empty
  if (result.length === 0) {
    return {
      selections: [],
      fragmentnames: [],
      complete: true,
    }
  }

  // add typename

  // ! but not on root fields because it will create for them weird flat fragments with only typename
  // TODO: how to hand it + probably a helper to check if root to support custom schema definitions
  if (
    props.config.addTypename &&
    !['Query', 'Mutation', 'Subscription'].includes(on)
  ) {
    result.unshift(createField({ fieldname: '__typename' }))
  }

  // no fragments
  if (props.config.useFragments === FragmentType.NONE) {
    return {
      selections: result,
      fragmentnames: nestedFragmentnames,
      complete: isComplete,
    }
  }

  /**
   * fragmentarize
   *
   * I've used global flags for "isFlat" & "isComplete" and passed result in recursion,
   * it seems like smart way to do it.
   *
   * "Complete" indicate that selection has all possible fields so it can be used as fragment everywhere
   * - selection skipped fields because of depth limit is not complete
   * - circural selection that has skipped circural fields is not complete
   * - flat fragment is always complete
   *
   * I'm not playing with partial fragments, because even simple circural datamodel will produce
   * tons of UserWithoutPostWithoutPostUserWithoutWhatever
   * (and it's getting crazy with unions/ interfaces)
   */

  // fragmentarize complete result
  // complete + isFlat OR complete + FragmentType.FLAT => wrap everything in fragment
  if (
    isComplete &&
    (isFlat || props.config.useFragments === FragmentType.DEEP)
  ) {
    const fragmentname = on + (isFlat ? 'Flat' : 'Deep')

    // conditionaly register fragment
    if (!props.fragments.has(fragmentname)) {
      props.fragments.set(
        fragmentname,
        createFragment({
          condition: on,
          fragmentname,
          selections: result,
        }),
      )
    }

    return {
      selections: [createFragmentSpread(fragmentname)],
      fragmentnames: [fragmentname, ...nestedFragmentnames],
      complete: isComplete,
    }
  }

  // FragmentType.FLAT but was not flat OR not complete
  // => divide into flat and deep selection
  if (props.config.useFragments === FragmentType.FLAT) {
    const fragmentname = on + 'Flat'

    const flat = result.filter(
      node => node.kind === Kind.FIELD && !node.selectionSet,
    )
    const deep = result.filter(
      node =>
        node.kind !== Kind.FIELD ||
        (node.selectionSet && isNotEmpty(node.selectionSet)),
    )

    const hasFlatPart = flat.length !== 0

    // conditionaly register fragment
    if (hasFlatPart && !props.fragments.has(fragmentname)) {
      props.fragments.set(
        fragmentname,
        createFragment({
          condition: on,
          fragmentname,
          selections: flat,
        }),
      )
    }

    return {
      selections: [
        ...(hasFlatPart ? [createFragmentSpread(fragmentname)] : []),
        ...deep,
      ],
      fragmentnames: [
        ...(fragmentname ? [fragmentname] : []),
        ...nestedFragmentnames,
      ],
      complete: isComplete,
    }
  }

  // fallthrough
  return {
    selections: result,
    fragmentnames: nestedFragmentnames,
    complete: isComplete,
  }
}
