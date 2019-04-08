import { DefinitionNode, DocumentNode } from 'graphql'
import { Kind } from './kind'
import { truthy } from './types'

export const wrapDocument = (
  ...nodes: Array<DefinitionNode | undefined | null | false>
): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes.filter(truthy)
})

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions
]
