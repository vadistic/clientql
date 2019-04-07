import { DefinitionNode, DocumentNode, NamedTypeNode, TypeNode } from 'graphql'
import { Kind } from './kind'

export const wrapDocument = (...nodes: DefinitionNode[]): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes
})

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions
]

export const unwrapType = (type: TypeNode): NamedTypeNode => {
  if (type.kind === Kind.NAMED_TYPE) {
    return type
  }

  return unwrapType(type.type)
}
