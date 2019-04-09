import {
  ArgumentNode,
  FieldNode,
  InputValueDefinitionNode,
  Kind,
  OperationTypeNode,
  VariableDefinitionNode,
} from 'graphql'
import { CoreProps } from './config'
import { createField } from './graphql-create'
import { Typename } from './map-ast'
import { hasMapEntry } from './map-utils'
import { truthy } from './types'
import { capitalise } from './utils'

/**
 * nested variables will get nesting index number like $data1
 * top level variables will state original instead of $data0
 *
 */

export const buildOperationVariable = (level: number) => (
  node: InputValueDefinitionNode,
): VariableDefinitionNode => ({
  kind: Kind.VARIABLE_DEFINITION,
  defaultValue: node.defaultValue,
  directives: node.directives,
  variable: {
    kind: Kind.VARIABLE,
    name: {
      kind: Kind.NAME,
      value: node.name.value + (level > 0 ? level : ''),
    },
  },
  type: node.type,
})

/**
 * convert field's InputValueDefinitionNode to ArgumentNode
 *
 * the naming of variables will folow above
 */
export const buildOperationArgument = (level: number) => (
  node: InputValueDefinitionNode,
): ArgumentNode => ({
  kind: Kind.ARGUMENT,
  name: node.name,
  value: {
    kind: Kind.VARIABLE,
    name: {
      kind: Kind.NAME,
      value: node.name.value + (level > 0 ? level : ''),
    },
  },
})

/**
 *  operations will have name representing nesting level
 *  ['User', 'Posts', 'Comments', 'Author'], Query =>
 *  UserPostsCommentsAuthorQuery
 *
 *  it should more or less be ok with apollo client
 */

export const buildOperationName = (
  typenames: Typename[],
  operation: OperationTypeNode,
) => typenames.join('') + capitalise(operation)

/**
 *  This is basically flat fragment buildre without fragment wrapper
 */
export const buildOperationSelection = (
  { astMap }: CoreProps,
  typename: Typename,
) => {
  const fieldmap = astMap.types[typename].fieldmap

  const selections: FieldNode[] = Object.entries(fieldmap)
    .map(([selectionFieldname, { typename: selectionTypename }]) => {
      // assuming it means nested => skipping
      if (hasMapEntry(astMap, selectionTypename)) {
        return
      }

      // no arguments for child selections
      return createField({
        fieldname: selectionFieldname,
      })
    })
    .filter(truthy)

  return {
    selections: [
      // add __typename to the fragment
      createField({ fieldname: '__typename' }),
      ...selections,
    ],
    // TODO: actually generate fragments when options are set to use fragments
    fragments: [],
  }
}
