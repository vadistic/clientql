import {
  ASTNode,
  EnumTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  InterfaceTypeDefinitionNode,
  Kind,
  ListTypeNode,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  TypeDefinitionNode,
  TypeNode,
  UnionTypeDefinitionNode,
} from 'graphql'

export const isObjectNode = (node: ASTNode): node is ObjectTypeDefinitionNode =>
  node.kind === Kind.OBJECT_TYPE_DEFINITION

export const isInputObjectNode = (
  node: ASTNode,
): node is InputObjectTypeDefinitionNode =>
  node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION

export const isScalarNode = (node: ASTNode): node is ScalarTypeDefinitionNode =>
  node.kind === Kind.SCALAR_TYPE_DEFINITION

export const isEnumNode = (node: ASTNode): node is EnumTypeDefinitionNode =>
  node.kind === Kind.ENUM_TYPE_DEFINITION

export const isInterfaceNode = (
  node: ASTNode,
): node is InterfaceTypeDefinitionNode =>
  node.kind === Kind.INTERFACE_TYPE_DEFINITION

export const isUnionNode = (node: ASTNode): node is UnionTypeDefinitionNode =>
  node.kind === Kind.UNION_TYPE_DEFINITION

export const isTypeDefNode = (node: ASTNode): node is TypeDefinitionNode =>
  isObjectNode(node) ||
  isInputObjectNode(node) ||
  isScalarNode(node) ||
  isEnumNode(node) ||
  isInterfaceNode(node) ||
  isUnionNode(node)

export const isRootTypeDefinitionNode = (
  node: ASTNode,
): node is ObjectTypeDefinitionNode =>
  node.kind === Kind.OBJECT_TYPE_DEFINITION &&
  ['Query', 'Mutation', 'Subscription'].includes(node.name.value)

/**
 * Means top level value is nullable (need it for printing)
 */
export const isNullable = (
  node: TypeNode,
): node is ListTypeNode | NamedTypeNode => node.kind !== Kind.NON_NULL_TYPE
