import { buildOperation, getCoreProps } from '@graphql-clientgen/core'
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

  const execute = async (segments: Segments) => {}

  return fluentAsyncProxy(execute)
}
