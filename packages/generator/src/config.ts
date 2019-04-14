import { CodegenConfig, defaultCodegenConfig } from '@graphql-clientgen/codegen'
import { CoreConfig, defaultCoreConfig } from '@graphql-clientgen/core'
import { StringCase } from './naming'

/**
 * GeneratorConfig = HOW to generate
 */

export interface GeneratorConfig extends CodegenConfig, CoreConfig {
  /**
   * suffix client types
   * @default: 'Client'
   *
   */
  clientSuffix: string
  /**
   * return graphql as string of js/ts file with graphql-tag tagged separate types
   * otherwise prints graphql
   * @default: true
   */
  printGraphqlToJs: boolean
  /**
   * casing of generated js constants
   * @default: 'CONSTANT_CASE'
   */
  constantCase: StringCase
  /**
   * Fragments generated with convention of 1:1 to typename needs some namespacing in JS constant name
   * @default: 'Fragment'
   */
  fragmentJsConstantSuffix: string
  /**
   * generate helper maps of all all generated fragments/operations by typename/field
   * @default: true
   */
  generateJsMaps: boolean
}

export const defaultGeneratorConfig: GeneratorConfig = {
  ...defaultCoreConfig,
  ...defaultCodegenConfig,
  clientSuffix: 'Client',
  constantCase: StringCase.CONSTANT,
  fragmentJsConstantSuffix: 'Fragment',
  generateJsMaps: true,
  printGraphqlToJs: true,
}

/**
 * GeneratorPaths = WHERE to generate
 *
 * Constrols shape of generated client library
 * It's important for correct imports in generated strings
 */

export interface GeneratorPaths {
  clientDir: string
  types: string
  client: string
  fragments: string
  operations: string
  typedefs: string
}

export const defaultGeneratorPaths = {
  clientDir: 'src/generated/client',
  types: 'types.ts',
  client: 'client.ts',
  fragments: 'fragments.ts',
  operations: 'operations.ts',
  typedefs: 'typedefs.ts',
}

/**
 * GeneratorOptions = WHAT to generate
 */

export interface GeneratorOptions {
  typings: {
    /**
     * generate typescript definitions for graphql type definitions
     * @default: true
     */
    definitions: boolean
    /**
     * generate typescript definitions for client
     * @default: true
     */
    client: true
    /**
     * generate typescript definitions for generated operations
     * @default: true
     */
    operations: boolean
    /**
     * generate interfaces for field arguments
     * @example: users(a, b) on Query => interface UsersQueryArgs = {a: any, b: any}
     * @default: true
     */
    arguments: boolean
    /**
     * generate typescript definitions for generated fragments
     * @default: true
     */
    fragments: boolean
  }
  client: {
    /**
     * generate ts runtime boilerplate for client
     */
    boilerplate: boolean
  }
  graphql: {
    /**
     * generate runtime typedefs for client
     * (trims to only what's needed & merge extendsions)\
     * @default: true
     */
    typedefs: boolean
    /**
     * generate fragments for object types
     * @default: true
     */
    fragments: boolean
    /**
     * generate avalible operations with configured fragments/nofragments
     * @default: true
     */
    operations: boolean
  }
}

export const defaultGeneratorOptions: GeneratorOptions = {
  typings: {
    definitions: true,
    client: true,
    arguments: true,
    operations: true,
    fragments: true,
  },
  client: {
    boilerplate: true,
  },
  graphql: {
    typedefs: true,
    fragments: true,
    operations: true,
  },
}
