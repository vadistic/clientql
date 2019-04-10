import { NamedTypeNode, TypeNode } from 'graphql'
import { KindMap } from './graphql-utils'
import { Kind } from './kind'
import { Typename } from './type-graph'

/**
 * Alternative to those nested Null/List types that is easier to print
 */

export type TypeModifier = KindMap['NON_NULL_TYPE'] | KindMap['LIST_TYPE']

export interface UnwrappedTypeNode {
  type: NamedTypeNode
  typename: Typename
  shape: TypeModifier[]
}

/*
 * This is as helper - do not need to store it in astMap - fieldmap will suffice
 */

export const unwrapType = (
  node: TypeNode,
  modifiers: TypeModifier[] = [],
): UnwrappedTypeNode => {
  if (node.kind === Kind.NON_NULL_TYPE) {
    return unwrapType(node.type, [...modifiers, Kind.NON_NULL_TYPE])
  }

  if (node.kind === Kind.LIST_TYPE) {
    return unwrapType(node.type, [...modifiers, Kind.LIST_TYPE])
  }

  // node.kind === Kind.NAMED_TYPE
  return {
    type: node,
    typename: node.name.value,
    shape: modifiers,
  }
}
