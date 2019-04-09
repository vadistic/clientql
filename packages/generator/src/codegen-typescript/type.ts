import { buildTypemap, isNullable, Typename } from '@graphql-clientgen/core'
import { Kind, NamedTypeNode, TypeNode } from 'graphql'
import { GeneratorProps } from '../generator'

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

/**
 * the thing is that type value needs to match renamed interface
 * I need to know  target type, but it can be input value/interface scalar etc...
 *
 * As some stupid design decision I want to avoid using graphql schema.& array searches...
 * TODO: improve it - probably add input to my astMap
 */
export const isReferencedType = (props: GeneratorProps) => (
  typename: Typename,
) => {
  const node = props.doc.definitions.find(
    el => 'name' in el && !!el.name && el.name.value === typename,
  )

  if (!node) {
    return false
  }

  switch (node.kind) {
    // only those possibly can get prefix
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_EXTENSION:
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_EXTENSION:
    // !!! I'm prefixing unions
    case Kind.UNION_TYPE_DEFINITION:
    case Kind.UNION_TYPE_EXTENSION:
      return true
    default:
      return false
  }
}

/**
 * get only normalised type name without arr/null modifiers
 */
export const codegenTsTypeName = (props: GeneratorProps) => (
  node: NamedTypeNode,
) => {
  const typename = node.name.value
  const explicitScalar = isExplicitScalar(typename)
  const referencedType = isReferencedType(props)(typename)

  const name = referencedType
    ? props.naming.getInterfaceName(typename)
    : explicitScalar
    ? mapScalarNameToTypescript(typename)
    : typename

  return name
}

export const codegenTsType = (props: GeneratorProps) => (node: TypeNode) => {
  const { modifiers, typename, type } = buildTypemap(node)
  const explicitScalar = isExplicitScalar(typename)

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

  let result = codegenTsTypeName(props)(type)

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
          if (explicitScalar && prevModifier === 'nonNull') {
            result = `${result}[]`
            return
          }

          if (explicitScalar && prevModifier !== 'nonNull') {
            result = `(${result} | null)[]`
            return
          }

          if (!explicitScalar && prevModifier === 'nonNull') {
            result = `Array<${result}>`
            return
          }

          if (!explicitScalar && prevModifier !== 'nonNull') {
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
