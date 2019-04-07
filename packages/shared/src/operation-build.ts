import {
  DocumentNode,
  FieldNode,
  FragmentDefinitionNode,
  InputValueDefinitionNode,
  Kind,
  SelectionNode,
  VariableDefinitionNode
} from 'graphql'
import { createField } from './create'
import { wrapDocument } from './graphql-utils';
import { AstMap, Fieldname, Typename } from './map-build'
import { getRootOperationType } from './map-utils'
import {
  buildOperationArgument,
  buildOperationBaseSelection,
  buildOperationName,
  buildOperationVariable,
  FragmentType
} from './operation-utils'

export interface BuildOperationOptions {
  useFragments: boolean
  baseSelectionType: FragmentType
}
/**
 * Builds operation based on fields path
 * Retruns DocumentNode, becuse it may also contain some fragments
 */

export const buildOperation = (
  map: AstMap,
  paths: Fieldname[],
  opts: BuildOperationOptions
): DocumentNode => {
  const operationType = getRootOperationType(map, paths[0])!

  if (!operationType) {
    throw Error(
      `Invalid operation **${paths[0]}**  in ${paths.splice(1).join(' => ')}`
    )
  }

  /**
   * tricky part, this needs to go from top (array start / root operation)
   * because it's hard to determine nested typename
   * I'll reverse it in the next step
   */

  const selectionData = paths
    .reduce(
      (acc, fieldname, i, arr) => {
        const isRoot = i === 0

        let typename: string
        let inputs: InputValueDefinitionNode[] | undefined

        if (isRoot) {
          typename = map.rootMap.typenames[fieldname]
          inputs = !!typename ? [...map.rootMap.definitions[fieldname].arguments || []] : []

        } else {
          const parentTypename = acc[i - 1].typename
          const parentMap = map.types[parentTypename].getFieldMap()

          typename = parentMap && parentMap.typenames[fieldname]
          inputs = !!typename ? [...parentMap.definitions[fieldname].arguments || []]  : []
        }


        if (!typename) {
          throw Error(
            `Invalid fieldname **${fieldname}**  in ${paths
              .splice(1)
              .join(' => ')}`
          )
        }

        const res = {
          typename,
          fieldname,
          inputs
        }

        return [...acc,res]

      },
      [] as Array<{
        fieldname: Fieldname
        typename: Typename
        inputs?: readonly InputValueDefinitionNode[]
      }>
    )
    .map((props, i, arr) => {
      const {fieldname,typename,inputs} = props
      const isBase = i === arr.length - 1

      const variables = inputs ? inputs.map(buildOperationVariable(i)) : []

      const args = inputs
        ? inputs.map(buildOperationArgument(i))
        : undefined

      let selections: SelectionNode[] = []

      let fragments: FragmentDefinitionNode[] | undefined

      if(isBase ) {
        const base = buildOperationBaseSelection(map, typename, opts)
        selections = base.selection
        fragments = base.fragments
      }

      const field: FieldNode = createField({
        fieldname,
        arguments: args,
        selections
      })

      return {
        ...props,
        field,
        variables,
        fragments
      }
    })

  const variableDefinitions = selectionData.reduce(
    (acc, {variables}) => variables ?  [...acc, ...variables]: acc,
    [] as VariableDefinitionNode[]
  )

  const fragmentDefinitions = selectionData.reduce(
    (acc, {fragments}) => fragments ? [...acc, ...fragments] : acc,
    [] as FragmentDefinitionNode[]
  )

  const selection = selectionData
    .slice()
    .reverse()
    .reduce(
      (acc, {field}) =>
        !acc
          ? field
          : {
              ...field,
              selectionSet: {
                kind: Kind.SELECTION_SET,
                selections: [
                  // add id/typename to all intermediate steps
                  createField({ fieldname: '__typename' }),
                  createField({ fieldname: 'id' }),
                  // add nested field
                  acc
                ]
              }
            },
      undefined as FieldNode | undefined
    )!

  const operationName = buildOperationName(
    selectionData.map(({typename}) => typename),
    operationType
  )

  const operationDefinition = {
    kind: Kind.OPERATION_DEFINITION,
    name: { kind: Kind.NAME, value: operationName },
    operation: operationType,
    variableDefinitions,
    selectionSet: {
      kind: Kind.SELECTION_SET,
      selections: [selection]
    }
  }

  return wrapDocument(operationDefinition, ...fragmentDefinitions)
}
