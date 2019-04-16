import {
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  Typename,
  wrapDocument,
} from '@graphql-clientgen/core'
import { ASTKindToNode, DefinitionNode } from 'graphql'
import { GeneratorProps } from './generator'
import { traverseGraph } from './traverse'

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

/**
 * find possible results of the operations
 */

export const resolvePossibleTargets = (props: GeneratorProps) => {
  const targets = new Set<Typename>()

  traverseGraph(props)((vtx, stack) => {
    // no roots
    if (stack.length === 1) {
      return
    }

    if (
      isObjectTypeDefinitionNode(vtx.value) ||
      isInterfaceTypeDefinitonNode(vtx.value) ||
      isUnionTypeDefinitionNode(vtx.value)
    ) {
      targets.add(vtx.name)
    }
  })

  return targets
}

/**
 * get typedefs without orphaned nodes
 */
export const getMinimalTypedefs = (props: GeneratorProps) => {
  const register = new Set<Typename>()

  traverseGraph(props)(vtx => {
    register.add(vtx.name)
  })

  return wrapDocument(
    ...Array.from(register).map(typename => props.graph.get(typename)!.value),
  )
}
