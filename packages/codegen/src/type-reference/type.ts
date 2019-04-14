import { isNullable, unwrapType } from '@graphql-clientgen/core'
import { GraphQLSchema, Kind, TypeNode } from 'graphql'
import { defaultCodegenConfig } from '../config'
import { isExplicitScalar, printNamedType } from './named-type'

/**
 * Prints nullable/list/scalar TypeNode
 */

export const printType = (
  config = defaultCodegenConfig,
  schema?: GraphQLSchema,
) => (node: TypeNode) => {
  const { modifiers, typename, type } = unwrapType(node)
  const explicitScalar = isExplicitScalar(typename)

  let result = printNamedType(config, schema)(type)

  const addMaybe = (value: string) =>
    config.useMaybeType ? `Maybe<${value}>` : `${value} | null`

  const addArray = (value: string) => `Array<${value}>`

  // apply list pf modifiers
  if (modifiers && modifiers.length !== 0) {
    // wherher arrays should be added as []
    let useSimpleArrFlag = explicitScalar

    modifiers
      // reverse is mutable!
      .slice()
      // needs reverse for correct order
      .reverse()
      .forEach((modifier, i, arr) => {
        const prevModifier = i >= 1 && arr[i - 1]

        if (modifier === Kind.LIST_TYPE) {
          if (useSimpleArrFlag && prevModifier === Kind.NON_NULL_TYPE) {
            result = `${result}[]`
            return
          }

          if (useSimpleArrFlag && prevModifier !== Kind.NON_NULL_TYPE) {
            useSimpleArrFlag = false
            result = addArray(addMaybe(result))
            return
          }

          if (!useSimpleArrFlag && prevModifier === Kind.NON_NULL_TYPE) {
            result = addArray(result)
            return
          }
        }
      })
  }

  // apply wrapping null modifier
  if (isNullable(node)) {
    result = addMaybe(result)
  }

  return result
}
