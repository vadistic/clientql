import { getFieldDefinitionNodeMeta } from '@graphql-clientgen/shared'
import {
  FieldDefinitionNode,
  GraphQLSchema,
  OperationDefinitionNode,
  OperationTypeNode,
  print
} from 'graphql'
import {
  createFragmentSpread,
  FragmentType,
  getFragmentConstName,
  getFragmentDependencies,
  getFragmentName
} from '../fragments/object-to-fragment'
import {
  fieldDefinitionToOperation,
  getOperationConstName
} from './field-to-operation'

const generateOperation = (
  fields: ReadonlyArray<FieldDefinitionNode>,
  operation: OperationTypeNode,
  fragmentType: FragmentType
) =>
  fields.map(field => {
    const fieldMeta = getFieldDefinitionNodeMeta(field)
    const fragmentName = getFragmentName(fieldMeta.type.typename, fragmentType)
    const selection = createFragmentSpread(fragmentName)

    return fieldDefinitionToOperation(field, operation, [selection])
  })

export const generateOperations = (schema: GraphQLSchema) => {
  const query = schema.getQueryType()
  const queryFields = (query && query.astNode && query.astNode.fields) || []

  const mutation = schema.getMutationType()
  const mutationFields =
    (mutation && mutation.astNode && mutation.astNode.fields) || []

  const subscription = schema.getSubscriptionType()
  const subscriptionFields =
    (subscription && subscription.astNode && subscription.astNode.fields) || []

  // TODO: maybe generate operations for all types?
  const fragmentType = FragmentType.DEFAULT

  const queryOperations = generateOperation(queryFields, 'query', fragmentType)
  const mutationOperations = generateOperation(
    mutationFields,
    'mutation',
    fragmentType
  )
  const subscriptionOperations = generateOperation(
    subscriptionFields,
    'subscription',
    fragmentType
  )

  const operations = [
    queryOperations,
    mutationOperations,
    subscriptionOperations
  ].flat(1)

  return {
    queryOperations,
    mutationOperations,
    subscriptionOperations,
    operations
  }
}

const operationJSTemplate = (
  operationName: string,
  operation: OperationTypeNode,
  fragmentDeps: string[],
  body: string
) => {
  const deps = fragmentDeps
    ? fragmentDeps
        .map(dep => '${' + getFragmentConstName(dep) + '}')
        .join('\n  ')
    : ''

  const bodyAndDeps = `
  ${body.replace(/\n/gm, '\n  ')}

  ${deps}
  `.trim()

  const main = `
export const ${getOperationConstName(operationName, operation)} = gql\`
  ${bodyAndDeps}
\`
`.trim()

  return main
}

export const printOperationsToJs = (
  operations: ReadonlyArray<OperationDefinitionNode>
) => {
  const allFragmentDeps = new Set<string>()

  const body = operations
    .map(operation => {
      const fragmentDeps = getFragmentDependencies(operation)
      fragmentDeps.forEach(dep => allFragmentDeps.add(dep))

      return operationJSTemplate(
        operation.name ? operation.name.value : '',
        operation.operation,
        fragmentDeps,
        print(operation)
      )
    })
    .join('\n\n')

  const imports = `
import gql from 'graphql-tag'
import {
  ${Array.from(allFragmentDeps)
    .map(fragment => getFragmentConstName(fragment))
    .join(',\n  ')}
} from './fragments'
`.trim()

  return [imports, body].join('\n\n')
}
