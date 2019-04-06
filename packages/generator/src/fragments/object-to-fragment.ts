import { createField, getTypeNodeMeta } from '@graphql-clientgen/shared'
import changeCase from 'change-case'
import {
  ExecutableDefinitionNode,
  FieldDefinitionNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  GraphQLSchema,
  GraphQLType,
  isEnumType,
  isObjectType,
  isScalarType,
  Kind,
  ObjectTypeDefinitionNode,
  SelectionNode
} from 'graphql'

export enum FragmentType {
  DEFAULT = '',
  FLAT = 'Flat',
  DEEP = 'Deep'
}

/**
 *  kind for flat fragment
 */
export const isFlatType = (type: GraphQLType) =>
  isScalarType(type) || isEnumType(type)

/**
 *  kind for default/deep fragments
 *  TODO: support interfaces
 */
export const isNestedType = (type: GraphQLType) => isObjectType(type)

/**
 * Name of generated fragment (changecase only without fragmentType, add some validation later)
 */
export const getFragmentName = (
  typeName: string,
  fragmentType?: FragmentType
) => changeCase.pascalCase(typeName + (fragmentType ? ' ' + fragmentType : ''))

/**
 * Name of constant with generated fragment (changecase only without fragmentType)
 */
export const getFragmentConstName = (
  typeName: string,
  fragmentType?: FragmentType
) =>
  changeCase.constant(
    typeName + (fragmentType ? ' ' + fragmentType : '') + ' Fragment'
  )

/**
 * Create FragmentSpreadNode with spreaded fragment
 */
export const createFragmentSpread = (
  fragmentName: string
): FragmentSpreadNode => ({
  kind: Kind.FRAGMENT_SPREAD,
  name: { kind: Kind.NAME, value: fragmentName }
})

/**
 * Convert FieldDefinitionNodes to Fragment's SelectionNodes
 * - FLAT => selectr only scalars
 * - DEFAULT => select objects as FlatFragment
 * - DEEP => select objects as DeepFragments
 */

const objectTypeFieldsToFragmentSelections = (
  schema: GraphQLSchema,
  nodes: ReadonlyArray<FieldDefinitionNode>,
  fragmentType: FragmentType
): SelectionNode[] =>
  nodes
    .map(
      (field): FieldNode | null => {
        const { typename } = getTypeNodeMeta(field.type)
        // ID type seems to be without AST node
        if (typename === 'ID') {
          return {
            name: field.name,
            kind: Kind.FIELD
          }
        }

        const fieldTarget = schema.getType(typename)

        if (!fieldTarget) {
          return null
        }

        if (isFlatType(fieldTarget)) {
          return {
            name: field.name,
            kind: Kind.FIELD
          }
        }

        if (
          fragmentType === FragmentType.DEFAULT &&
          isNestedType(fieldTarget)
        ) {
          const spreadFragmentType = FragmentType.FLAT

          const spreadFragmentName = getFragmentName(
            fieldTarget.name,
            spreadFragmentType
          )

          const spread = createFragmentSpread(spreadFragmentName)

          return {
            name: field.name,
            kind: Kind.FIELD,
            selectionSet: {
              kind: Kind.SELECTION_SET,
              selections: [spread]
            }
          }
        }

        /**
         * Now it's tricky - how to detect if nested types create circural dependency?
         *
         * Idea could be that default fragments should have deep-fields on non circural types and flat on the rest
         *
         * For now I will just step-down to default fragments
         */
        if (fragmentType === FragmentType.DEEP && isNestedType(fieldTarget)) {
          const spreadFragmentType = FragmentType.DEFAULT

          const spreadFragmentName = getFragmentName(
            fieldTarget.name,
            spreadFragmentType
          )

          const spread = createFragmentSpread(spreadFragmentName)

          return {
            name: field.name,
            kind: Kind.FIELD,
            selectionSet: {
              kind: Kind.SELECTION_SET,
              selections: [spread]
            }
          }
        }

        return null
      }
    )
    .filter(<T>(val: T): val is NonNullable<T> => !!val)

/**
 * List Fragments used in fragment fields spreads
 * (could be bundled with objectTypeFieldsToFragmentSelections but I want to keep APIs simple)
 */

export const getFragmentDependencies = (node: ExecutableDefinitionNode) =>
  node.selectionSet.selections
    .map(
      field =>
        field.kind === Kind.FIELD &&
        field.selectionSet &&
        field.selectionSet.selections.map(
          fieldSelection =>
            fieldSelection.kind === Kind.FRAGMENT_SPREAD &&
            fieldSelection.name.value
        )
    )
    .flat(1)
    .filter((el): el is string => typeof el === 'string')

/**
 * Convert ObjectTypeDefinitionNode to FragmentDefinitionNode on this type
 *
 * TODO: Maybe suppport fragment variables?
 */
export const objectTypeToFragment = (
  schema: GraphQLSchema,
  node: ObjectTypeDefinitionNode,
  fragmentType: FragmentType
): FragmentDefinitionNode | null => {
  // return null without fields/selections since empty fragment does not make sense
  if (!node.fields || node.fields.length === 0) {
    return null
  }

  const selections = objectTypeFieldsToFragmentSelections(
    schema,
    node.fields,
    fragmentType
  )

  if (selections.length === 0) {
    return null
  }

  return {
    kind: Kind.FRAGMENT_DEFINITION,
    name: {
      kind: Kind.NAME,
      value: getFragmentName(node.name.value, fragmentType)
    },
    directives: node.directives,
    typeCondition: {
      kind: Kind.NAMED_TYPE,
      name: node.name
    },
    selectionSet: {
      kind: Kind.SELECTION_SET,
      // !!! adds typename
      selections: [createField({ fieldname: '__typename' }), ...selections]
    }
  }
}
