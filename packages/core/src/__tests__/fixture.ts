import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS } from '@graphql-clientgen/testing'
import { DocumentNode } from 'graphql'
import { unwrapDocument, wrapDocument } from '../ast'
import { CoreConfig, CoreProps, getCoreProps } from '../config'

export const prismaProps: CoreProps = getCoreProps(PRISMA_TYPEDEFS)

export const extendPrismaProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
) => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(PRISMA_TYPEDEFS),
    ...unwrapDocument(doc),
  )

  return getCoreProps(extendedAst, config)
}

export const complexProps: CoreProps = getCoreProps(COMPLEX_TYPEDEFS)

export const extendComplexProps = (
  doc: DocumentNode,
  config?: Partial<CoreConfig>,
) => {
  const extendedAst = wrapDocument(
    ...unwrapDocument(PRISMA_TYPEDEFS),
    ...unwrapDocument(doc),
  )

  return getCoreProps(extendedAst, config)
}
