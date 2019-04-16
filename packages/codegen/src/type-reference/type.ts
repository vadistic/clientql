import {
  TypeModifier,
  TypescriptString,
  unwrapType,
} from '@graphql-clientgen/core'
import { Kind, TypeNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { CodegenConfig } from '../config'
import { printNamedType } from './named-type'

/**
 * prints nullable/list/scalar etc. TypeNode
 */

export const printType = (props: CodegenProps) => (
  node: TypeNode,
): TypescriptString => {
  const { modifiers, type } = unwrapType(node)

  return printTypeModifiers(props.config)(
    printNamedType(props)(type),
    modifiers,
  )
}

/**
 * apply type modifies from modifiers array to provided string
 *
 * config to support
 *  - `useMaybeType`
 */
export const printTypeModifiers = (config: CodegenConfig) => (
  content: TypescriptString,
  modifiers: TypeModifier[],
  useSimpleArray = true,
): TypescriptString => {
  const addMaybe = (value: string) =>
    config.useMaybeType ? `Maybe<${value}>` : `${value} | null`
  const addArray = (value: string) => `Array<${value}>`

  let resultTs = content
  // wherher arrays should be added as []
  let useSimpleArrFlag = useSimpleArray

  if (modifiers && modifiers.length !== 0) {
    modifiers
      // reverse is mutable!
      .slice()
      // needs reverse for correct order
      .reverse()
      .forEach((modifier, i, arr) => {
        const prevModifier = i >= 1 && arr[i - 1]

        if (modifier === Kind.LIST_TYPE) {
          if (useSimpleArrFlag && prevModifier === Kind.NON_NULL_TYPE) {
            resultTs = `${resultTs}[]`
            return
          }

          if (useSimpleArrFlag && prevModifier !== Kind.NON_NULL_TYPE) {
            useSimpleArrFlag = false
            resultTs = addArray(addMaybe(resultTs))
            return
          }

          if (!useSimpleArrFlag && prevModifier === Kind.NON_NULL_TYPE) {
            resultTs = addArray(resultTs)
            return
          }
        }
      })
  }

  // apply wrapping null modifier if top level is not non-nullable
  if (modifiers[0] !== Kind.NON_NULL_TYPE) {
    resultTs = addMaybe(resultTs)
  }

  return resultTs
}
