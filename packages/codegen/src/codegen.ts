import {
  CoreProps,
  getCoreProps,
  mergeExtensions,
} from '@graphql-clientgen/core'
import { ASTNode, DocumentNode, Kind, parse } from 'graphql'
import { CodegenConfig, defaultCodegenConfig } from './config'
import { printSchemaDefinition } from './type-reference'
import {
  printEnum,
  printInputObject,
  printInterface,
  printObject,
  printScalar,
  printUnion,
} from './type-system'

export interface CodegenProps extends CoreProps {
  config: CodegenConfig
  doc: DocumentNode
}

export const getCodegenProps = (
  doc: DocumentNode,
  config?: Partial<CodegenConfig>,
): CodegenProps => {
  const mergedConfig = {
    ...defaultCodegenConfig,
    ...config,
  }

  const mergedDoc = mergeExtensions(doc)

  return {
    ...getCoreProps(mergedDoc, mergedConfig),
    doc: mergedDoc,
    config: {
      ...defaultCodegenConfig,
      ...config,
    },
  }
}

/**
 * Create codegen printer, preloaded doc if first call usead as reference for
 * - correct interfaces prefixing
 * - using extended interfaces
 * - operation definitions
 *
 * can be noop otherwise
 */

export const createCodegen = (
  doc?: DocumentNode | string,
  config?: Partial<CodegenConfig>,
) => {
  const props = getCodegenProps(
    typeof doc === 'string'
      ? parse(doc)
      : doc || {
          kind: Kind.DOCUMENT,
          definitions: [],
        },
    config,
  )

  const printer = (node: ASTNode, overrides?: Partial<CodegenConfig>) =>
    codegen({
      ...props,
      config: {
        ...props.config,
        ...overrides,
      },
    })(node)

  return printer
}

/**
 * printer with own body as schema
 */
export const defaultCodegen = (
  doc: DocumentNode,
  overrides?: Partial<CodegenConfig>,
) => createCodegen(doc)(doc, overrides)

/**
 * rescursive main loop
 */
export const codegen = (props: CodegenProps) => (node: ASTNode): string => {
  switch (node.kind) {
    /**
     * enter recursion
     */
    case Kind.DOCUMENT:
      return node.definitions.map(codegen(props)).join('\n\n')

    /**
     * type system definitions
     */
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return printInputObject(props)(node)
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_EXTENSION:
      return printObject(props)(node)
    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_EXTENSION:
      return printInterface(props)(node)
    case Kind.UNION_TYPE_DEFINITION:
    case Kind.UNION_TYPE_EXTENSION:
      return printUnion(props)(node)
    case Kind.ENUM_TYPE_DEFINITION:
    case Kind.ENUM_TYPE_EXTENSION:
      return printEnum(props)(node)
    case Kind.SCALAR_TYPE_DEFINITION:
    case Kind.SCALAR_TYPE_EXTENSION:
      return printScalar(props)(node)

    /**
     * schema
     */
    case Kind.SCHEMA_DEFINITION:
    case Kind.SCHEMA_EXTENSION:
      return printSchemaDefinition(props)(node) || ''

    default:
      return ''
  }
}
