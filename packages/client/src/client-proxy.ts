import {
  buildOperation,
  defaultCoreConfig,
  getCoreProps,
} from '@graphql-clientgen/core'
import ApolloClient from 'apollo-client'
import { DocumentNode, print } from 'graphql'
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
    const type = 'query'

    console.log('START', segments)

    const { path, variables } = segments.reduce(
      (acc, [fieldname, args], i) => {
        acc.path.push(fieldname as string)

        const vars = args[0][0]
        const variableSuffix = i > 0 ? '' + i : ''

        if (vars) {
          Object.entries(vars).forEach(([key, value]) => {
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

    const operation = buildOperation(core)(path)

    if (!operation) {
      console.warn('operration not built')
      return
    }

    console.log('PATH', path)
    console.log('VARIABLES', variables)

    console.log('OPERATION', print(operation))

    const res = client.query({
      query: operation,
      variables,
    })

    return res
  }

  return fluentAsyncProxy(execute)
}
