import { DocumentNode, GraphQLSchema } from 'graphql'
import { Naming } from './naming'

/*
 * Trying to come up with some kid of common interface to tie all those parts tgether
 *
 * I would like to have some sort of incremental compilation
 * instead of simply maping over all types
 */

export interface GeneratorProps {
  ast: DocumentNode
  schema: GraphQLSchema
  config: GeneratorConfig
  naming: Naming
}

export interface GeneratorConfig {
  liftSingleArgument: boolean
}

export const defaultConfig: GeneratorConfig = {
  liftSingleArgument: true
}
