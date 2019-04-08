import { AstMap, buildAstMap } from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import {
  defaultGeneratorConfig,
  defaultGeneratorOptions,
  defaultGeneratorPaths,
  GeneratorConfig,
  GeneratorOptions,
  GeneratorPaths
} from './config'
import { GeneratorNaming, getGeneratorNaming } from './naming'

export interface GeneratorProps {
  doc: DocumentNode
  astMap: AstMap
  naming: GeneratorNaming
  options: GeneratorOptions
  config: GeneratorConfig
  paths: GeneratorPaths
}

export type GeneratorResult = {
  [Group in keyof GeneratorOptions]: {
    [Result in keyof GeneratorOptions[Group]]?: string
  }
}

/**
 * refactored to reuse in tests
 */
export const getGeneratorProps = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
  options?: Partial<GeneratorOptions>,
  paths?: Partial<GeneratorPaths>
) => {
  const mergedConfig: GeneratorConfig = {
    ...defaultGeneratorConfig,
    ...config
  }

  const mergedOptions: GeneratorOptions = options
    ? {
        client: {
          ...defaultGeneratorOptions.client,
          ...options.client
        },
        graphql: {
          ...defaultGeneratorOptions.graphql,
          ...options.graphql
        },
        typings: {
          ...defaultGeneratorOptions.typings,
          ...options.typings
        }
      }
    : defaultGeneratorOptions

  const mergedPaths: GeneratorPaths = {
    ...defaultGeneratorPaths,
    ...paths
  }

  const astMap = buildAstMap(doc)

  const props: GeneratorProps = {
    doc,
    astMap,
    naming: getGeneratorNaming(mergedConfig),
    config: mergedConfig,
    options: mergedOptions,
    paths: mergedPaths
  }

  return props
}

export const graphqlClientGenerator = async (
  doc: DocumentNode,
  config: Partial<GeneratorConfig>,
  options: Partial<GeneratorOptions>,
  paths: Partial<GeneratorPaths>
) => {
  const props = getGeneratorProps(doc, config, options, paths)

  const result: GeneratorResult = {
    client: {},
    graphql: {},
    typings: {}
  }

  /**
   * maybe pararelize it
   */

  if (props.options.typings.definitions) {
    const {
      generateTypingsDefinitions
    } = await import('./generate/typings-definitions')

    result.typings.definitions = await generateTypingsDefinitions(props)
  }
}
