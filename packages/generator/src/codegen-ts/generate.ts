import {
  isEnumTypeDefinitionNode,
  isInputObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  unwrapDocument
} from '@graphql-clientgen/shared'
import {
  codegenEnum,
  codegenInputObject,
  codegenObjectToClient,
  codegenObjectToType,
  codegenScalar
} from '.'
import { GeneratorProps } from '../config/config'

export const generateTypescript = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const objectTypes = Object.values(props.astMap.types).map(val => val.node)

  const objectTypesClientsTypescript = objectTypes
    .map(codegenObjectToClient(props))
    .join('\n\n')

  const objectTypesTypesTypescript = objectTypes
    .map(codegenObjectToType(props))
    .join('\n\n')

  const inputObjectTypesTypescript = definitions
    .filter(isInputObjectTypeDefinitionNode)
    .map(codegenInputObject(props))
    .join('\n\n')

  const scalarTypesTypescript = definitions
    .filter(isScalarTypeDefinitionNode)
    .map(codegenScalar(props))
    .join('\n\n')

  const enumTypesTypescript = definitions
    .filter(isEnumTypeDefinitionNode)
    .map(codegenEnum(props))
    .join('\n\n')

  let result = ''

  result += `/* SCALAR TYPES */ \n\n`
  // TODO: Detect if it's declared or something
  result += `export type ID = string` + '\n\n'
  result += scalarTypesTypescript + '\n\n'

  result += `/* CLIENT TYPES */ \n\n`
  result += objectTypesClientsTypescript + '\n\n'

  result += `/* OBJECT TYPES */ \n\n`
  result += objectTypesTypesTypescript + '\n\n'

  result += `/* INPUT OBJECT TYPES */ \n\n`
  result += inputObjectTypesTypescript + '\n\n'

  result += `/* ENUM TYPES */ \n\n`
  result += enumTypesTypescript + '\n\n'

  return result
}
