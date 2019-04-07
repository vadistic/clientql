import { isNotEmpty } from '@graphql-clientgen/shared'
import { isObjectType } from 'graphql'
import {
  codegenFieldMetaToCustomFunction,
  ObjectTypeDefinitionNodeMeta,
  TransformFieldFunctionReturn
} from '../codegen'
import { GeneratorProps } from '../config'

const transformReturnFn = ({
  schema,
  naming
}: GeneratorProps): TransformFieldFunctionReturn => (body, typeMeta) => {
  const isTargetObjectType = isObjectType(schema.getType(typeMeta.typename))

  let result = `Promise<${body}>`

  if (isTargetObjectType) {
    result = `${result} & ${naming.getClientName(typeMeta.typename)}`
  }

  return result
}

export const codegenObjectMetaToClient = (props: GeneratorProps) => ({
  typename,
  fields
}: ObjectTypeDefinitionNodeMeta) => {
  const name = props.naming.getClientName(typename)

  let result = ''

  result += `export interface ${name} {\n`

  const fieldsTs =
    isNotEmpty(fields) &&
    fields.map(fieldMeta =>
      codegenFieldMetaToCustomFunction(fieldMeta, transformReturnFn(props))
    )

  if (fieldsTs) {
    result += '  ' + fieldsTs.join('\n  ')
  }

  result += '\n}'

  return result
}
