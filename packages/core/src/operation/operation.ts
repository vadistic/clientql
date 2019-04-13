import {
  ArgumentNode,
  FieldNode,
  FragmentDefinitionNode,
  OperationTypeNode,
  SelectionNode,
  VariableDefinitionNode,
} from 'graphql'
import {
  createField,
  createOperation,
  createOperationArgument,
  createOperationVariable,
  Fieldname,
  Typename,
  wrapDocument,
} from '../ast'
import { CoreProps } from '../config'
import { buildSelections } from './selection'

/**
 * this needs to build operation from arr of fieldnames
 */

export const buildOperation = (props: CoreProps) => (path: Fieldname[]) => {
  const [head, ...tail] = path
  const { type, vtx } = determineOperationType(props)(head)

  // head not on any of roots
  if (!vtx || !type) {
    return
  }

  const { fragments, selection, variables } = buildDeepOperation(props)(
    vtx.name,
    path,
  )

  const operation = createOperation({
    name: 'TODO',
    selections: [selection],
    type,
    variables,
  })

  return wrapDocument(operation, ...fragments)
}

interface BuildDeepOperation {
  variables: VariableDefinitionNode[]
  fragments: FragmentDefinitionNode[]
  selection: SelectionNode
}

const buildDeepOperation = (props: CoreProps) => (
  target: Typename,
  path: Fieldname[],
  level = 0,
): BuildDeepOperation => {
  const [head, ...tail] = path

  const vtx = props.graph.get(target)

  if (!vtx) {
    throw Error('Invalid operation target')
  }

  const edgeData = vtx.weightsMap!.get(head)

  if (!edgeData) {
    throw Error('Invalid operation path')
  }

  const argSuffix = level > 0 ? '' + level : ''

  const { variables, args } = (edgeData.arguments || []).reduce(
    (acc, input) => {
      acc.args.push(createOperationArgument(argSuffix)(input))
      acc.variables.push(createOperationVariable(argSuffix)(input))
      return acc
    },
    {
      variables: [] as VariableDefinitionNode[],
      args: [] as ArgumentNode[],
    },
  )

  // base
  if (tail.length === 0) {
    const { selections, complete, fragments } = buildSelections(props)(
      vtx.name,
      head,
    )

    return {
      fragments,
      variables,
      selection: createField({
        fieldname: head,
        arguments: args,
        selections,
      }),
    }
  }

  // not a base

  // nullability checked above by edgeData
  const nextTarget = vtx.edgesMap!.get(head)!

  const { selection, fragments, variables: deepVariables } = buildDeepOperation(
    props,
  )(nextTarget, tail, level + 1)

  const netxtSelection: FieldNode = createField({
    fieldname: head,
    arguments: args,
    selections: [selection],
  })

  return {
    variables: [...variables, ...deepVariables],
    fragments,
    selection: netxtSelection,
  }
}

const determineOperationType = (props: CoreProps) => (head: Fieldname) => {
  const query = props.graph.get('Query')
  if (query && query.edgesMap && query.edgesMap.has(head)) {
    return { vtx: query, type: 'query' as OperationTypeNode }
  }

  const mutation = props.graph.get('Mutation')
  if (mutation && mutation.edgesMap && mutation.edgesMap.has(head)) {
    return { vtx: query, type: 'mutation' as OperationTypeNode }
  }

  const subscription = props.graph.get('subscription')
  if (
    subscription &&
    subscription.edgesMap &&
    subscription.edgesMap.has(head)
  ) {
    return { vtx: query, type: 'subscription' as OperationTypeNode }
  }

  return { vtx: undefined, type: undefined }
}
