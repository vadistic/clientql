import {
  ArgumentNode,
  FieldNode,
  FragmentDefinitionNode,
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
  unwrapSelectionSet,
  wrapDocument,
} from '../ast'
import { CoreProps } from '../config'
import { capitalise } from '../utils'
import { buildSelection } from './selection'
import { findRootOperation, retriveCacheFragments } from './utils'

/**
 * this needs to build operation from arr of fieldnames
 */

export const buildOperation = (props: CoreProps) => (path: Fieldname[]) => {
  const [head] = path
  const root = findRootOperation(props)(head)

  // head not on any of roots
  if (!root) {
    return
  }

  const { fragments, selections, variables } = buildDeepOperation(props)(
    root.name,
    path,
  )

  const operationName = path.map(capitalise).join('') + capitalise(root.type)

  const operation = createOperation({
    name: operationName,
    selections,
    type: root.type,
    variables,
  })

  return wrapDocument(operation, ...fragments)
}

interface BuildDeepOperation {
  variables: VariableDefinitionNode[]
  fragments: FragmentDefinitionNode[]
  selections: SelectionNode[]
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
  const nextTarget = vtx.edgesMap!.get(head)

  if (!edgeData || !nextTarget) {
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
    const { selection, fragmentnames } = buildSelection(props)([
      [head, nextTarget],
    ])

    const field = createField({
      arguments: args,
      fieldname: head,
      selections: unwrapSelectionSet(selection),
    })

    return {
      fragments: retriveCacheFragments(props)(fragmentnames),
      variables,
      selections: [field],
    }
  } else {
    // well, not a base
    const {
      selections,
      fragments,
      variables: deepVariables,
    } = buildDeepOperation(props)(nextTarget, tail, level + 1)

    const nextSelection: FieldNode = createField({
      fieldname: head,
      arguments: args,
      selections,
    })

    return {
      variables: [...variables, ...deepVariables],
      fragments,
      selections: [nextSelection],
    }
  }
}
