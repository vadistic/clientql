import { Kind } from '@graphql-clientgen/shared'
import { TypeNode } from 'graphql'

/**
 * It's transformation of non-null/array NodeTypes that will be easier to use and print
 */

export type TypeModifier = 'nonNull' | 'list'

export interface TypeNodeMeta {
  typename: string
  modifiers?: TypeModifier[]
}

/**
 * Means top level value is nullable
 */
export const isNullable = (typeMeta: TypeNodeMeta) =>
  !typeMeta.modifiers || typeMeta.modifiers[0] !== 'nonNull'

export const getTypeNodeMeta = (
  node: TypeNode,
  modifiers: TypeModifier[] = []
): TypeNodeMeta => {
  if (node.kind === Kind.NAMED_TYPE) {
    return {
      modifiers: modifiers.length !== 0 ? modifiers : undefined,
      typename: node.name.value
    }
  }

  if (node.kind === Kind.NON_NULL_TYPE) {
    return getTypeNodeMeta(node.type, [...modifiers, 'nonNull'])
  }

  if (node.kind === Kind.LIST_TYPE) {
    return getTypeNodeMeta(node.type, [...modifiers, 'list'])
  }

  /* noop */
  throw Error
}
