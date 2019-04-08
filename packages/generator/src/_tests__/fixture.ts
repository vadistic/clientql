import {
  buildAstMap,
  unwrapDocument,
  wrapDocument
} from '@graphql-clientgen/core'
import { DocumentNode } from 'graphql'
import { GeneratorProps, getGeneratorProps } from '../generator'
import { TYPEDEFS } from './typedefs'

export const generatorProps = getGeneratorProps(TYPEDEFS)

export const extendGeneratorProps = (doc: DocumentNode): GeneratorProps => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(generatorProps.doc),
    ...unwrapDocument(doc)
  )
  return {
    ...generatorProps,
    astMap: buildAstMap(extendedAst)
  }
}
