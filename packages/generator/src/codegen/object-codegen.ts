import { isNotEmpty } from '@graphql-clientgen/shared'
import { codegenFieldMetaToType } from './field-codegen'
import { ObjectTypeDefinitionNodeMeta } from './object-meta'

/**
 * codegen to TYPE => as response shape, not as functions
 */
export const codegenObjectMetaToType = ({
  typename,
  interfaces,
  fields
}: ObjectTypeDefinitionNodeMeta) => {
  // here can go any name transformation like interface prefix
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
