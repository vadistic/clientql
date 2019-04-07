import { isNotEmpty } from '@graphql-clientgen/shared'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../config'
import { codegenFieldToType } from './field'

/**
 * codegen to TYPE => as response shape, not as functions
 */
export const codegenObjectToType = (props: GeneratorProps) => (
  node: ObjectTypeDefinitionNode
) => {
  const { interfaces, fields } = node
  const name = props.naming.getTsInterfaceName(node.name.value)

  let result = ''

  result += `export interface ${name}`

  if (isNotEmpty(interfaces)) {
    result += ` extends ${interfaces.map(v => v.name.value).join(', ')}`
  }

  result += ' {\n'

  const fieldsTs = isNotEmpty(fields) && fields.map(codegenFieldToType(props))

  if (fieldsTs) {
    // probably I should automate this formatting
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}
