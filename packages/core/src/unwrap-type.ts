import { NamedTypeNode, TypeNode } from 'graphql'
import { Kind } from './kind'
import { Typename } from './map-ast'

/**
 * Alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = 'nonNull' | 'list'

export interface UnwrappedTypeNode {
  type: NamedTypeNode
  typename: Typename
  modifiers: TypeModifier[]
}

/*
 * This is as helper - do not need to store it in astMap - fieldmap will suffice
 */

export const unwrapType = (
  node: TypeNode,
  modifiers: TypeModifier[] = [],
): UnwrappedTypeNode => {
  if (node.kind === Kind.NON_NULL_TYPE) {
    return unwrapType(node.type, [...modifiers, 'nonNull'])
  }

  if (node.kind === Kind.LIST_TYPE) {
    return unwrapType(node.type, [...modifiers, 'list'])
  }

  // node.kind === Kind.NAMED_TYPE
  return {
    type: node,
    typename: node.name.value,
    modifiers,
  }
}
