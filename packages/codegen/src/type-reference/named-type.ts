import { GraphQLSchema, Kind, NamedTypeNode } from 'graphql'
import { defaultCodegenConfig } from '../config'
import { naming } from '../naming'

const mapExplicitScalar = (typename: string) => {
  switch (typename) {
    case 'String':
      return 'string'
    case 'Boolean':
      return 'boolean'
    case 'Int':
    case 'Long':
    case 'Float':
      return 'number'
    default:
      return typename
  }
}

export const isExplicitScalar = (typename: string) =>
  mapExplicitScalar(typename) !== typename

/**
 * the thing is that type value needs to match prefixed interface
 * I need to know target type... this is the only reason for using schema
 */
export const isPrefixedType = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (typename: string) => {
  // never prefix without schema
  if (!schema) {
    return false
  }

  const type = schema.getType(typename)

  // not found is not prefixed
  if (!type || !type.astNode) {
    return false
  }

  switch (type.astNode.kind) {
    // only those possibly can get prefix
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_DEFINITION:
      return true
    // !!! I'm prefixing unions
    case Kind.UNION_TYPE_DEFINITION:
      if (config.useInterfacePrefixForUnion) {
        return true
      }
    default:
      return false
  }
}

/**
 * get only normalised type name without arr/null modifiers
 */
export const printNamedType = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (node: NamedTypeNode) => {
  const typename = node.name.value

  const customScalar = config.customScalars[typename]

  if (customScalar) {
    return customScalar
  }

  const explicitScalar = isExplicitScalar(typename)

  if (explicitScalar) {
    return mapExplicitScalar(typename)
  }

  const prefixed = isPrefixedType(config, schema)(typename)

  if (prefixed) {
    return naming.interfaceName(config)(typename)
  }

  return typename
}
