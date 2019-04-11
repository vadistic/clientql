import { PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { DocumentNode } from 'graphql'
import { CoreConfig, CoreProps, getCoreProps } from '../config'
import { unwrapDocument, wrapDocument } from '../graphql-ast'

export const fixtureProps: CoreProps = getCoreProps(PRISMA_TYPEDEFS)

export const extendFixtureProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
) => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(PRISMA_TYPEDEFS),
    ...unwrapDocument(doc),
  )

  return getCoreProps(extendedAst, config)
}
