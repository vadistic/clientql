import {
  isEnumTypeDefinitionNode,
  isInputObjectTypeDefinitionNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  unwrapDocument
} from '@graphql-clientgen/shared'
import {
  codegenInputObjectMetaToType,
  codegenObjectMetaToType,
  getEnumTypeDefinitionNodeMeta,
  getInputObjectTypeDefinitionNodeMeta,
  getObjectTypeDefinitionNodeMeta,
  getScalarTypeDefinitionNodeMeta
} from '../codegen'
import { codegenEnumMeta } from '../codegen/enum-codegen'
import { codegenScalarMeta } from '../codegen/scalar-codegen'
import { GeneratorProps } from '../config/config'

export const generateTypescriptTypes = async ({ ast }: GeneratorProps) => {
  const definitions = unwrapDocument(ast)

  const objectTypesTypescript = definitions
    .filter(isObjectTypeDefinitionNode)
    .map(getObjectTypeDefinitionNodeMeta)
    .map(codegenObjectMetaToType)
    .join('\n\n')

  const inputObjectTypesTypescript = definitions
    .filter(isInputObjectTypeDefinitionNode)
    .map(getInputObjectTypeDefinitionNodeMeta)
    .map(codegenInputObjectMetaToType)
    .join('\n\n')

  const scalarTypesTypescript = definitions
    .filter(isScalarTypeDefinitionNode)
    .map(getScalarTypeDefinitionNodeMeta)
    .map(codegenScalarMeta)
    .join('\n\n')

  const enumTypesTypescript = definitions
    .filter(isEnumTypeDefinitionNode)
    .map(getEnumTypeDefinitionNodeMeta)
    .map(codegenEnumMeta)
    .join('\n\n')

  let result = ''

  result += `/* SCALAR TYPES */ \n\n`

  // TODO: Detect if it's declared or something
  result += `export type ID = string` + '\n\n'

  result += scalarTypesTypescript + '\n\n'

  result += `/* ENUM TYPES */ \n\n`

  result += enumTypesTypescript + '\n\n'

  result += `/* INPUT OBJECT TYPES */ \n\n`

  result += inputObjectTypesTypescript + '\n\n'

  result += `/* OBJECT TYPES */ \n\n`

  result += objectTypesTypescript + '\n\n'

  return result
}
