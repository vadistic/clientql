import {
  ASTKindToNode,
  DefinitionNode,
  DocumentNode,
  KindEnum,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'
import { Kind } from './kind'
import { truthy } from './types'

export type TypedefNode = TypeDefinitionNode | TypeExtensionNode

export const wrapDocument = (
  ...nodes: Array<DefinitionNode | undefined | null | false>
): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes.filter(truthy),
})

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions,
]

export interface GetDocDefinition {
  <K extends KindEnum>(doc: DocumentNode, kind: K): ASTKindToNode[K] | undefined
  (doc: DocumentNode): DefinitionNode
}

export const getDocDefinition: GetDocDefinition = <K extends KindEnum>(
  doc: DocumentNode,
  kind?: K,
) => {
  if (kind) {
    for (const node of doc.definitions) {
      if (node.kind === kind) {
        return node
      }
    }

    // this should be automatic...
    return undefined as any
  }

  return doc.definitions[0]
}
