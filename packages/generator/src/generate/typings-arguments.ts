import {
  printArgumentInterfaces,
  printCodeSection,
} from '@graphql-clientgen/codegen'
import { truthy, unwrapDocument } from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsArguments = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { rootTypes, objectTypes } = reduceObjectTypeDefinitions(definitions)

  const print = printArgumentInterfaces(
    props.config.codegenConfig,
    props.schema,
  )

  const rootTypesArgumentsTypescript = rootTypes
    .map(print)
    .filter(truthy)
    .join('\n\n')

  const objectTypesArgumentsTypescript = objectTypes.map(print).filter(truthy)

  const result = printCodeSection(
    `ARGUMENTS TYPES`,
    rootTypesArgumentsTypescript + '\n\n' + objectTypesArgumentsTypescript,
  )

  return result
}
