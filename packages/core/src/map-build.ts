import {
  FieldDefinitionNode,
  InputValueDefinitionNode,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  TypeNode
} from 'graphql'
import { Kind } from './kind'
import { Typename } from './map-ast'

/**
 * Alternative to those nested Null/List types that is easier to print
 */
export type TypeModifier = 'nonNull' | 'list'

export interface BuildTypemap {
  type: NamedTypeNode
  typename: Typename
  modifiers: TypeModifier[]
}

/*
 * This is as helper - do not need to store it in astMap - fieldmap will suffice
 */

export const buildTypemap = (
  node: TypeNode,
  modifiers: TypeModifier[] = []
): BuildTypemap => {
  if (node.kind === Kind.NON_NULL_TYPE) {
    return buildTypemap(node.type, [...modifiers, 'nonNull'])
  }

  if (node.kind === Kind.LIST_TYPE) {
    return buildTypemap(node.type, [...modifiers, 'list'])
  }

  // node.kind === Kind.NAMED_TYPE
  return {
    type: node,
    typename: node.name.value,
    modifiers
  }
}

export interface Fieldmap {
  [fieldname: string]: {
    typename: Typename
    args: InputValueDefinitionNode[]
    field: FieldDefinitionNode
    modifiers: TypeModifier[]
  }
}

export const buildFieldmap = (node: ObjectTypeDefinitionNode) => {
  const fieldMap: Fieldmap = {}

  for (const field of node.fields || []) {
    const fieldname = field.name.value
    const { modifiers, typename } = buildTypemap(field.type)

    fieldMap[fieldname] = {
      args: [...(field.arguments || [])],
      field,
      typename,
      modifiers
    }
  }

  return fieldMap
}
