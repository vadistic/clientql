import { mergeExtensions, truthy } from '@graphql-clientgen/core'
import {
  ASTNode,
  buildASTSchema,
  DocumentNode,
  extendSchema,
  GraphQLSchema,
  Kind,
  parse,
} from 'graphql'
import { CodegenPrinterConfig, defaultConfig } from './config'
import {
  printArgument,
  printFieldDefinition,
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

/**
 * Create printer - schema needs to be provided mainly for
 * - correct interfaces prefixing
 * - using extended interfaces
 *
 * can be skipped otherwise
 */

export const createCodegenPrinter = (
  config?: Partial<CodegenPrinterConfig>,
  schema?: GraphQLSchema | DocumentNode | string,
) => {
  let initalSchema: GraphQLSchema | undefined
  const initalConfig = { ...defaultConfig, ...config }

  /**
   * allow providing schema as doc | string | schema +  merge extensions when possible
   *
   * (in outer scope for performance)
   */

  const schemaOptions = {
    commentDescriptions: initalConfig.addDescription === 'comment',
    assumeValid: true,
    assumeValidSDL: true,
  }

  if (typeof schema === 'string') {
    initalSchema = buildASTSchema(mergeExtensions(parse(schema)), schemaOptions)
  } else if (schema && 'kind' in schema && schema.kind === Kind.DOCUMENT) {
    initalSchema = buildASTSchema(mergeExtensions(schema), schemaOptions)
  } else if (schema instanceof GraphQLSchema) {
    // no way to merge extensions :/
    initalSchema = schema
  }

  /**
   * codegen printer function
   */

  const printer = (
    ast: ASTNode | ASTNode[],
    configOverride?: Partial<CodegenPrinterConfig>,
  ) => {
    /*
     * dynamic extension of schema & config
     */

    let dynamicSchema = initalSchema
    const dynamicConfig = configOverride
      ? { ...initalConfig, ...configOverride }
      : initalConfig

    // try creating schema on the go when no initalSchema
    if (!initalSchema && !Array.isArray(ast) && ast.kind === Kind.DOCUMENT) {
      try {
        dynamicSchema = buildASTSchema(mergeExtensions(ast), schemaOptions)
      } catch (err) {
        /* noop */
      }
    }

    // merge doc into initalSchema if inital schema & provided ast was a doc
    if (initalSchema && !Array.isArray(ast) && ast.kind === Kind.DOCUMENT) {
      dynamicSchema = extendSchema(initalSchema, ast, schemaOptions)
    }

    /**
     * rescursive main loop
     */
    const printReducer = (node: ASTNode): string | null => {
      switch (node.kind) {
        /**
         * enter recursion
         */
        case Kind.DOCUMENT:
          return node.definitions.map(printReducer).join('\n\n')

        /**
         * type system definitions
         */
        case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        case Kind.INPUT_OBJECT_TYPE_EXTENSION:
          return printInputObject(dynamicConfig, dynamicSchema)(node)
        case Kind.OBJECT_TYPE_DEFINITION:
        case Kind.OBJECT_TYPE_EXTENSION:
          return printObject(dynamicConfig, dynamicSchema)(node)
        case Kind.INTERFACE_TYPE_DEFINITION:
        case Kind.INTERFACE_TYPE_EXTENSION:
          return printInterface(dynamicConfig, dynamicSchema)(node)
        case Kind.UNION_TYPE_DEFINITION:
        case Kind.UNION_TYPE_EXTENSION:
          return printUnion(dynamicConfig, dynamicSchema)(node)
        case Kind.ENUM_TYPE_DEFINITION:
        case Kind.ENUM_TYPE_EXTENSION:
          return printEnum(dynamicConfig, dynamicSchema)(node)
        case Kind.SCALAR_TYPE_DEFINITION:
        case Kind.SCALAR_TYPE_EXTENSION:
          return printScalar(dynamicConfig, dynamicSchema)(node)

        /**
         * type reference
         */
        case Kind.INPUT_VALUE_DEFINITION:
          return printInputValue(dynamicConfig, dynamicSchema)(node)
        case Kind.FIELD_DEFINITION:
          return printFieldDefinition(dynamicConfig, dynamicSchema)(node)
        case Kind.NON_NULL_TYPE:
        case Kind.LIST_TYPE:
          return printType(dynamicConfig, dynamicSchema)(node)
        case Kind.NAMED_TYPE:
          return printNamedType(dynamicConfig, dynamicSchema)(node)
        case Kind.ARGUMENT:
          return printArgument(dynamicConfig, dynamicSchema)(node)

        /**
         * schema
         */
        case Kind.SCHEMA_DEFINITION:
        case Kind.SCHEMA_EXTENSION:
          return printSchemaDefinition(dynamicConfig, dynamicSchema)(node)

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
          return printValue(dynamicConfig, dynamicSchema)(node)
        case Kind.OBJECT_FIELD:
          return printObjectField(dynamicConfig, dynamicSchema)(node)
        case Kind.NAME:
          return node.value
        default:
          return null
      }
    }

    // supports ast as arrays
    if (Array.isArray(ast)) {
      return ast
        .map(printReducer)
        .filter(truthy)
        .join('\n\n')
    }

    return printReducer(ast)
  }

  return printer
}

/**
 * printer with all default config & no schema
 */
export const codegenPrinter = createCodegenPrinter()
