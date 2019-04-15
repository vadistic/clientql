import {
  CoreProps,
  getCoreProps,
  mergeExtensions,
} from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import {
  defaultGeneratorConfig,
  defaultGeneratorOptions,
  defaultGeneratorPaths,
  GeneratorConfig,
  GeneratorOptions,
  GeneratorPaths,
} from './config'

export interface GeneratorProps extends CoreProps {
  doc: DocumentNode
  config: GeneratorConfig
  options: GeneratorOptions
  paths: GeneratorPaths
}

export type GeneratorResult = {
  [Group in keyof GeneratorOptions]: {
    [Result in keyof GeneratorOptions[Group]]?: string
  }
}

export const getGeneratorProps = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
  options?: Partial<GeneratorOptions>,
  paths?: Partial<GeneratorPaths>,
) => {
  const mergedDoc = mergeExtensions(doc)

  // here could be minimal typedefs to avoid unnecesary typing etc

  const props: GeneratorProps = {
    ...getCoreProps(mergedDoc),
    doc: mergedDoc,
    config: {
      ...defaultGeneratorConfig,
      ...config,
    },
    options: {
      ...defaultGeneratorOptions,
      ...options,
    },
    paths: {
      ...defaultGeneratorPaths,
      ...paths,
    },
  }

  return props
}

export const graphqlClientGenerator = async (
  doc: DocumentNode,
  config: Partial<GeneratorConfig>,
  options: Partial<GeneratorOptions>,
  paths: Partial<GeneratorPaths>,
) => {
  const props = getGeneratorProps(doc, config, options, paths)

  const result: GeneratorResult = {
    client: {},
    graphql: {},
    typings: {},
  }

  if (props.options.typings.definitions) {
    const {
      generateTypingsDefinitions,
    } = await import('./generate/typings-definitions')

    result.typings.definitions = await generateTypingsDefinitions(props)
  }
}
