import {
  ArgumentNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  InputValueDefinitionNode,
  NameNode,
  OperationDefinitionNode,
  OperationTypeNode,
  SelectionNode,
  VariableDefinitionNode,
} from 'graphql'
import { Kind } from './kind'
import { Typename } from './types'

export const createName = (name: string): NameNode => ({
  kind: Kind.NAME,
  value: name,
})

export interface CreateFieldProps {
  fieldname: string
  arguments?: ArgumentNode[]
  selections?: SelectionNode[]
}

export const createField = (props: CreateFieldProps): FieldNode => ({
  kind: Kind.FIELD,
  name: createName(props.fieldname),
  arguments: props.arguments,
  selectionSet: props.selections
    ? {
        kind: Kind.SELECTION_SET,
        selections: props.selections,
      }
    : undefined,
})

export interface CreateFragmentProps {
  fragmentname: string
  condition: Typename
  selections: SelectionNode[]
}
/**
 *  no fragment variables (yet?)
 */
export const createFragment = ({
  condition,
  selections,
  fragmentname,
}: CreateFragmentProps): FragmentDefinitionNode => ({
  kind: Kind.FRAGMENT_DEFINITION,
  name: createName(fragmentname),
  typeCondition: {
    kind: Kind.NAMED_TYPE,
    name: createName(condition),
  },
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections,
  },
})

export const createFragmentSpread = (name: string): FragmentSpreadNode => ({
  kind: Kind.FRAGMENT_SPREAD,
  name: createName(name),
})

export const createInlineFragment = (
  on: Typename,
  selections: SelectionNode[],
): InlineFragmentNode => ({
  kind: Kind.INLINE_FRAGMENT,
  typeCondition: {
    kind: Kind.NAMED_TYPE,
    name: createName(on),
  },
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections,
  },
})

export const createOperationVariable = (suffix: string) => (
  node: InputValueDefinitionNode,
): VariableDefinitionNode => ({
  kind: Kind.VARIABLE_DEFINITION,
  defaultValue: node.defaultValue,
  directives: node.directives,
  variable: {
    kind: Kind.VARIABLE,
    name: createName(node.name.value + suffix),
  },
  type: node.type,
})

export const createOperationArgument = (suffix: string) => (
  node: InputValueDefinitionNode,
): ArgumentNode => ({
  kind: Kind.ARGUMENT,
  name: node.name,
  value: {
    kind: Kind.VARIABLE,
    name: createName(node.name.value + suffix),
  },
})

export interface CreateOperationProps {
  name: string
  type: OperationTypeNode
  variables?: VariableDefinitionNode[]
  selections: SelectionNode[]
}

export const createOperation = (props: CreateOperationProps): OperationDefinitionNode => ({
  kind: Kind.OPERATION_DEFINITION,
  name: createName(props.name),
  operation: props.type,
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections: props.selections,
  },
  variableDefinitions: props.variables,
})
