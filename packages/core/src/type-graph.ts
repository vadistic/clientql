import { DocumentNode, ObjectTypeDefinitionNode } from 'graphql'
import { isObjectTypeDefinitionNode } from './graphql-guards'
import { truePipe, tuplify } from './types'
import { TypeModifier, unwrapType } from './unwrap-type'

export type Typename = string
export type Fieldname = string

export type StackItem = [Fieldname, Typename]
export type Stack = StackItem[]

export type Edge = [Fieldname, Typename | null]

export type Typemap = Map<Typename, ObjectTypeDefinitionNode>
export type Fieldmap = Map<Fieldname, Typename | null>
// ??? how to name it?
export type FieldmapMap = Map<Typename, Fieldmap>

export interface TypeVertex {
  typename: Typename
  node: ObjectTypeDefinitionNode
  edges: Edge[]
  edgeShape: (fieldname: Fieldname) => TypeModifier[]
  enter: (fieldname: Fieldname) => TypeVertex | null | undefined
  leave: () => TypeVertex | undefined
  // state of graph unidirectional graph traversal
  stack: Stack
}

export const createTypeGraph = (doc: DocumentNode) => {
  /*
   * build graph maps
   */
  const typemap = new Map<Typename, ObjectTypeDefinitionNode>()
  const fieldmapMap = new Map<Typename, Map<Fieldname, Typename | null>>()

  // set typemap
  doc.definitions.forEach(
    node =>
      isObjectTypeDefinitionNode(node) && typemap.set(node.name.value, node),
  )

  // set fieldmaps
  typemap.forEach(node => {
    const fieldmap = new Map<Fieldname, Typename | null>()
    ;(node.fields || []).forEach(field => {
      const { typename } = unwrapType(field.type)
      fieldmap.set(field.name.value, typemap.has(typename) ? typename : null)
    })

    fieldmapMap.set(node.name.value, fieldmap)
  })

  // set common root fieldmap for query/mutation/subscription
  const rootOps = [
    typemap.get('Query'),
    typemap.get('Mutation'),
    typemap.get('Subscription'),
  ]
    .filter(obj => !!obj)
    .map(obj => [...fieldmapMap.get(obj!.name.value)!])
    .flat(1)

  fieldmapMap.set('Root', new Map(rootOps))

  /*
   * type vertex helper methods
   */
  const enter = (
    fieldname: Fieldname,
    typename: Typename = 'Root',
    stack: Stack = [[fieldname, typename]],
  ) => {
    const childTypename = fieldmapMap.get(typename)!.get(fieldname)
    // invalid fieldname
    if (childTypename === undefined) {
      return undefined
    }
    // non-object type/ leaf
    if (childTypename === null) {
      return null
    }

    return get(childTypename, stack)
  }

  const leave = (stack: Stack) =>
    truePipe(
      () => stack.length !== 0 && stack.slice(-1)[0][1],
      typename => get(typename, stack.slice(0, -1)),
    )()

  const edgeShape = (typename: Typename) => (fieldname: Fieldname) =>
    truePipe(
      () => typemap.has(typename),
      () => typemap.get(typename),
      ({ fields }) => fields!.find(field => field.name.value === fieldname),
      ({ type }) => unwrapType(type).shape,
    )()!

  /*
   * this one builds actual vertex
   */

  const get = (
    typename: Typename,
    stack: Stack = [],
  ): TypeVertex | undefined => {
    if (!typemap.has(typename)) {
      return undefined
    }

    return {
      typename,
      node: typemap.get(typename)!,
      edges: Array.from(fieldmapMap.get(typename)!.entries()),
      edgeShape: edgeShape(typename),
      enter: (fieldname: Fieldname) =>
        enter(fieldname, typename, [...stack, [fieldname, typename]]),
      leave: () => leave(stack),
      stack,
    }
  }

  /*
   * jump directly by edges to some target node
   * maybe will come useful
   */

  const deepEnter = (fieldnames: Fieldname[], typename: Typename = 'Root') => {
    // first loop needs to call standalone enter,
    // then enter helper on vertex will be used in recursion
    const [head, ...tail] = fieldnames
    const first = enter(head, typename, [[head, typename]])

    const loop = (
      vtx: TypeVertex,
      ...loopFieldnames: Fieldname[]
    ): TypeVertex | null | undefined => {
      const [loopHead, ...loopTail] = loopFieldnames

      const next = vtx.enter(loopHead)

      return !!next && loopTail.length !== 0 ? loop(next, ...loopTail) : next
    }

    return !!first && tail.length !== 0 ? loop(first, ...tail) : first
  }

  return { typemap, fieldmaps: fieldmapMap, get, leave, enter, deepEnter }
}
