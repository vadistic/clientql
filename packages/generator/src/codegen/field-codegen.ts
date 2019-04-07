import { isNotEmpty } from '@graphql-clientgen/shared'
import { areArgsNullable, FieldDefinitionNodeMeta } from './field-meta'
import { indent } from './indent'
import { codegenInputValueMeta } from './input-value-codegen'
import { codegenTypeMeta } from './type-codegen'
import { isNullable, TypeNodeMeta } from './type-meta'

/*
 * Single argument could be lifter to be in non-parametric fashion
 * TODO: Add to some sort of config
 */

const LIFT_SINGLE_ARGUMENT = true

/**
 *  Build simple type ingoring field arguments
 */

export const codegenFieldMetaToType = (fieldMeta: FieldDefinitionNodeMeta) => {
  const type = codegenTypeMeta(fieldMeta.type)
  const nullable = isNullable(fieldMeta.type)

  return fieldMeta.fieldname + (nullable ? '?: ' : ': ') + type
}

/**
 *  Build field arguments
 */

const codegenFieldMetaArguments = (fieldMeta: FieldDefinitionNodeMeta) => {
  if (!isNotEmpty(fieldMeta.arguments)) {
    return `()`
  }

  // print inline
  if (LIFT_SINGLE_ARGUMENT && fieldMeta.arguments.length === 1) {
    return '(' + codegenInputValueMeta(fieldMeta.arguments[0]) + ')'
  }

  let result = '(args'
  result += areArgsNullable(fieldMeta) ? '?: ' : ': '
  result += '{' + '\n'

  fieldMeta.arguments.forEach(inputValueMeta => {
    result += '    ' + indent(codegenInputValueMeta(inputValueMeta), 2) + '\n'
  })

  result += '  })'

  return result
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
