import { ASTKindToNode, DefinitionNode, DocumentNode, KindEnum, SelectionNode } from 'graphql'
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

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [...doc.definitions]

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
  if (!doc.kind || doc.kind !== Kind.DOCUMENT || !Array.isArray(doc.definitions)) {
    throw Error('getDocDefinition: Invalid Document (like no document at all')
  }

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

// for interfaces/unions that need it flat
export const unwrapSelectionSet = (node?: SelectionNode) =>
  (node && node.kind === Kind.FIELD && node.selectionSet && [...node.selectionSet.selections]) ||
  undefined
