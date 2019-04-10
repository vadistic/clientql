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
import { mergeExtensions } from './merge-extensions'
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
import { truthy } from './types'

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

    // it does not handle chainging comments config here but who cares
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

    /*
     * PRINTERS
     */

    /**
     * type system definitions
     */
    const inputObjectPrinter = printInputObject(dynamicConfig, dynamicSchema)
    const objectPrinter = printObject(dynamicConfig, dynamicSchema)
    const interfacePrinter = printInterface(dynamicConfig, dynamicSchema)
    const unionPrinter = printUnion(dynamicConfig, dynamicSchema)
    const enumPrinter = printEnum(dynamicConfig, dynamicSchema)
    const scalarPrinter = printScalar(dynamicConfig, dynamicSchema)

    /*
     * type reference
     */
    const typePrinter = printType(dynamicConfig, dynamicSchema)
    const namedTypePrinter = printNamedType(dynamicConfig, dynamicSchema)
    const inputValuePrinter = printInputValue(dynamicConfig, dynamicSchema)
    const fieldPrinter = printFieldDefinition(dynamicConfig, dynamicSchema)
    const argumentPrinter = printArgument(dynamicConfig, dynamicSchema)

    /**
     * TODO: Operations
     */

    /*
     * rest
     */
    const valuePrinter = printValue(dynamicConfig, dynamicSchema)
    const objectFieldPrinter = printObjectField(dynamicConfig, dynamicSchema)
    const schemaDefinitionPrinter = printSchemaDefinition(
      dynamicConfig,
      dynamicSchema,
    )

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

    // supports ast arrays
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
