import { Client, operations, fragments, ROOTS } from './generated/client'
import ApolloClient from 'apollo-client'
import {
  FieldDefinitionNode,
  SelectionNode,
  FieldNode,
  Kind,
  OperationTypeNode,
  OperationDefinitionNode,
  InputValueDefinitionNode,
  VariableDefinitionNode,
  ArgumentNode,
  DocumentNode,
  ObjectTypeDefinitionNode,
  DefinitionNode
} from 'graphql'
import changeCase from 'change-case'

/**
 * Get operation name from field/type name
 *
 */
export const getOperationName = (fieldName: string) =>
  fieldName[0].toUpperCase() + fieldName.slice(1)

export const getOperationConstName = (
  fieldName: string,
  operation: OperationTypeNode
) => changeCase.constant(fieldName)

export const getFragmentConstName = (
  fragmentName: string,
  fragmentType: OperationTypeNode
) => changeCase.constant(fragmentName + ' ' + fragmentType)

/**
 * convert field's InputValueDefinitionNode to VariableDefinition
 *
 * keeps the same naming, coupled with inputValueToArgument
 */
export const inputValueToVariableDefinition = (
  node: InputValueDefinitionNode
): VariableDefinitionNode => ({
  kind: Kind.VARIABLE_DEFINITION,
  defaultValue: node.defaultValue,
  directives: node.directives,
  variable: {
    kind: Kind.VARIABLE,
    name: node.name
  },
  type: node.type
})

/**
 * convert field's InputValueDefinitionNode to ArgumentNode
 *
 * keeps the same naming, coupled with inputValueToVariableDefinition
 */
export const inputValueToArgument = (
  node: InputValueDefinitionNode
): ArgumentNode => ({
  kind: Kind.ARGUMENT,
  name: node.name,
  value: {
    kind: Kind.VARIABLE,
    name: node.name
  }
})
/**
 * convert root (Query/Mutation) field definition to empty(typename only) Field
 */
export const fieldDefinitionToOperationField = (
  node: FieldDefinitionNode,
  selections?: ReadonlyArray<SelectionNode>
): FieldNode => ({
  kind: Kind.FIELD,
  name: node.name,
  arguments: !node.arguments
    ? undefined
    : node.arguments.map(inputValueToArgument),
  selectionSet: {
    kind: Kind.SELECTION_SET,
    // !!! typename is added in fragment so here I'll skip
    selections: selections || []
  }
})

/**
 * convert root (Query/Mutation) field definition to operation on this field
 */
export const fieldDefinitionToOperation = (
  node: FieldDefinitionNode,
  operation: OperationTypeNode,
  selections?: ReadonlyArray<SelectionNode>
): OperationDefinitionNode => ({
  kind: Kind.OPERATION_DEFINITION,
  operation,
  name: {
    kind: Kind.NAME,
    value: getOperationName(node.name.value)
  },
  directives: node.directives,
  variableDefinitions: !node.arguments
    ? undefined
    : node.arguments.map(inputValueToVariableDefinition),
  selectionSet: {
    kind: Kind.SELECTION_SET,
    selections: [fieldDefinitionToOperationField(node, selections)]
  }
})

type GetOperation =
  | {
      field: FieldDefinitionNode
      type: OperationTypeNode
    }
  | {
      field: undefined
      type: undefined
    }

const getOperation = (prop: string, roots: DocumentNode): GetOperation => {
  const queries = roots.definitions.find(
    root => root.kind === 'ObjectTypeDefinition' && root.name.value === 'Query'
  ) as ObjectTypeDefinitionNode | undefined

  const queryField =
    queries &&
    queries.fields &&
    queries.fields.find(field => field.name.value === prop)

  if (queryField) {
    return {
      field: queryField,
      type: 'query'
    }
  }

  const mutations = roots.definitions.find(
    root =>
      root.kind === 'ObjectTypeDefinition' && root.name.value === 'Mutation'
  ) as ObjectTypeDefinitionNode | undefined

  const mutationField =
    mutations &&
    mutations.fields &&
    mutations.fields.find(field => field.name.value === prop)

  if (mutationField) {
    return {
      field: mutationField,
      type: 'mutation'
    }
  }

  const subscriptions = roots.definitions.find(
    root =>
      root.kind === 'ObjectTypeDefinition' && root.name.value === 'Subscription'
  ) as ObjectTypeDefinitionNode | undefined

  const subscriptionField =
    subscriptions &&
    subscriptions.fields &&
    subscriptions.fields.find(field => field.name.value === prop)

  if (subscriptionField) {
    return {
      field: subscriptionField,
      type: 'subscription'
    }
  }

  return {
    field: undefined,
    type: undefined
  }
}

export const typenameFieldNode: FieldNode = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: '__typename'
  }
}

export const idFieldNode: FieldNode = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: 'id'
  }
}

export const wrapInDocument = (...nodes: DefinitionNode[]): DocumentNode => ({
  kind: Kind.DOCUMENT,
  definitions: nodes
})

export interface CreateCLientProxy {
  client: ApolloClient<any>
}

export const createClientProxy = ({ client }: CreateCLientProxy) => {
  const returnFn = (prop: any) => {
    if (typeof prop !== 'string') {
      return
    }
    const { field, type } = getOperation(prop, ROOTS)

    if (!field || !type) {
      return
    }

    const operation = fieldDefinitionToOperation(field, type, [
      typenameFieldNode,
      idFieldNode
    ])

    const graphql = wrapInDocument(operation)

    if (type === 'query') {
      return (args: any) => client.query({ variables: args, query: graphql })
    }

    if (type === 'mutation') {
      return (args: any) =>
        client.mutate({ variables: args, mutation: graphql })
    }

    if (type === 'subscription') {
      return (args: any) =>
        client.subscribe({ variables: args, query: graphql })
    }
  }

  const clientProxy = new Proxy({} as Client, {
    get(target, prop) {
      if (typeof prop === 'string') {
        const fn = returnFn(prop)

        return fn ? fn : (target as any)[prop]
      }
    }
  })

  return clientProxy
}
