import {
  GraphQLSchema,
  Kind,
  ListTypeNode,
  NamedTypeNode,
  TypeNode,
} from 'graphql'
import { defaultConfig } from '../config'
import { unwrapType } from '../utils'
import { isExplicitScalar, printNamedType } from './named-type'

/**
 * Means top level value is nullable (need it for printing optional modifiers)
 */
export const isNullable = (
  node: TypeNode,
): node is ListTypeNode | NamedTypeNode => node.kind !== Kind.NON_NULL_TYPE

/**
 * Prints nullable/list/scalar TypeNode
 */

export const printType = (config = defaultConfig, schema?: GraphQLSchema) => (
  node: TypeNode,
) => {
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

        if (modifier === 'list') {
          if (useSimpleArrFlag && prevModifier === 'nonNull') {
            result = `${result}[]`
            return
          }

          if (useSimpleArrFlag && prevModifier !== 'nonNull') {
            useSimpleArrFlag = false
            result = addArray(addMaybe(result))
            return
          }

          if (!useSimpleArrFlag && prevModifier === 'nonNull') {
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
