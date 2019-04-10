import {
  ArgumentNode,
  FieldNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  SelectionNode,
} from 'graphql'
import { Kind } from './kind'
import { Typename } from './type-graph'

export interface CreateFieldProps {
  fieldname: string
  arguments?: ArgumentNode[]
  selections?: SelectionNode[]
}

export const createField = (props: CreateFieldProps): FieldNode => ({
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: props.fieldname,
  },
  arguments: props.arguments,
  selectionSet: props.selections
    ? {
        kind: Kind.SELECTION_SET,
        selections: props.selections,
      }
    : undefined,
})

/**
 * Create FragmentSpreadNode with spread fragment
 */
export const createFragmentSpread = (
  fragmentname: string,
): FragmentSpreadNode => ({
  kind: Kind.FRAGMENT_SPREAD,
  name: { kind: Kind.NAME, value: fragmentname },
})

export const createInlineFragment = (
  on: Typename,
  selections: SelectionNode[],
): InlineFragmentNode => ({
  kind: Kind.INLINE_FRAGMENT,
  typeCondition: {
    kind: Kind.NAMED_TYPE,
    name: { kind: Kind.NAME, value: on },
  },
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections,
  },
})
