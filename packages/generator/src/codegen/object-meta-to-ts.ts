import {
  InputObjectTypeDefinitionNodeMeta,
  isNotEmpty,
  ObjectTypeDefinitionNodeMeta
} from '@graphql-clientgen/shared'
import { codegenFieldMetaToType } from './field-meta-to-ts'
import { codegenInputValueMeta } from './input-value-meta-to-ts'

export const codegenObjectMetaToType = ({
  typename,
  interfaces,
  fields
}: ObjectTypeDefinitionNodeMeta) => {
  // here will go any name transformation like interface prefix
  const name = typename

  let result = ''

  result += `export interface ${name}`

  if (isNotEmpty(interfaces)) {
    result += ` extends ${interfaces.join(', ')}`
  }

  result += ' {\n'

  const fieldsTs = isNotEmpty(fields) && fields.map(codegenFieldMetaToType)

  if (fieldsTs) {
    // probably I should automate this formatting
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}

export const codegenInputObjectMetaToType = ({
  typename,
  fields
}: InputObjectTypeDefinitionNodeMeta) => {
  // here will go any name transformation like interface prefix
  const name = typename

  let result = ''

  result += `export interface ${name}`

  const fieldsTs = isNotEmpty(fields) && fields.map(codegenInputValueMeta)

  result += ' {\n'

  if (fieldsTs) {
    // probably I should automate this formatting
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}
