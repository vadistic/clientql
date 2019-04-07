import {
  ASTNode,
  EnumTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  Kind,
  ListTypeNode,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  TypeNode
} from 'graphql'

export const isObjectTypeDefinitionNode = (
  node: ASTNode
): node is ObjectTypeDefinitionNode => node.kind === Kind.OBJECT_TYPE_DEFINITION

export const isInputObjectTypeDefinitionNode = (
  node: ASTNode
): node is InputObjectTypeDefinitionNode =>
  node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION

export const isScalarTypeDefinitionNode = (
  node: ASTNode
): node is ScalarTypeDefinitionNode => node.kind === Kind.SCALAR_TYPE_DEFINITION

export const isEnumTypeDefinitionNode = (
  node: ASTNode
): node is EnumTypeDefinitionNode => node.kind === Kind.ENUM_TYPE_DEFINITION

export const isRootTypeDefinitionNode = (
  node: ASTNode
): node is ObjectTypeDefinitionNode =>
  node.kind === Kind.OBJECT_TYPE_DEFINITION &&
  ['Query', 'Mutation', 'Subscription'].includes(node.name.value)

/**
 * Means top level value is nullable (need it for printing)
 */
export const isNullable = (
  node: TypeNode
): node is ListTypeNode | NamedTypeNode => node.kind === Kind.NON_NULL_TYPE
