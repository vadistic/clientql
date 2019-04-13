import { ListTypeNode, NamedTypeNode, TypeNode } from 'graphql'
import { Kind, KindMap } from './kind'

/**
 * alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = KindMap['NON_NULL_TYPE'] | KindMap['LIST_TYPE']

export interface UnwrapType {
  type: NamedTypeNode
  typename: string
  modifiers: TypeModifier[]
}

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
 * same as unwarpType but without those modifiers when not needed
 */

export const getTypename = (node: TypeNode): string =>
  node.kind === Kind.NAMED_TYPE ? node.name.value : getTypename(node.type)

/**
 * means top level value is nullable
 */
export const isNullable = (
  node: TypeNode,
): node is ListTypeNode | NamedTypeNode => node.kind !== Kind.NON_NULL_TYPE

/**
 * recursively check if field type will be a list
 */

export const isList = (node: TypeNode): boolean =>
  node.kind === Kind.LIST_TYPE
    ? true
    : node.kind === Kind.NAMED_TYPE
    ? false
    : isList(node.type)
