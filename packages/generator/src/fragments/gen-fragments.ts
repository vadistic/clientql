import { nonNull } from '@graphql-clientgen/shared'
import { GraphQLObjectType, GraphQLSchema, Kind } from 'graphql'
import { FragmentType, objectTypeToFragment } from './object-to-fragment'

export const generateFragments = (schema: GraphQLSchema) => {
  const objectTypes = Object.keys(schema.getTypeMap())
    .map(name => schema.getType(name))
    .filter(
      (type): type is GraphQLObjectType => {
        if (!type || !type.astNode) {
          return false
        }

        if (
          type.name === 'Query' ||
          type.name === 'Mutation' ||
          type.name === 'Subscription'
        ) {
          return false
        }

        return type.astNode.kind === Kind.OBJECT_TYPE_DEFINITION
      }
    )

  const flatFragments = objectTypes
    .map(type => objectTypeToFragment(schema, type.astNode!, FragmentType.FLAT))
    .filter(nonNull)

  const deepFragments = objectTypes
    .map(type => objectTypeToFragment(schema, type.astNode!, FragmentType.DEEP))
    .filter(nonNull)

  const defaultFragments = objectTypes
    .map(type =>
      objectTypeToFragment(schema, type.astNode!, FragmentType.DEFAULT)
    )
    .filter(nonNull)

  const fragments = [flatFragments, defaultFragments, deepFragments].flat(1)

  return {
    fragments,
    flatFragments,
    deepFragments,
    defaultFragments
  }
}
