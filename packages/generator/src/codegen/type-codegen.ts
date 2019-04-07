import { isNullable, TypeNodeMeta } from './type-meta'

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

export const isExplicitScalar = (typeMeta: TypeNodeMeta) =>
  mapScalarNameToTypescript(typeMeta.typename) !== typeMeta.typename

export const codegenTypeMeta = (typeMeta: TypeNodeMeta) => {
  const scalar = isExplicitScalar(typeMeta)
  const typename = scalar
    ? mapScalarNameToTypescript(typeMeta.typename)
    : typeMeta.typename

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

  let result = typename

  // apply list modifiers
  if (typeMeta.modifiers && typeMeta.modifiers.length !== 0) {
    typeMeta.modifiers
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
  if (isNullable(typeMeta)) {
    result = `${result} | null`
  }

  return result
}
