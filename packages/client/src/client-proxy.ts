import {
  buildOperation,
  findRootOperation,
  getCoreProps,
} from '@graphql-clientgen/core'
import ApolloClient from 'apollo-client'
import { DocumentNode } from 'graphql'
import { fluentAsyncProxy, Segments } from './fluent-async-proxy'

export interface ClientProxyProps {
  client: ApolloClient<any>
  typedefs: DocumentNode
}
/**
 * Client proxy is path proxy with callback pointing to apollo
 */
export const createClientProxy = ({
  client,
  typedefs,
}: ClientProxyProps): any => {
  const core = getCoreProps(typedefs)

  const execute = async (segments: Segments) => {
    const { path, variables } = segments.reduce(
      (acc, [fieldname, args], i) => {
        acc.path.push(fieldname as string)

        const parameterObj = args[0][0]
        const variableSuffix = i > 0 ? '' + i : ''

        if (parameterObj) {
          Object.entries(parameterObj).forEach(([key, value]) => {
            acc.variables[key + variableSuffix] = value
          })
        }

        return acc
      },
      {
        path: [] as string[],
        variables: {} as any,
      },
    )

    const root = findRootOperation(core)(path[0])
    const operation = buildOperation(core)(path)

    if (!root || !operation) {
      throw Error('Operation could not be built')
    }

    if (root.type === 'query') {
      return client.query({
        query: operation,
        variables,
      })
    }

    if (root.type === 'mutation') {
      return client.mutate({
        mutation: operation,
        variables,
      })
    }

    if (root.type === 'subscription') {
      return client.subscribe({
        query: operation,
        variables,
      })
    }
  }

  return fluentAsyncProxy(execute)
}
