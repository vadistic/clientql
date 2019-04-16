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
import { GeneratorNaming, initGeneratorNaming } from './naming'

export interface GeneratorProps extends CoreProps {
  naming: GeneratorNaming
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
  const mergedConfig = {
    ...defaultGeneratorConfig,
    ...config,
  }

  const mergedDoc = mergeExtensions(doc)
  const coreProps = getCoreProps(mergedDoc)
  const naming = initGeneratorNaming(mergedConfig)

  // here could be minimal typedefs to avoid unnecesary typing etc

  const props: GeneratorProps = {
    ...coreProps,
    naming,
    doc: mergedDoc,
    config: mergedConfig,
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

export const graphqlGenerator = async (
  doc: DocumentNode,
  config: Partial<GeneratorConfig>,
  options: Partial<GeneratorOptions>,
  paths: Partial<GeneratorPaths>,
) => {
  const props = getGeneratorProps(doc, config, options, paths)

  const result: GeneratorResult = {
    client: {},
    graphql: {},
    typescript: {},
  }

  if (props.options.typescript.types) {
    const { generateTsTypes } = await import('./extra/typescript-types')

    result.typescript.types = await generateTsTypes(props)
  }
}
