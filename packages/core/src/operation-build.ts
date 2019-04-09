import {
  DocumentNode,
  FieldNode,
  FragmentDefinitionNode,
  InputValueDefinitionNode,
  Kind,
  SelectionNode,
  VariableDefinitionNode,
} from 'graphql'
import { CoreProps } from './config'
import { createField } from './graphql-create'
import { wrapDocument } from './graphql-utils'
import { Fieldname, Typename } from './map-ast'
import { getOperationType } from './map-utils'
import {
  buildOperationArgument,
  buildOperationName,
  buildOperationSelection,
  buildOperationVariable,
} from './operation-utils'

/**
 * Builds operation based on fields path
 * Retruns DocumentNode, becuse it may also contain some fragments
 */

export const buildOperation = (
  props: CoreProps,
  paths: Fieldname[],
): DocumentNode => {
  const { config, astMap } = props

  const operationType = getOperationType(astMap, paths[0])!

  if (!operationType) {
    throw Error(`Invalid field **${paths[0]}** in ${paths.join('.')}`)
  }

  /*
   * tricky part, this needs to go from top (array start / root operation)
   * because it's hard to determine nested typename
   * I'll reverse it in the next step
   */

  const selectionData = paths
    .reduce(
      (acc, fieldname, i) => {
        const isRoot = i === 0

        const parentTypename = isRoot ? 'Root' : acc[i - 1].typename
        const parentFieldmap = isRoot
          ? astMap.operation
          : astMap.types[parentTypename].fieldmap

        const typename = parentFieldmap[fieldname].typename
        const args = parentFieldmap[fieldname].args

        if (!typename) {
          throw Error(`Missing type for ${fieldname}`)
        }

        const res = {
          typename,
          fieldname,
          args,
        }

        return [...acc, res]
      },
      [] as Array<{
        fieldname: Fieldname
        typename: Typename
        args: InputValueDefinitionNode[]
      }>,
    )
    .map(({ fieldname, typename, args }, i, arr) => {
      const isBase = i === arr.length - 1

      const variables = args.map(buildOperationVariable(i))
      const operationArgs = args.map(buildOperationArgument(i))

      let selections: SelectionNode[] = []
      let fragments: FragmentDefinitionNode[] = []

      if (isBase) {
        const base = buildOperationSelection(props, typename)

        selections = base.selections
        fragments = base.fragments
      }

      const field: FieldNode = createField({
        fieldname,
        arguments: operationArgs,
        selections,
      })

      return {
        typename,
        field,
        variables,
        fragments,
      }
    })

  const {
    variables: variableDefinitions,
    fragments: fragmentDefinitions,
    typenames,
  } = selectionData.reduce(
    (acc, { variables, fragments, typename }) => ({
      variables: acc.variables.concat(variables),
      typenames: acc.typenames.concat(typename),
      fragments: acc.fragments.concat(fragments),
    }),
    {
      variables: [] as VariableDefinitionNode[],
      fragments: [] as FragmentDefinitionNode[],
      typenames: [] as Typename[],
    },
  )

  const selection = selectionData
    .slice()
    .reverse()
    .reduce(
      (acc, { field }) => {
        // base type
        if (!acc) {
          return field
        }

        return {
          ...field,
          selectionSet: {
            kind: Kind.SELECTION_SET,
            selections: [
              // add id/typename to all intermediate steps
              createField({ fieldname: '__typename' }),
              // add id (probs should be configurable)
              createField({ fieldname: 'id' }),
              // add nested selection
              acc,
            ],
          },
        }
      },
      undefined as FieldNode | undefined,
    )!

  const operationDefinition = {
    kind: Kind.OPERATION_DEFINITION,
    name: {
      kind: Kind.NAME,
      value: buildOperationName(typenames, operationType),
    },
    operation: operationType,
    variableDefinitions,
    selectionSet: {
      kind: Kind.SELECTION_SET,
      selections: [selection],
    },
  }

  return wrapDocument(operationDefinition, ...fragmentDefinitions)
}
