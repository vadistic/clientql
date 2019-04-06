import { ArgumentNode, FieldNode, SelectionNode } from 'graphql'
import { Kind } from './kind'

export interface CreateFieldProps {
  fieldname: string
  arguments?: ArgumentNode[]
  selections?: SelectionNode[]
}

export const createField = (props: CreateFieldProps): FieldNode => ({
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: props.fieldname
  },
  arguments: props.arguments,
  selectionSet: props.selections
    ? {
        kind: Kind.SELECTION_SET,
        selections: props.selections
      }
    : undefined
})
