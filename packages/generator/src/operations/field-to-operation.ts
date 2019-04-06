import changeCase from 'change-case'
import {
  ArgumentNode,
  FieldDefinitionNode,
  FieldNode,
  InputValueDefinitionNode,
  Kind,
  OperationDefinitionNode,
  OperationTypeNode,
  SelectionNode,
  VariableDefinitionNode
} from 'graphql'

/**
 * Get operation name from field/type name
 *
 * user(){} => query UserQuery {}
 */
export const getOperationName = (
  fieldName: string,
  operation?: OperationTypeNode
) => changeCase.pascal(fieldName)

/**
 * Get operation constant name from field/type name
 *
 * user(){} => USER_QUERY
 */
export const getOperationConstName = (
  fieldName: string,
  operation?: OperationTypeNode
) => changeCase.constant(fieldName + ' ' + operation)

/**
 * convert field's InputValueDefinitionNode to VariableDefinition
 *
 * keeps the same naming, coupled with inputValueToArgument
 */
export const inputValueToVariableDefinition = (
  node: InputValueDefinitionNode
): VariableDefinitionNode => ({
  kind: Kind.VARIABLE_DEFINITION,
  defaultValue: node.defaultValue,
  directives: node.directives,
  variable: {
    kind: Kind.VARIABLE,
    name: node.name
  },
  type: node.type
})

/**
 * convert field's InputValueDefinitionNode to ArgumentNode
 *
 * keeps the same naming, coupled with inputValueToVariableDefinition
 */
export const inputValueToArgument = (
  node: InputValueDefinitionNode
): ArgumentNode => ({
  kind: Kind.ARGUMENT,
  name: node.name,
  value: {
    kind: Kind.VARIABLE,
    name: node.name
  }
})

/**
 * convert root (Query/Mutation) field definition to empty(typename only) Field
 */
export const fieldDefinitionToOperationField = (
  node: FieldDefinitionNode,
  selections?: ReadonlyArray<SelectionNode>
): FieldNode => ({
  kind: Kind.FIELD,
  name: node.name,
  arguments: !node.arguments
    ? undefined
    : node.arguments.map(inputValueToArgument),
  selectionSet: {
    kind: Kind.SELECTION_SET,
    // !!! typename is added in fragment so here I'll skip
    selections: selections || []
  }
})

/**
 * convert root (Query/Mutation) field definition to operation on this field
 */
export const fieldDefinitionToOperation = (
  node: FieldDefinitionNode,
  operation: OperationTypeNode,
  selections?: ReadonlyArray<SelectionNode>
): OperationDefinitionNode => ({
  kind: Kind.OPERATION_DEFINITION,
  operation,
  name: {
    kind: Kind.NAME,
    value: getOperationName(node.name.value, operation)
  },
  directives: node.directives,
  variableDefinitions: !node.arguments
    ? undefined
    : node.arguments.map(inputValueToVariableDefinition),
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections: [fieldDefinitionToOperationField(node, selections)]
  }
})
