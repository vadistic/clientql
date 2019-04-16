import { CodegenConfig, defaultCodegenConfig } from '@graphql-clientgen/codegen'
import { CoreConfig, defaultCoreConfig } from '@graphql-clientgen/core'
import { StringCase } from './naming'

/**
 * GeneratorConfig = HOW to generate
 */

export interface GeneratorConfig extends CodegenConfig, CoreConfig {
  /**
   * suffix client types
   * @default 'Client'
   *
   */
  clientSuffix: string
  /**
   * suffix operation results
   * @default 'Response'
   *
   */
  clientResponseSuffix: string
  /**
   * something that all clients will extend to hide soem common options
   * @default 'Fragmentable'
   */
  clientExtend: string
  /**
   * return graphql as string of js/ts file with graphql-tag tagged separate types
   * otherwise prints graphql
   * @default true
   */
  printGraphqlToJs: boolean
  /**
   * casing of generated js constants
   * @default 'CONSTANT_CASE'
   */
  constantCase: StringCase
  /**
   * fragments generated with convention of 1:1 to typename needs some namespacing in JS constant name
   * @default 'Fragment'
   */
  fragmentJsConstantSuffix: string
  /**
   * should generated typedefs be purged of all orphaned/unused types?
   * @default true
   */
  minimalTypedefs: boolean
  /**
   * should client runtime typedefs use `graphql-tag` or simple JS object
   * @default false
   */
  useGqlTagTypedefs: boolean
}

export const defaultGeneratorConfig: GeneratorConfig = {
  ...defaultCoreConfig,
  ...defaultCodegenConfig,
  clientSuffix: 'Client',
  clientResponseSuffix: 'Response',
  clientExtend: 'Fragmentable',
  constantCase: StringCase.CONSTANT,
  fragmentJsConstantSuffix: 'Fragment',
  printGraphqlToJs: true,
  minimalTypedefs: true,
  useGqlTagTypedefs: false,
}

/**
 * GeneratorPaths = WHERE to generate
 *
 * controls shape of generated client library
 * it's important for correct imports in generated strings
 */

export interface GeneratorPaths {
  types: string
  responses: string
  interfaces: string
  typedefs: string
}

export const defaultGeneratorPaths: GeneratorPaths = {
  types: './types',
  responses: './responses',
  interfaces: './interfaces',
  typedefs: './typedefs',
}

/**
 * GeneratorMode = WHAT to generate
 */
