import {
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
  Kind,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
  TypeNode,
} from 'graphql'

export type Truthy<T> = T extends boolean ? never : NonNullable<T> & true

export const truthy = <T>(input: T): input is Truthy<T> => !!input

export const isNotEmpty = <T>(input: T): input is NonNullable<T> =>
  !!input &&
  (typeof input === 'object'
    ? Array.isArray(input)
      ? input.length > 0
      : Object.keys(input).length > 0
    : true)

export const isString = (input: any): input is string =>
  typeof input === 'string'
/**
 * Alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = 'nonNull' | 'list'

export interface BuildTypemap {
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
): BuildTypemap => {
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

export type ObjectOrIntefaceNode =
  | ObjectTypeDefinitionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeDefinitionNode
  | InterfaceTypeExtensionNode
  | InputObjectTypeDefinitionNode
  | InputObjectTypeExtensionNode

export type ObjectLikeNode =
  | ObjectOrIntefaceNode
  | InputObjectTypeDefinitionNode
  | InputObjectTypeExtensionNode
