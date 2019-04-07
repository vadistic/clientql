import { isNotEmpty } from '@graphql-clientgen/shared'
import { InputObjectTypeDefinitionNodeMeta } from './input-object-meta'
import { codegenInputValueMeta } from './input-value-codegen'

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
