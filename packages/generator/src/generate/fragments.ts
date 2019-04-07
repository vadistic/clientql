import {
  FragmentType,
  isObjectTypeDefinitionNode,
  isRootTypeDefinitionNode,
  nonNull
} from '@graphql-clientgen/shared'
import { GeneratorProps } from '../config/config'
import { objectTypeToFragment } from '../fragment'

export const generateFragments = (props: GeneratorProps) => {
  const objectTypes = props.ast.definitions
    .filter(isObjectTypeDefinitionNode)
    .filter(
      el => isObjectTypeDefinitionNode(el) && !isRootTypeDefinitionNode(el)
    )

  const flatFragments = objectTypes
    .map(objectTypeToFragment(props, FragmentType.FLAT))
    .filter(nonNull)

  const deepFragments = objectTypes
    .map(objectTypeToFragment(props, FragmentType.DEEP))
    .filter(nonNull)

  const defaultFragments = objectTypes
    .map(objectTypeToFragment(props, FragmentType.DEFAULT))
    .filter(nonNull)

  const fragments = [flatFragments, defaultFragments, deepFragments].flat(1)

  return {
    fragments,
    flatFragments,
    deepFragments,
    defaultFragments
  }
}
