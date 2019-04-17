import {
  ArgumentNode,
  DocumentNode,
  FieldNode,
  InlineFragmentNode,
  OperationTypeNode,
  VariableDefinitionNode,
} from 'graphql'
import {
  createField,
  createInlineFragment,
  createOperation,
  createOperationArgument,
  createOperationVariable,
  Typename,
  wrapDocument,
} from '../ast'
import { CoreProps } from '../core'
import { operationTypes } from '../graph'
import { capitalise } from '../utils'
import { buildSelections } from './selections'
import {
  OperationEdge,
  OperationResult,
  OperationSelectionResult,
} from './types'
import { retriveFragmentsFromCache } from './utils'

/**
 * helper to build operation + retrive fragments
 *
 */
export const buildOperationDoc = (props: CoreProps) => (
  path: OperationEdge[],
): DocumentNode => {
  const { fragmentNames: dependencies, operation } = buildOperation(props)(path)
  const fragments = retriveFragmentsFromCache(props)(dependencies)

  return wrapDocument(operation, ...fragments)
}

/**
 * operation builder transform OperationEdges/paths to:
 *  - empty selection(typename only) + variables
 *  - and then use `buildSelection` on the path end
 *
 * OperationEdge tuple represents [fieldname, typename]
 *
 * - fieldname on ObjectTypes or InterfaceType own fields
 * - typename on UnionType/InterfaceType inlines
 *
 * (this seems like a logic way to support entering inlines)
 *
 * ! first fieldname should be OperationType/ Root
 */

export const buildOperation = (props: CoreProps) => (
  path: OperationEdge[],
): OperationResult => {
  const [head] = path
  const operationType = head[0] as OperationTypeNode | undefined

  if (!operationType) {
    throw Error(`buildOperation: operationType is missing in path`)
  }

  if (!operationTypes.includes(operationType)) {
    throw Error(`buildOperation: invalid operationType (${operationType})`)
  }

  const rootTypename = props.roots.get(operationType)

  if (!rootTypename) {
    throw Error(`buildOperation: there is no schema node for ${operationType}`)
  }

  /**
   * Joining all operation field + Inline Typename selections + rootTypename suffix
   * so ['user','friends','WorkFirend','name'] =>
   * UsersFriendsWorkFriendNameQuery
   */
  const operationName =
    path
      .slice(1)
      .map(([fieldname, typename]) => capitalise(fieldname || typename || ''))
      .join('') + capitalise(rootTypename)

  // read from cache
  if (props.cache.operations.has(operationName)) {
    return props.cache.operations.get(operationName)!
  }

  const { selections, variables, ...rest } = buildOperationSelection(props)(
    rootTypename,
    // without first segment since parent root is resolved
    path.slice(1),
  )

  const operation = createOperation({
    name: operationName,
    selections,
    type: operationType,
    variables,
  })

  const operationResult = {
    ...rest,
    operation,
  }

  // write to cache
  props.cache.operations.set(operationName, operationResult)

  return operationResult
}

/**
 * recursively build operation selection and then base selection
 *
 * ! path without first segment since parent is provided
 */
const buildOperationSelection = (props: CoreProps) => (
  parent: Typename,
  path: OperationEdge[],
  level = 0,
): OperationSelectionResult => {
  const [[fieldname, typename], ...tail] = path

  /*
   * entering union/interface inline, level stay the same
   */
  if (typename) {
    const { selections, ...rest } = buildOperationSelection(props)(
      typename,
      tail,
      level,
    )

    const inlineSelection: InlineFragmentNode = createInlineFragment(
      typename,
      selections,
    )

    return {
      ...rest,
      selections: [inlineSelection],
    }
  }

  /*
   * validate path/target
   */
  const vtx = props.graph.get(parent)

  if (!vtx || !vtx.weightsMap || !vtx.edgesMap) {
    throw Error('Invalid operation path (parent not found)')
  }

  if (!fieldname) {
    throw Error('Invalid operation path (no fieldname)')
  }

  const edgeData = vtx.weightsMap.get(fieldname)
  const child = vtx.edgesMap.get(fieldname)

  if (!edgeData || !child || !fieldname) {
    throw Error('Invalid operation path (target not found)')
  }

  /*
   * build this level's variables/args
   * top level variables are without suffixes, nested get nesting level
   */
  const argSuffix = level > 0 ? '' + level : ''

  const inputs = (edgeData.arguments || []).reduce(
    (acc, input) => {
      acc.args.push(createOperationArgument(argSuffix)(input))
      acc.vars.push(createOperationVariable(argSuffix)(input))
      return acc
    },
    {
      vars: [] as VariableDefinitionNode[],
      args: [] as ArgumentNode[],
    },
  )

  /*
   * build nested operation
   */
  if (tail.length > 0) {
    const { selections, variables, ...rest } = buildOperationSelection(props)(
      child,
      tail,
      level + 1,
    )

    // TODO: add typename here?

    const deepSelection: FieldNode = createField({
      fieldname,
      arguments: inputs.args,
      selections,
    })

    return {
      ...rest,
      variables: [...inputs.vars, ...variables],
      selections: [deepSelection],
    }
  }

  /*
   * base selection, no nested variables
   */
  if (tail.length === 0) {
    // selection helper handles invalid child typename
    const { selections, ...rest } = buildSelections(props)(child)

    const field = createField({
      fieldname,
      arguments: inputs.args,
      selections,
    })

    return {
      ...rest,
      variables: inputs.vars,
      selections: [field],
    }
  }

  // noop
  throw Error
}
