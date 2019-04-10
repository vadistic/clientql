import {
  DefinitionNode,
  DocumentNode,
  InterfaceTypeDefinitionNode,
  InterfaceTypeExtensionNode,
  Kind,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  ObjectTypeExtensionNode,
  TypeNode,
} from 'graphql'
import { truthy } from './types'

/**
 * Alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = 'nonNull' | 'list'

export interface BuildTypemap {
  type: NamedTypeNode
  typename: string
  modifiers: TypeModifier[]
}

/*
 * This is as helper - do not need to store it in astMap - fieldmap will suffice
 */

export const unwrapType = (
  node: TypeNode,
  modifiers: TypeModifier[] = [],
): BuildTypemap => {
  if (node.kind === Kind.NON_NULL_TYPE) {
    return unwrapType(node.type, [...modifiers, 'nonNull'])
  }

  if (node.kind === Kind.LIST_TYPE) {
    return unwrapType(node.type, [...modifiers, 'list'])
  }

  // node.kind === Kind.NAMED_TYPE
  return {
    type: node,
    typename: node.name.value,
    modifiers,
  }
}

export const wrapDocument = (
  ...nodes: Array<DefinitionNode | undefined | null | false>
): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes.filter(truthy),
})

export const unwrapDocument = (doc: DocumentNode): DefinitionNode[] => [
  ...doc.definitions,
]

export type ObjectLikeNode =
  | ObjectTypeDefinitionNode
  | ObjectTypeExtensionNode
  | InterfaceTypeDefinitionNode
  | InterfaceTypeExtensionNode
