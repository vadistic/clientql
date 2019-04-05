import {
  GraphQLNamedType,
  TypeNode,
  Kind,
  FieldDefinitionNode,
  GraphQLSchema
} from 'graphql'
import changeCase from 'change-case'
import { unwrapTypeToNamedType } from './utils'
import { isFlatType } from './object-to-fragment'

export const getTypeClientName = (typename: string) =>
  changeCase.pascalCase(typename + ' Promise')

const isListNode = (node: TypeNode) =>
  node.kind === Kind.LIST_TYPE ||
  (node.kind === Kind.NON_NULL_TYPE && node.type.kind === Kind.LIST_TYPE)

const isNonNullNode = (node: TypeNode) =>
  node.kind === Kind.NON_NULL_TYPE ||
  (node.kind === Kind.LIST_TYPE && node.type.kind === Kind.NON_NULL_TYPE)

const hasArgs = (field: FieldDefinitionNode) =>
  field.arguments && field.arguments.length !== 0

const hasNonNullArgs = (field: FieldDefinitionNode) =>
  field.arguments &&
  field.arguments!.some(arg => arg.type.kind === Kind.NON_NULL_TYPE)

const fieldToTypescriptArguments = (
  type: GraphQLNamedType,
  field: FieldDefinitionNode
) => {
  const args = hasArgs(field)
  const required = hasNonNullArgs(field)

  /**
   * Used convention with gql-gen
   * __typename + propName + Args
   */
  const tsType =
    args && changeCase.pascalCase(type.name + ' ' + field.name.value + ' Args')

  const argsBody =
    '(' + (args ? 'args' + (required ? ': ' : '?: ') + tsType : '') + ')'

  return { argsBody, tsType }
}

const buildTSSimpleResult = (
  field: FieldDefinitionNode,
  fieldTarget: GraphQLNamedType
) => {
  const isList = isListNode(field.type)
  const isNonNull = isNonNullNode(field.type)

  let base: string = fieldTarget.name
  let brackets: boolean = false

  switch (fieldTarget.name) {
    case 'String':
      base = 'string'
      break
    case 'Boolean':
      base = 'boolean'
      break
    case 'Int':
    case 'Float':
    case 'Long':
      base = 'number'
      break
    default:
      brackets = true
  }

  const buildPromise = (val: string) => `Promise<${val}>`
  const buildNonNull = (is: boolean, val: string) =>
    is ? val : `Maybe<${val}>`
  const buildList = (is: boolean, brackets: boolean, val: string) =>
    is ? (brackets ? `Array<${val}>` : `${val}[]`) : val

  return buildPromise(
    buildNonNull(isNonNull, buildList(isList, brackets, base))
  )
}

export interface ClientStrings {
  graphqlDeps: string[]
  tsDeps: string[]
  fields: string[]
  typename: string
}

export const objectTypeToClientStrings = (
  schema: GraphQLSchema,
  typename: string
): null | ClientStrings => {
  const type = schema.getType(typename)

  if (!type || !type.astNode) {
    return null
  }

  if (type.astNode.kind !== Kind.OBJECT_TYPE_DEFINITION) {
    return null
  }

  if (!type.astNode.fields || type.astNode.fields.length === 0) {
    return null
  }

  // TODO: refactor this as fn
  const typeClientFields = type.astNode.fields.map(field => {
    const fieldType = unwrapTypeToNamedType(field.type)
    const fieldTarget = schema.getType(fieldType.name.value)!

    const isList = isListNode(field.type)
    const isFlat = isFlatType(fieldTarget)

    const isReferenced = !(isFlat || isList)
    const { argsBody, tsType } = fieldToTypescriptArguments(type, field)
    // whether pointes to SomeTypePromise

    const result = isReferenced
      ? getTypeClientName(fieldTarget.name)
      : buildTSSimpleResult(field, fieldTarget)

    return {
      field: `${field.name.value}: ${argsBody} => ${result}`,
      tsDeps: tsType ? [tsType] : [],
      graphqlDeps: isReferenced ? [fieldTarget.name] : []
    }
  })

  const result = typeClientFields.reduce(
    (acc, { field, graphqlDeps, tsDeps }) => ({
      typename: acc.typename,
      tsDeps: acc.tsDeps.concat(tsDeps),
      fields: acc.fields.concat(field),
      graphqlDeps: acc.graphqlDeps.concat(graphqlDeps)
    }),
    {
      typename,
      tsDeps: [],
      graphqlDeps: [],
      fields: []
    } as ClientStrings
  )

  return result
}
