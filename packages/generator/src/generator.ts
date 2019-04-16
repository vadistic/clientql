import {
  CoreProps,
  getCoreProps,
  mergeExtensions,
} from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import { GenerateClientResult } from './client'
import {
  defaultGeneratorConfig,
  defaultGeneratorPaths,
  GeneratorConfig,
  GeneratorPaths,
} from './config'
import { GeneratorNaming, initGeneratorNaming } from './naming'

export interface GeneratorProps extends CoreProps {
  naming: GeneratorNaming
  doc: DocumentNode
  config: GeneratorConfig
  paths: GeneratorPaths
}

export enum GeneratorMode {
  CLIENT = 'CLIENT',
  TYPESCRIPT_TYPES = 'TYPESCRIPT_TYPES',
  GRAPHQL_FRAGMENTS = 'GRAPHQL_FRAGMENTS',
}

export interface GeneratorModeToResult {
  CLIENT: GeneratorResult<GeneratorMode.CLIENT, GenerateClientResult>
  TYPESCRIPT_TYPES: undefined
  GRAPHQL_FRAGMENTS: undefined
}

export interface GeneratorResult<M, R> {
  props: GeneratorProps
  mode: M
  result: R
}

export const getGeneratorProps = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
  paths?: GeneratorPaths,
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
    paths: paths || defaultGeneratorPaths,
  }

  return props
}

export const clientgen = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
  paths?: GeneratorPaths,
) => async <M extends GeneratorMode>(
  mode: M,
): Promise<GeneratorModeToResult[M]> => {
  const props = getGeneratorProps(doc, config, paths)

  if (mode === GeneratorMode.CLIENT) {
    const { generateClient } = await import('./client/generate')
    const result = await generateClient(props)
    return { result, props, mode: GeneratorMode.CLIENT }
  }
}
