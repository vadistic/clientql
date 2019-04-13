import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()

const ENDPOINT = `https://eu1.prisma.sh/vadistic/graphql-clientgen/dev`

const httpLink = new HttpLink({
  uri: ENDPOINT,
})

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(`GRAPHQL_ERROR`, message))
  }
  if (networkError) {
    console.error(`NETWORK_ERROR`)
    console.error(networkError)
    console.error(response)
  }
})

const apolloClientOptions = {
  connectToDevTools: true,
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
}

export const apolloClient = new ApolloClient(apolloClientOptions)
