import { AstMap } from '@graphql-clientgen/shared'
import { DocumentNode, GraphQLSchema } from 'graphql'
import { Naming } from './naming'

/*
 * Trying to come up with some kid of common interface to tie all those parts tgether
 *
 * I would like to have some sort of incremental compilation
 * instead of simply maping over all types
 *
 * Also - I need to finaly decide to use Schema/ASt or 2 other custom conventions....
 */

export interface GeneratorProps {
  doc: DocumentNode
  astMap: AstMap
  config: GeneratorConfig
  naming: Naming
}

export interface GeneratorConfig {
  liftSingleArgument: boolean
}

export const defaultConfig: GeneratorConfig = {
  liftSingleArgument: true
}
