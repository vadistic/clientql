import { buildTypemap, isNotEmpty } from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { codegenFieldToFunction, TransformFieldType } from './field'

const transformTypeFn = (props: GeneratorProps): TransformFieldType => ({
  field,
  body
}) => {
  const { typename } = buildTypemap(field.type)
  const isObjectType = !!props.astMap.types[typename]

  let result = `Promise<${body}>`

  if (isObjectType) {
    result = `${result} & ${props.naming.getClientName(typename)}`
  }

  return result
}

export const codegenObjectToClient = (props: GeneratorProps) => (
  node: ObjectTypeDefinitionNode
) => {
  const name = props.naming.getClientName(node.name.value)

  let result = ''

  result += `export interface ${name} {\n`

  const fieldsTs =
    isNotEmpty(node.fields) &&
    node.fields.map(
      codegenFieldToFunction(props, { transformType: transformTypeFn(props) })
    )

  if (fieldsTs) {
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}
