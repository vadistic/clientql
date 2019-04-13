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

export const createSelections = (props: CoreProps) => (target: Typename) => {
  const { selections, complete, fragmentnames } = createSelectionsLoop(props)(
    target,
    [['$ROOT', target]],
  )

  const retrivedFragments = Array.from(new Set(fragmentnames).values()).map(
    name => props.fragments.get(name),
  )

  return {
    selections,
    fragments: retrivedFragments,
  }
}

const isEdgeEqual = (a: Edge) => (b: Edge) => a[0] === b[0] && a[1] === b[1]

const isCircural = (stack: Edge[]) => (edge: Edge) => {
  if (
    stack.length === 2 &&
    stack[0][0] === '$ROOT' &&
    stack[0][1] === edge[1]
  ) {
    return true
  }

  return stack.some(isEdgeEqual(edge))
}

const createSelectionsLoop = (props: CoreProps) => (
  on: Typename,
  stack: Edge[],
) => {
  const current = props.graph.get(on)
  const allowedDepth = props.config.maxDepth - (stack.length - 1)
  const selectionLoop = createSelectionsLoop(props)

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
      console.log('allowedDepth', edge)
      isComplete = false
      continue
    }

    // avoid circles
    if (isCircural(stack)(edge)) {
      console.log('isCircural', edge)
      isComplete = false
      continue
    }

    /*
     * handle object
     */

    if (isObjectTypeDefinitionNode(target.value)) {
      const { complete, selections, fragmentnames } = selectionLoop(typename, [
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
        const { complete, selections, fragmentnames } = selectionLoop(implem, [
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

      isFlat = false
      result.push(createField({ fieldname, selections: inlines }))
      continue
    }

    /*
     * handle fragments
     */

    if (isInterfaceTypeDefinitonNode(target.value)) {
      // interface with no implementations?? not sure if possible
      if (!target.implementations) {
        continue
      }

      const own = selectionLoop(typename, [...stack, edge])

      if (own.fragmentnames.length !== 0) {
        nestedFragmentnames.push(...own.fragmentnames)
      }

      if (!own.complete) {
        isComplete = false
      }

      const ownAndInlines: SelectionNode[] = own.selections

      for (const implem of target.implementations) {
        const { complete, selections, fragmentnames } = selectionLoop(implem, [
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
  if (props.config.addTypename) {
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
