import { GraphQLSchema, Kind, NamedTypeNode } from 'graphql'
import { CodegenProps } from '../codegen'
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

export const isPrefixedType = (props: CodegenProps) => (typename: string) => {
  // never prefix without schema/ not found
  if (!props.graph.has(typename)) {
    return false
  }

  const node = props.graph.get(typename)!.value

  switch (node.kind) {
    // only those possibly can get prefix
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_DEFINITION:
      return true
    // !!! I'm prefixing unions
    case Kind.UNION_TYPE_DEFINITION:
      return props.config.useInterfacePrefixForUnion
    default:
      return false
  }
}

/**
 * get only normalised type name without arr/null modifiers
 */
export const printNamedType = (props: CodegenProps) => (
  node: NamedTypeNode,
) => {
  const typename = node.name.value

  const customScalar = props.config.customScalars[typename]

  if (customScalar) {
    return customScalar
  }

  const explicitScalar = isExplicitScalar(typename)

  if (explicitScalar) {
    return mapExplicitScalar(typename)
  }

  const prefixed = isPrefixedType(props)(typename)

  if (prefixed) {
    return naming.interfaceName(props.config)(typename)
  }

  return typename
}
