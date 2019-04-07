import { isNotEmpty } from '@graphql-clientgen/shared'
import { InputObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../config'
import { codegenInputValue } from './input-value'

export const codegenInputObject = (props: GeneratorProps) => (
  node: InputObjectTypeDefinitionNode
) => {
  // here will go any name transformation like interface prefix
  const name = props.naming.getTsInterfaceName(node.name.value)

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
