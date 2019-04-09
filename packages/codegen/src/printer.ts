import { ASTNode, GraphQLSchema, Kind } from 'graphql'
import { CodegenPrinterConfig, defaultConfig } from './config'
import {
  printArgument,
  printField,
  printInputValue,
  printNamedType,
  printObjectField,
  printSchemaDefinition,
  printType,
  printValue,
} from './type-reference'
import {
  printEnum,
  printInputObject,
  printInterface,
  printObject,
  printScalar,
  printUnion,
} from './type-system'
import { truthy } from './utils'

/**
 * Create print function - schema needs to be provided only for correct interfaces prefixing
 * (can be skipped with no prefix)
 */

export const createCodegenPrinter = (
  config?: Partial<CodegenPrinterConfig>,
  schema?: GraphQLSchema,
) => (ast: ASTNode | ASTNode[]) => {
  const mergedConfig = { ...defaultConfig, ...config }

  // TODO: merge extensions?
  // TODO2: extend schema with provided doc
  const mergedSchema = schema

  /**
   * type system definitions
   */
  const inputObjectPrinter = printInputObject(mergedConfig, mergedSchema)
  const objectPrinter = printObject(mergedConfig, mergedSchema)
  const interfacePrinter = printInterface(mergedConfig, mergedSchema)
  const unionPrinter = printUnion(mergedConfig, mergedSchema)
  const enumPrinter = printEnum(mergedConfig, mergedSchema)
  const scalarPrinter = printScalar(mergedConfig, mergedSchema)

  /**
   * type reference
   */
  const typePrinter = printType(mergedConfig, mergedSchema)
  const namedTypePrinter = printNamedType(mergedConfig, mergedSchema)
  const inputValuePrinter = printInputValue(mergedConfig, mergedSchema)
  const fieldPrinter = printField(mergedConfig, mergedSchema)
  const argumentPrinter = printArgument(mergedConfig, mergedSchema)

  /**
   * TODO: Operations
   */

  /**
   * rest
   */
  const valuePrinter = printValue(mergedConfig, mergedSchema)
  const objectFieldPrinter = printObjectField(mergedConfig, mergedSchema)
  const schemaDefinitionPrinter = printSchemaDefinition(
    mergedConfig,
    mergedSchema,
  )

  const printReducer = (node: ASTNode): string | null => {
    switch (node.kind) {
      /**
       * main
       */
      case Kind.DOCUMENT:
        return node.definitions.map(printReducer).join('\n\n')

      /**
       * type system definitions
       */
      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return inputObjectPrinter(node)
      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.OBJECT_TYPE_EXTENSION:
        return objectPrinter(node)
      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_EXTENSION:
        return interfacePrinter(node)
      case Kind.UNION_TYPE_DEFINITION:
      case Kind.UNION_TYPE_EXTENSION:
        return unionPrinter(node)
      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_EXTENSION:
        return enumPrinter(node)
      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.SCALAR_TYPE_EXTENSION:
        return scalarPrinter(node)

      /**
       * type reference
       */
      case Kind.INPUT_VALUE_DEFINITION:
        return inputValuePrinter(node)
      case Kind.FIELD_DEFINITION:
        return fieldPrinter(node)
      case Kind.NON_NULL_TYPE:
      case Kind.LIST_TYPE:
        return typePrinter(node)
      case Kind.NAMED_TYPE:
        return namedTypePrinter(node)
      case Kind.ARGUMENT:
        return argumentPrinter(node)

      /**
       * schema
       */
      case Kind.SCHEMA_DEFINITION:
      case Kind.SCHEMA_EXTENSION:
        return schemaDefinitionPrinter(node)

      /**
       * primitives
       */

      case Kind.INT:
      case Kind.FLOAT:
      case Kind.STRING:
      case Kind.BOOLEAN:
      case Kind.ENUM:
      case Kind.NULL:
      case Kind.LIST:
      case Kind.OBJECT:
      case Kind.VARIABLE:
        return valuePrinter(node)
      case Kind.OBJECT_FIELD:
        return objectFieldPrinter(node)
      case Kind.NAME:
        return node.value
      default:
        return null
    }
  }

  if (Array.isArray(ast)) {
    return ast
      .map(printReducer)
      .filter(truthy)
      .join('\n\n')
  }

  return printReducer(ast)
}

/**
 * printer with default config
 */
export const printTypings = createCodegenPrinter()
