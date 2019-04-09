import { truthy, unwrapDocument } from '@graphql-clientgen/core'
import { codegenTsArguments } from '../codegen-typescript/arguments'
import { GeneratorProps } from '../generator'
import { printJsSection } from '../print'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsArguments = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { rootTypes, objectTypes } = reduceObjectTypeDefinitions(definitions)

  const rootTypesArgumentsTypescript = rootTypes
    .map(codegenTsArguments(props))
    .filter(truthy)
    .join('\n\n')

  const objectTypesArgumentsTypescript = objectTypes
    .map(codegenTsArguments(props))
    .filter(truthy)

  const result = printJsSection(
    `ARGUMENTS TYPES`,
    rootTypesArgumentsTypescript + '\n\n' + objectTypesArgumentsTypescript,
  )

  return result
}
