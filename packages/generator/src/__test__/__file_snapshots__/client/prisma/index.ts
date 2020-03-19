/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

import { clientFactory } from '@clientql/client'
import {
  QueryClient,
  MutationClient,
  SubscriptionClient
} from './interfaces'
import { TYPEDEFS } from './typedefs'

export * from './interfaces'
export * from './responses'
export * from './types'
export * from './typedefs'

export interface ClientProxy {
  query: QueryClient
  mutation: MutationClient
  subscription: SubscriptionClient
}

export const createClient = clientFactory<ClientProxy>({typedefs: TYPEDEFS})

