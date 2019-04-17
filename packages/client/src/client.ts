import {
  buildOperationDoc,
  CoreConfig,
  getCoreProps,
} from '@graphql-clientgen/core'
import ApolloClient from 'apollo-client'
import { fluentAsyncProxy, Segments } from './fluent-async-proxy'
import { parseSegments } from './path'

export interface ClientBaseProps {
  typedefs: any
}

export interface ClientProps {
  client: ApolloClient<any>
  config?: Partial<CoreConfig>
}
/**
 * Client proxy is path proxy with callback pointing to apollo
 */
export const createClient = <ClientProxy>({ typedefs }: ClientBaseProps) => ({
  client,
  config,
}: ClientProps): ClientProxy => {
  const core = getCoreProps(typedefs, config)
  const getOperation = buildOperationDoc(core)

  const execute = async (segments: Segments) => {
    const { path, variables, type } = parseSegments(segments)

    if (type === 'query') {
      return client.query({ query: getOperation(path), variables })
    }

    if (type === 'mutation') {
      return client.mutate({ mutation: getOperation(path), variables })
    }

    if (type === 'subscription') {
      return client.subscribe({ query: getOperation(path), variables })
    }

    return null
  }

  return fluentAsyncProxy(execute)
}
