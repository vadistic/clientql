import { buildTypemap, isNullable, Typename } from '@graphql-clientgen/shared'
import { TypeNode } from 'graphql'
import { GeneratorProps } from '../config'

const mapScalarNameToTypescript = (typename: string) => {
  switch (typename) {
    case 'String':
      return 'string'
    case 'Boolean':
      return 'boolean'
    case 'Int':
    case 'Long':
    case 'Float':
      return 'number'
    default:
      return typename
  }
}

export const isExplicitScalar = (typename: Typename) =>
  mapScalarNameToTypescript(typename) !== typename

export const codegenType = (props: GeneratorProps) => (node: TypeNode) => {
  const { modifiers, typename } = buildTypemap(node)

  const scalar = isExplicitScalar(typename)
  const name = scalar ? mapScalarNameToTypescript(typename) : typename

  /**
   *  That's the conversion
   *
   * [String!]!  => [ 'nonNull', 'list', 'nonNull' ] => string[]
   * [String!]   => [ 'list', 'nonNull' ]            => string[] | null
   * [String]!   => [ 'nonNull', 'list' ]            => (string | null)[]
   * [String]    => [ 'list' ]                       => (string | null)[] | null
   * String      => []                               => string | null
   * String!     => ['nonNull']                      => string
   *
   */

  let result = name

  // apply list modifiers
  if (modifiers && modifiers.length !== 0) {
    modifiers
      // reverse is mutable!
      .slice()
      // needs reverse for correct order
      .reverse()
      .forEach((modifier, i, arr) => {
        const prevModifier = i >= 1 && arr[i - 1]
        if (modifier === 'list') {
          if (scalar && prevModifier === 'nonNull') {
            result = `${result}[]`
            return
          }

          if (scalar && prevModifier !== 'nonNull') {
            result = `(${result} | null)[]`
            return
          }

          if (!scalar && prevModifier === 'nonNull') {
            result = `Array<${result}>`
            return
          }

          if (!scalar && prevModifier !== 'nonNull') {
            result = `Array<${result} | null>`
            return
          }
        }
      })
  }

  // apply wrapping null modifier
  if (isNullable(node)) {
    result = `${result} | null`
  }

  return result
}
