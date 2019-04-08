import {
  buildAstMap,
  unwrapDocument,
  wrapDocument,
} from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import { GeneratorConfig } from '../config'
import { GeneratorProps, getGeneratorProps } from '../generator'
import { getGeneratorNaming } from '../naming'
import { TYPEDEFS } from './typedefs'

export const fixtureProps = getGeneratorProps(TYPEDEFS)

export const configFixtureProps = (
  config: Partial<GeneratorConfig>,
): GeneratorProps => {
  const mergedConfig: GeneratorConfig = {
    ...fixtureProps.config,
    ...config,
  }

  return {
    ...fixtureProps,
    config: mergedConfig,
    // I'm guesing it need to be reintantiated because of scope
    naming: getGeneratorNaming(mergedConfig),
  }
}

export const extendFixtureProps = (
  doc: DocumentNode,
  config?: Partial<GeneratorConfig>,
): GeneratorProps => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(fixtureProps.doc),
    ...unwrapDocument(doc),
  )

  if (config) {
    return {
      ...configFixtureProps(config),
      astMap: buildAstMap(extendedAst),
    }
  }

  return {
    ...fixtureProps,
    astMap: buildAstMap(extendedAst),
  }
}
