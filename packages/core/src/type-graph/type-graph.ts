import { DocumentNode, TypeDefinitionNode } from 'graphql'
import { ArrowEntry, Digraph } from '../digraph'
import {
  isInterfaceNode,
  isObjectNode,
  isTypeDefNode,
  isUnionNode,
} from '../graphql-guards'
import { tuplify } from '../types'
import { unwrapType } from '../unwrap-type'

export class TypeGraph extends Digraph<string, string, TypeDefinitionNode> {
  constructor(ast: DocumentNode) {
    super(TypeGraph.getEntries(ast))
  }

  private static getEntries = (ast: DocumentNode) => {
    const entries = ast.definitions.filter(isTypeDefNode).map(node => {
      const key = node.name.value
      const value = node
      const arrows: Array<ArrowEntry<string, string>> =
        ((isObjectNode(node) || isInterfaceNode(node)) &&
          node.fields &&
          node.fields.map(field => [
            field.name.value,
            unwrapType(field.type).typename,
          ])) ||
        // not sure how to handle it...
        (isUnionNode(node) &&
          node.types &&
          node.types.map((type, i) => ['' + i, type.name.value])) ||
        []

      return tuplify([key, value, arrows])
    })

    return entries
  }
}
