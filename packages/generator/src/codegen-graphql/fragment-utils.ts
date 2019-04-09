import { ExecutableDefinitionNode, visit } from 'graphql'

/**
 * List Fragments used in fragment fields spreads
 */

export const getFragmentDependencies = (node: ExecutableDefinitionNode) => {
  const dependencies: string[] = []

  visit(node, {
    FragmentSpread: (fragment, index) => {
      dependencies.push(fragment.name.value)
    },
  })

  return dependencies
}
