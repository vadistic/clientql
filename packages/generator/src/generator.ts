import { CoreProps, getCoreProps, mergeExtensions } from '@clientql/core'
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

export interface GeneratorModeToResult {
  CLIENT: GenerateClientResult
  TYPESCRIPT_TYPES: undefined
  GRAPHQL_FRAGMENTS: undefined
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
