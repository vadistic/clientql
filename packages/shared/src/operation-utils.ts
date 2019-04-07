import {
  ArgumentNode,
  FieldNode,
  InputValueDefinitionNode,
  Kind,
  OperationTypeNode,
  VariableDefinitionNode
} from 'graphql'
import { createField } from './graphql-create'
import { AstMap, Typename } from './map-build'
import { hasTypeDefinition } from './map-utils'
import { BuildOperationOptions } from './operation-build'
import { nonNull } from './types'
import { capitalise } from './utils'

/**
 * nested variables will get nesting index number like $data1
 * top level variables will state original instead of $data0
 */

export const buildOperationVariable = (level: number) => (
  node: InputValueDefinitionNode
): VariableDefinitionNode => ({
  kind: Kind.VARIABLE_DEFINITION,
  defaultValue: node.defaultValue,
  directives: node.directives,
  variable: {
    kind: Kind.VARIABLE,
    name: {
      kind: Kind.NAME,
      value: node.name.value + (level > 0 ? level : '')
    }
  },
  type: node.type
})

/**
 * convert field's InputValueDefinitionNode to ArgumentNode
 *
 * the naming of variables will folow above
 */
export const buildOperationArgument = (level: number) => (
  node: InputValueDefinitionNode
): ArgumentNode => ({
  kind: Kind.ARGUMENT,
  name: node.name,
  value: {
    kind: Kind.VARIABLE,
    name: {
      kind: Kind.NAME,
      value: node.name.value + (level > 0 ? level : '')
    }
  }
})
/*
 *  operations will have name representing nesting level
 *  ['User', 'Posts', 'Comments', 'Author'], Query =>
 *  UserPostsCommentsAuthorQuery
 *
 *  it should more or less be ok with apollo client
 */

export const buildOperationName = (
  path: Typename[],
  operation: OperationTypeNode
) => path.join('') + capitalise(operation)

/**
 * Build fragment for typename
 * TODO: Later
 */

export enum FragmentType {
  DEFAULT = '',
  FLAT = 'Flat',
  DEEP = 'Deep'
}

export const buildOperationFragment = (
  map: AstMap,
  typename: Typename,
  opts: BuildOperationOptions
) => {
  const fieldMap = map.types[typename].getFieldMap()

  const selection: FieldNode[] = Object.entries(fieldMap.typenames)
    .map(([childFieldname, childTypename]) => {
      // nested - skipping for now
      if (hasTypeDefinition(map, childTypename)) {
        return
      }

      // no arguments for child selections
      return createField({
        fieldname: childFieldname
      })
    })
    .filter(nonNull)

  return {
    selection: [
      // add to the fragment
      createField({ fieldname: '__typename' }),
      ...selection
    ],
    fragments: undefined
  }
}

/**
 *  This is basically flat fragment buildre without fragment wrapper
 */
export const buildOperationBaseSelection = (
  map: AstMap,
  typename: Typename,
  opts: BuildOperationOptions
) => {
  const fieldMap = map.types[typename].getFieldMap()

  const selection: FieldNode[] = Object.entries(fieldMap.typenames)
    .map(([childFieldname, childTypename]) => {
      // nested - skipping for now
      if (hasTypeDefinition(map, childTypename)) {
        return
      }

      // no arguments for child selections
      return createField({
        fieldname: childFieldname
      })
    })
    .filter(nonNull)

  return {
    selection: [
      // add to the fragment
      createField({ fieldname: '__typename' }),
      ...selection
    ],
    fragments: undefined
  }
}
