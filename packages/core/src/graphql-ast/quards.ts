import {
  ASTNode,
  EnumTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  InterfaceTypeDefinitionNode,
  Kind,
  ObjectTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  TypeDefinitionNode,
  TypeExtensionNode,
  UnionTypeDefinitionNode,
} from 'graphql'

/**
 * typedefs guards
 */
export const isObjectTypeDefinitionNode = (
  node: ASTNode,
): node is ObjectTypeDefinitionNode => node.kind === Kind.OBJECT_TYPE_DEFINITION

export const isInputObjectTypeDefinitionNode = (
  node: ASTNode,
): node is InputObjectTypeDefinitionNode =>
  node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION

export const isScalarTypeDefinitionNode = (
  node: ASTNode,
): node is ScalarTypeDefinitionNode => node.kind === Kind.SCALAR_TYPE_DEFINITION

export const isEnumTypeDefinitionNode = (
  node: ASTNode,
): node is EnumTypeDefinitionNode => node.kind === Kind.ENUM_TYPE_DEFINITION

export const isInterfaceTypeDefinitonNode = (
  node: ASTNode,
): node is InterfaceTypeDefinitionNode =>
  node.kind === Kind.INTERFACE_TYPE_DEFINITION

export const isUnionTypeDefinitionNode = (
  node: ASTNode,
): node is UnionTypeDefinitionNode => node.kind === Kind.UNION_TYPE_DEFINITION

/**
 * Those 2 are in the `graphql` lib but let's try to keep it deps free
 */

export const isTypeDefinitionNode = (
  node: ASTNode,
): node is TypeDefinitionNode => {
  switch (node.kind) {
    case Kind.ENUM_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.SCALAR_TYPE_DEFINITION:
    case Kind.UNION_TYPE_DEFINITION:
      return true
    default:
      return false
  }
}

export const isTypeExtensionNode = (
  node: ASTNode,
): node is TypeExtensionNode => {
  switch (node.kind) {
    case Kind.ENUM_TYPE_EXTENSION:
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
    case Kind.INTERFACE_TYPE_EXTENSION:
    case Kind.OBJECT_TYPE_EXTENSION:
    case Kind.SCALAR_TYPE_EXTENSION:
    case Kind.UNION_TYPE_EXTENSION:
      return true
    default:
      return false
  }
}
