import { isNotEmpty } from '@graphql-clientgen/core'
import { InputObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { codegenInputValue } from './input-value'

export const codegenInputObject = (props: GeneratorProps) => (
  node: InputObjectTypeDefinitionNode
) => {
  const name = props.naming.getInterfaceName(node.name.value)

  let result = ''

  result += `export interface ${name}`

  const fieldsTs =
    isNotEmpty(node.fields) && node.fields.map(codegenInputValue(props))

  result += ' {\n'

  if (fieldsTs) {
    // probably I should automate this formatting
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}
