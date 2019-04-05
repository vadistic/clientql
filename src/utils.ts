import {
  GraphQLSchema,
  TypeNode,
  NamedTypeNode,
  Kind,
  NameNode,
  DocumentNode,
  DefinitionNode
} from 'graphql'

export const filterNull = <T>(input: T): input is NonNullable<T> => !!input

/**
 * Unwrap TypeNode from List & Nonnullable types to underyling NamedTypeNode
 */
export const unwrapTypeToNamedType = (node: TypeNode): NamedTypeNode => {
  if (node.kind === Kind.NAMED_TYPE) {
    return node
  }

  return unwrapTypeToNamedType(node.type)
}

export const wrapInDocument = (...nodes: DefinitionNode[]): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes
})
