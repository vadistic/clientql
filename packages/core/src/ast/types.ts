import {
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
} from 'graphql'
import { Flavour } from '../utils'

/*
 * for documentations in types, there is a lot of string tuples
 */
export type Typename = Flavour<string, 'Typename'>
export type Fieldname = Flavour<string, 'Fieldname'>
export type FragmentName = Flavour<string, 'FragmentName'>
export type OperationName = Flavour<string, 'OperationName'>

export type TypescriptString = Flavour<string, 'TypescriptString'>
export type GraphqlString = Flavour<string, 'GraphqlString'>

export type ObjectLikeNode =
  | ObjectTypeDefinitionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeDefinitionNode
  | InterfaceTypeExtensionNode
