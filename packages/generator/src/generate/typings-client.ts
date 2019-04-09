import {
  createCodegenPrinter,
  printCodeSection,
} from '@graphql-clientgen/codegen'
import { unwrapDocument } from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsClient = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { objectTypes, rootTypes } = reduceObjectTypeDefinitions(definitions)

  const print = createCodegenPrinter(
    { addFieldsAsFunction: true },
    props.schema,
  )

  const rootClientTypings = print(rootTypes)!

  const objectClientTypings = objectTypes.map(print).join('\n\n')

  let result = ''

  result += printCodeSection(`ROOT CLIENT`, rootClientTypings)
  result += printCodeSection(`CLIENTS`, objectClientTypings)

  return result
}
