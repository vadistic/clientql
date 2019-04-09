import {
  FragmentType,
  isObjectTypeDefinitionNode,
  isRootTypeDefinitionNode,
  truthy,
} from '@graphql-clientgen/core'
import { codegenGraphqlFragment } from '../codegen-graphql'
import { GeneratorProps } from '../generator'

export const generateGraphqlFragments = (props: GeneratorProps) => {
  const objectTypes = props.doc.definitions
    .filter(isObjectTypeDefinitionNode)
    .filter(
      el => isObjectTypeDefinitionNode(el) && !isRootTypeDefinitionNode(el),
    )

  const flatFragments = objectTypes
    .map(codegenGraphqlFragment(props, FragmentType.FLAT))
    .filter(truthy)

  const deepFragments = objectTypes
    .map(codegenGraphqlFragment(props, FragmentType.DEEP))
    .filter(truthy)

  const defaultFragments = objectTypes
    .map(codegenGraphqlFragment(props, FragmentType.DEFAULT))
    .filter(truthy)

  const fragments = [flatFragments, defaultFragments, deepFragments].flat(1)

  return {
    fragments,
    flatFragments,
    deepFragments,
    defaultFragments,
  }
}
