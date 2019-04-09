import { DocumentNode } from 'graphql'
import { CoreConfig, CoreProps, getCoreProps } from '../config'
import { unwrapDocument, wrapDocument } from '../graphql-utils'
import { TYPEDEFS } from './typedefs'

export const fixtureProps: CoreProps = getCoreProps(TYPEDEFS)

export const extendFixtureProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
) => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(TYPEDEFS),
    ...unwrapDocument(doc),
  )

  return getCoreProps(extendedAst, config)
}
