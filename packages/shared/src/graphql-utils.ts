import { DefinitionNode, DocumentNode } from 'graphql'
import { Kind } from './kind'

export const wrapDocument = (...nodes: DefinitionNode[]): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes
})

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions
]
