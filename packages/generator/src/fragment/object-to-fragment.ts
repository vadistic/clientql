import {
  buildTypemap,
  createField,
  FragmentType
} from '@graphql-clientgen/shared'
import {
  ExecutableDefinitionNode,
  FieldDefinitionNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  GraphQLType,
  isEnumType,
  isObjectType,
  isScalarType,
  Kind,
  ObjectTypeDefinitionNode,
  SelectionNode
} from 'graphql'
import { GeneratorProps } from '../config'

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
 * Create FragmentSpreadNode with spread fragment
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
  props: GeneratorProps,
  nodes: ReadonlyArray<FieldDefinitionNode>,
  fragmentType: FragmentType
): SelectionNode[] =>
  nodes
    .map(
      (field): FieldNode | null => {
        const { typename } = buildTypemap(field.type)
        // ID type seems to be without AST node
        if (typename === 'ID') {
          return {
            name: field.name,
            kind: Kind.FIELD
          }
        }

        const isObject = !!props.astMap.types[typename]

        if (isObject) {
          return {
            name: field.name,
            kind: Kind.FIELD
          }
        }

        if (fragmentType === FragmentType.DEFAULT && isObject) {
          const spreadFragmentType = FragmentType.FLAT

          const spreadFragmentName = props.naming.getFragmentName(
            typename,
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
        if (fragmentType === FragmentType.DEEP && isObject) {
          const spreadFragmentType = FragmentType.DEFAULT

          const spreadFragmentName = props.naming.getFragmentName(
            typename,
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
  props: GeneratorProps,
  fragmentType: FragmentType
) => (node: ObjectTypeDefinitionNode): FragmentDefinitionNode | null => {
  // return null without fields/selections since empty fragment does not make sense
  if (!node.fields || node.fields.length === 0) {
    return null
  }

  const selections = objectTypeFieldsToFragmentSelections(
    props,
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
      value: props.naming.getFragmentName(node.name.value, fragmentType)
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
