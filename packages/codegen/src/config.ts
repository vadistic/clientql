import {
  FieldDefinitionNode,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
  TypeNode,
} from 'graphql'
import { NullableString } from './strings'
import { ObjectLikeNode } from './utils'

export interface CodegenPrinterConfig {
  /**
   * add `__typename` to generated types
   *  - `string` => add it as `__typename: string` instead of specific name
   *  - `boolean` => on/off
   * @default true
   */
  addTypename: boolean | 'string'
  /**
   * add type description as JSDoc comment
   *  - 'comment' to add also comment descriptions
   * @default 'comment'
   */
  addDescription: boolean | 'comment'
  /**
   * provide types for custom scalars (which are untyped in schema)
   * - !!! if their scalar nodes are not present in provided ast
   *   this will not add them to schema
   *   (to avoid duplication with multiple print runs etc.)
   *
   * @default {ID: 'string', DateTime: 'string', JSON: 'any'}
   */
  customScalars: {
    [scalarname: string]: string
  }
  /**
   * print ObjectType/InterfaceType fields as functions of arguments
   * @example interface Post { author: (args?: {id: string}) => Author }
   * @default false
   */
  addFieldAsFunction: boolean
  /**
   * print separate interfaces for all field arguments
   *  @default false
   */
  useFieldArgumentsInterface: boolean
  /**
   * if `addFieldArgumentsInterface` - what suffix should be used?
   * @example 'QueryUserArgs' for type Query { user (args: X){...} }
   * @default 'Args'
   */
  fieldArgumentsInterfaceSuffix: string
  /**
   * prefix interface with 'I' or custom string
   * - !!! needs schema to determine type
   * @default false
   */
  interfacePrefix: boolean | string
  /**
   * prefix graphQL unions with inteface prefix
   * @default false
   */
  useInterfacePrefixForUnion: boolean
  /**
   * sufix for fragment interfaces
   * @example 'UserFragment' for 'fragment User on User'
   * @default 'Fragment'
   */
  fragmentSuffix: string
  /**
   * use object literal map + interface instead of TS enums
   * @default true
   */
  useMapsForEnum: boolean
  /**
   * use `Maybe<type>` for nullable types
   * @default false
   */
  useMaybeType: boolean
  /**
   * use field?: string | null for nullable types
   * @default true
   */
  useOptionalModifier: boolean
  /**
   * use `interface SomeObjectType extends SomeInterfaceType {}`
   * - with deduping of interface fields from ObjectType
   * - !!! needs schema to determine fields
   * @default false
   */
  useExtendedInterfaces: boolean

  /*
   * SOME CUSTOM CALLBACK APIS
   */

  /**
   * callback to add /modify interface Extends of ObjectType/ InterfaceType
   */
  transformIntefaceExtend?: (
    node: ObjectLikeNode,
    prev: string[],
  ) => NullableString | NullableString[]
  /**
   * callback to modify field arguments of ObjectType/ InterfaceType
   *
   * - return `undefined` for unchanged
   * - return `null` for delete field
   */
  transformFieldArguments?: <
    Parent extends ObjectLikeNode,
    Field extends FieldDefinitionNode
  >(
    parent: Parent,
    field: Field,
    prev: string | undefined,
    printer: (field: Field) => string,
  ) => string | null | undefined | void
  /**
   * callback to modify field return of ObjectType/ InterfaceType
   *
   * ! cannot change field optional modifier when it's used!
   *
   * - return `undefined` for unchanged
   * - return `null` for delete field
   */
  transformFieldType?: <
    Parent extends ObjectLikeNode,
    Field extends FieldDefinitionNode
  >(
    parent: Parent,
    field: Field,
    prev: string | undefined,
    printer: (type: TypeNode) => string,
  ) => string | null | undefined | void
  /**
   * callback to modify field type of InputObjectType
   *
   * ! also cannot change field optional modifier when it's used!
   *
   * - return `undefined` for unchanged
   * - return `null` for delete field
   */
  transformInputValueType?: <
    Parent extends InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode,
    InputValue extends InputValueDefinitionNode
  >(
    parent: Parent,
    inputValue: InputValue,
    prev: string | undefined,
    printer: (inputValue: InputValue) => string,
  ) => string | null | undefined | void
}

export const defaultConfig: CodegenPrinterConfig = {
  addTypename: true,
  addDescription: true,
  addFieldAsFunction: false,
  useFieldArgumentsInterface: false,
  fieldArgumentsInterfaceSuffix: 'Args',
  interfacePrefix: false,
  useInterfacePrefixForUnion: false,
  fragmentSuffix: 'Fragment',
  useMapsForEnum: true,
  useMaybeType: false,
  useOptionalModifier: true,
  useExtendedInterfaces: false,
  customScalars: {
    ID: 'string',
    DateTime: 'string',
    JSON: 'any',
    Json: 'any',
  },
}
