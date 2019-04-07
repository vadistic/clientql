import {
  InputValueDefinitionNodeMeta,
  isNullable
} from '@graphql-clientgen/shared'
import { codegenTypeMeta } from './type-codegen'

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
