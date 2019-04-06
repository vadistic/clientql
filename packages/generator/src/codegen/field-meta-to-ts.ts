import {
  FieldDefinitionNodeMeta,
  InputValueDefinitionNodeMeta,
  isNotEmpty,
  isNullable,
  TypeNodeMeta
} from '@graphql-clientgen/shared'
import { codegenTypeMeta } from './type-meta-to-ts'

/**
 *  Build simple type ingoring field arguments
 */

export const codegenFieldMetaToType = (fieldMeta: FieldDefinitionNodeMeta) => {
  const type = codegenTypeMeta(fieldMeta.type)
  const nullable = isNullable(fieldMeta.type)

  return fieldMeta.fieldname + (nullable ? '?: ' : ': ') + type
}

/**
 * codegenFieldMetaToTypes works just about the same but let's keep this one for semantics
 */
export const codegenInputValueMeta = (
  inputValueMeta: InputValueDefinitionNodeMeta
) => {
  let result = inputValueMeta.fieldname

  result += isNullable(inputValueMeta.type) ? '?: ' : ': '

  // using 1:1 orignal type names
  result += codegenTypeMeta(inputValueMeta.type)

  return result
}

/**
 *  Build field arguments
 */

const codegenFieldMetaArguments = (fieldMeta: FieldDefinitionNodeMeta) => {
  if (!isNotEmpty(fieldMeta.arguments)) {
    return `()`
  }

  // print inline
  if (fieldMeta.arguments.length === 1) {
    return '(' + codegenInputValueMeta(fieldMeta.arguments[0]) + ')'
  }

  // print not inline^^
  return (
    '(\n' + fieldMeta.arguments.map(codegenInputValueMeta).join('\n') + '\n)'
  )
}

/**
 *  Build field typescript as function of args
 */

export const codegenFieldMetaToFunction = (
  fieldMeta: FieldDefinitionNodeMeta
) => {
  const args = codegenFieldMetaArguments(fieldMeta)
  const type = codegenTypeMeta(fieldMeta.type)

  const returns = type

  return fieldMeta.fieldname + ': ' + args + ' => ' + returns
}

// to allow custom return types, separate for cleaner use of previous fn with map
export type TransformFieldFunctionReturn = (
  body: string,
  typeMeta: TypeNodeMeta
) => string

/**
 *  Build field typescript as function of args with custom transform on RetunType
 */

export const codegenFieldMetaToCustomFunction = (
  fieldMeta: FieldDefinitionNodeMeta,
  transformReturn?: TransformFieldFunctionReturn
) => {
  const args = codegenFieldMetaArguments(fieldMeta)
  const type = codegenTypeMeta(fieldMeta.type)

  const returns = transformReturn ? transformReturn(type, fieldMeta.type) : type

  return fieldMeta.fieldname + ': ' + args + ' => ' + returns
}
