import { ASTKindToNode, DefinitionNode, DocumentNode, KindEnum } from 'graphql'
import { truthy } from '../utils/types'
import { Kind } from './kind'

/**
 * created doc node fromd efinition/s
 */

export const wrapDocument = (
  ...nodes: Array<DefinitionNode | undefined | null | false>
): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes.filter(truthy),
})

/**
 * get mutable arr of definitions from doc node
 */

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions,
]

/**
 * get first/firstOfKind definition from docuemnt
 */
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
