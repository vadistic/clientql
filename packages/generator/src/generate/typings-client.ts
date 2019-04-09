import { unwrapDocument } from '@graphql-clientgen/core'
import {
  codegenTsObjectToClient,
  codegenTsRootClient,
} from '../codegen-typescript'
import { GeneratorProps } from '../generator'
import { printJsSection } from '../print'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsClient = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { objectTypes } = reduceObjectTypeDefinitions(definitions)

  const rootClientTypings = codegenTsRootClient(props)()

  const objectClientTypings = objectTypes
    .map(codegenTsObjectToClient(props))
    .join('\n\n')

  let result = ''

  result += printJsSection(`ROOT CLIENT`, rootClientTypings)
  result += printJsSection(`CLIENTS`, objectClientTypings)

  return result
}
