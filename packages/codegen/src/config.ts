import {
  FieldDefinitionNode,
  InputObjectTypeDefinitionNode,
  InputObjectTypeExtensionNode,
  InputValueDefinitionNode,
  TypeNode,
} from 'graphql'
import { NullableString } from './strings'
import { ObjectLikeNode, ObjectOrIntefaceNode } from './utils'

export interface CodegenPrinterConfig {
  /**
   * add __typename to generated types
   * pass 'string' to add it as 'string' instead of specific name
   * @default: true
   */
  addTypename: boolean | 'string'
  /**
   * add some custom scalars (that may be missing or be untyped in schema)
   * @default {ID: 'string', DateTime: 'string', JSON: 'any'}
   */
  customScalars: {
    [scalarname: string]: string
  }
  /**
   * print object/interface fields as functions of arguments
   *  @default: false
   */
  addFieldsAsFunction: boolean
  /**
   * print separate interfaces for all field arguments
   *  @default: true
   */
  addFieldArgumentsInterface: boolean
  /**
   * if generating interfaces for field arguments - what suffix should be used?
   * @default: 'Args'
   */
  fieldArgumentsInterfaceSuffix: string
  /**
   * prefix graphql interface/object/input object/union with 'I' or custom string
   * @default: false
   */
  interfacePrefix: boolean | string
  /**
   * should interface prefix be added to union type?
   * @default: false
   */
  useInterfacePrefixForUnion: boolean
  /**
   * sufix for fragment interfaces
   * @default: 'Fragment'
   */
  fragmentSuffix: string
  /**
   * use object literal instead of enums
   * @default: true
   */
  useMapsForEnum: boolean
  /**
   * use Maybe<type> for nullable types
   * @default: false
   */
  useMaybeType: boolean
  /**
   * use field?: string | null for nullable types
   * @default: true
   */
  useOptionalModifier: boolean
  /**
   * whether object types interfaces should extend their graphql interfaces' interfaces
   * (with removal of duplicate fields from object itself)
   * @default: true
   */
  useExtendedInterfaces: boolean

  /*
   * CUSTOM APIS
   */

  /**
   * callback to add custom extend to generated object-like interfaces
   */
  extendObjectInterface?: (
    node: ObjectLikeNode,
    prev: string[],
  ) => NullableString | NullableString[]
  /**
   * callback to modify field arguments codegen result
   * OR modify nodes and use provided printer to operate on ast
   *
   * undefined leaves field unchanged (prev)
   * null remove field
   */
  transformFieldArguments?: <
    Parent extends ObjectOrIntefaceNode,
    Field extends FieldDefinitionNode
  >(
    parent: Parent,
    field: Field,
    prev: string | undefined,
    printer: (field: Field) => string,
  ) => string | null | undefined | void
  /**
   * same, but modify field value/ function return instead of arguments
   * it's not perfectly cool because it's string based so -
   * it does not support changing optional modifier yet...
   */
  transformFieldType?: <
    Parent extends ObjectOrIntefaceNode,
    Field extends FieldDefinitionNode
  >(
    parent: Parent,
    field: Field,
    prev: string | undefined,
    printer: (type: TypeNode) => string,
  ) => string | null | undefined | void
  /**
   * same, but for input value types
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
  addFieldsAsFunction: false,
  addFieldArgumentsInterface: false,
  fieldArgumentsInterfaceSuffix: 'Args',
  interfacePrefix: false,
  useInterfacePrefixForUnion: false,
  fragmentSuffix: 'Fragment',
  useMapsForEnum: true,
  useMaybeType: false,
  useOptionalModifier: true,
  useExtendedInterfaces: true,
  customScalars: {
    ID: 'string',
    DateTime: 'string',
    JSON: 'any',
    Json: 'any',
  },
}
