import {
  isObjectTypeDefinitionNode,
  isRootTypeDefinitionNode,
  nonNull
} from '@graphql-clientgen/shared'
import { DocumentNode, GraphQLObjectType, GraphQLSchema, Kind } from 'graphql'
import { GeneratorProps } from '../config/config'
import {
  FragmentType,
  objectTypeToFragment
} from '../fragment/object-to-fragment'

export const generateFragments = ({ ast, schema }: GeneratorProps) => {
  const objectTypes = ast.definitions
    .filter(isObjectTypeDefinitionNode)
    .filter(
      el => isObjectTypeDefinitionNode(el) && !isRootTypeDefinitionNode(el)
    )

  const flatFragments = objectTypes
    .map(objectTypeToFragment(schema, FragmentType.FLAT))
    .filter(nonNull)

  const deepFragments = objectTypes
    .map(objectTypeToFragment(schema, FragmentType.DEEP))
    .filter(nonNull)

  const defaultFragments = objectTypes
    .map(objectTypeToFragment(schema, FragmentType.DEFAULT))
    .filter(nonNull)

  const fragments = [flatFragments, defaultFragments, deepFragments].flat(1)

  return {
    fragments,
    flatFragments,
    deepFragments,
    defaultFragments
  }
}
