import { nonNull } from '@graphql-clientgen/shared'
import { GraphQLSchema } from 'graphql'
import {
  ClientStrings,
  getTypeClientName,
  objectTypeToClientStrings
} from './type-to-client'

interface GeneratedClients {
  rootClient: ClientStrings
  clients: ClientStrings[]
  graphqlDeps: string[]
  tsDeps: string[]
}

export const generateClients = (schema: GraphQLSchema): GeneratedClients => {
  // generate main Client
  const rootClient = ['Query', 'Mutation', 'Subscription']
    .map(typename => objectTypeToClientStrings(schema, typename))
    .filter(nonNull)
    .reduce((acc, { fields, graphqlDeps, tsDeps }) => ({
      tsDeps: acc.tsDeps.concat(tsDeps),
      graphqlDeps: [...acc.graphqlDeps, ...graphqlDeps],
      fields: acc.fields.concat(fields),
      typename: 'Client'
    }))

  // to0 lazy to do it more pure
  const graphqlDependencies = new Set<string>()
  const typescriptDependecies = new Set<string>()
  const todoTypesSet = new Set<string>()

  rootClient.graphqlDeps.forEach(typename => {
    graphqlDependencies.add(typename)
    todoTypesSet.add(typename)
  })

  rootClient.tsDeps.forEach(type => {
    typescriptDependecies.add(type)
  })

  const clients: ClientStrings[] = []

  // resursive loop, why not
  const generateReferencedClients = () => {
    const todo = Array.from(todoTypesSet)
    todoTypesSet.clear()

    const next = todo.map(typename =>
      objectTypeToClientStrings(schema, typename)
    )

    next.forEach(client => {
      if (!client) {
        throw Error('Err, Could not generate client for required field somehow')
      }

      clients.push(client)

      client.graphqlDeps.forEach(typename => {
        graphqlDependencies.add(typename)
        todoTypesSet.add(typename)
      })

      client.tsDeps.forEach(TSType => {
        typescriptDependecies.add(TSType)
      })
    })

    // loop
    if (todoTypesSet.size !== 0) {
      generateReferencedClients()
    }
  }

  generateReferencedClients()

  return {
    rootClient,
    clients,
    graphqlDeps: Array.from(graphqlDependencies),
    tsDeps: Array.from(typescriptDependecies)
  }
}

export const printClientsToJs = ({
  clients,
  rootClient,
  tsDeps,
  graphqlDeps
}: GeneratedClients) => {
  const rootString = rootClientJstemplate(rootClient)

  const clientsStrings = clients.map(clientJSTemplate).join('\n\n')

  const imports = `
import {
  ${[...tsDeps, ...graphqlDeps].sort().join(',\n  ')}
} from './types'
  `.trim()

  return [imports, rootString, clientsStrings].join('\n\n')
}

export const rootClientJstemplate = ({ fields, typename }: ClientStrings) => {
  const body = `
export interface ${typename} {
  ${fields.join('\n  ')}
}
   `.trim()

  return body
}

export const clientJSTemplate = ({ typename, fields }: ClientStrings) => {
  const body = `
export interface ${getTypeClientName(
    typename
  )} extends Promise<FlatFragment<${typename}>> {
  ${fields.join('\n  ')}
}
   `.trim()

  return body
}
