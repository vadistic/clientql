import { ListTypeNode, NamedTypeNode, TypeNode } from 'graphql'
import { Kind, KindMap } from './kind'

/**
 * Alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = KindMap['NON_NULL_TYPE'] | KindMap['LIST_TYPE']

export interface UnwrapType {
  type: NamedTypeNode
  typename: string
  modifiers: TypeModifier[]
}

/*
 * This is as helper - do not need to store it in astMap - fieldmap will suffice
 */

export const unwrapType = (
  node: TypeNode,
  modifiers: TypeModifier[] = [],
): UnwrapType => {
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
    modifiers,
  }
}

/**
 * Means top level value is nullable (need it e.g. for printing)
 */
export const isNullable = (
  node: TypeNode,
): node is ListTypeNode | NamedTypeNode => node.kind !== Kind.NON_NULL_TYPE
