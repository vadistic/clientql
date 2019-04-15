import {
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'

/*
 * for documentations in types, there is a lot of string tuples
 */
export type Typename = string
export type Fieldname = string
export type Fragmentname = string

export type ObjectLikeNode =
  | ObjectTypeDefinitionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeDefinitionNode
  | InterfaceTypeExtensionNode
