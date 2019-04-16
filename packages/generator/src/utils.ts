import { ASTKindToNode, DefinitionNode } from 'graphql'

export const groupDefinitionsByKind = (definitions: DefinitionNode[]) => {
  const groups: { [K in DefinitionNode['kind']]?: Array<ASTKindToNode[K]> } = {}

  for (const node of definitions) {
    if (!groups[node.kind]) {
      groups[node.kind] = []
    }

    groups[node.kind]!.push(node as any)
  }

  return groups
}
