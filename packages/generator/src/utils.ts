/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  Typename,
  wrapDocument,
} from '@clientql/core'
import { ASTKindToNode, DefinitionNode, Kind } from 'graphql'
import { GeneratorProps } from './generator'
import { traverseGraph } from './traverse'

export const groupDefinitionsByKind = (definitions: DefinitionNode[]) => {
  const groups: { [K in DefinitionNode['kind']]?: Array<ASTKindToNode[K]> } = {
    // predefine some order
    [Kind.SCHEMA_DEFINITION]: undefined,
    [Kind.SCALAR_TYPE_DEFINITION]: undefined,
    [Kind.UNION_TYPE_DEFINITION]: undefined,
    [Kind.INTERFACE_TYPE_DEFINITION]: undefined,
    [Kind.OBJECT_TYPE_DEFINITION]: undefined,
    [Kind.INPUT_OBJECT_TYPE_DEFINITION]: undefined,
    [Kind.ENUM_TYPE_DEFINITION]: undefined,
  }

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

  return wrapDocument(...Array.from(register).map(typename => props.graph.get(typename)!.value))
}

/**
 * trying to minimalise typedefs size
 */
export const stripLocationDescriptionAndEmpty = <T>(input: T): T => {
  if (!!input && typeof input === 'object') {
    if (Array.isArray(input)) {
      const result: any[] = []

      for (const el of input) {
        result.push(stripLocationDescriptionAndEmpty(el))
      }

      return (result as unknown) as T
    } else {
      const result: any = {}

      for (const key of Object.keys(input)) {
        const prop = (input as any)[key]

        if (Array.isArray(prop) && prop.length === 0) {
          continue
        }

        if (key !== 'loc' && key !== 'description') {
          result[key] = stripLocationDescriptionAndEmpty((input as any)[key])
        }
      }

      return result
    }
  } else {
    return input
  }
}
