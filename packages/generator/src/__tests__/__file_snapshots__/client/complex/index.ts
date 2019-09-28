/*
 *
 * Code generated by Graphql Client Generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run 'something' to update it.
 * For more information, please read the docs: https://doclink.com/
 *
 */

import { createClient } from '@clientql/client'
import { MyQueryClient, MyMutationClient } from './interfaces'
import { TYPEDEFS } from './typedefs'

export * from './interfaces'
export * from './responses'
export * from './types'
export * from './typedefs'

export interface ClientProxy {
  query: MyQueryClient
  mutation: MyMutationClient
}

export const useClient = createClient<ClientProxy>({typedefs: TYPEDEFS})

