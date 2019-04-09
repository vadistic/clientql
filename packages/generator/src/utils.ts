import { isObjectTypeDefinitionNode } from '@graphql-clientgen/core'
import { DefinitionNode, ObjectTypeDefinitionNode } from 'graphql'

/**
 * Refactores since it really repetitive.
 * I could, and probably will use my ast map for this but let's keep it simple
 */
export const reduceObjectTypeDefinitions = (definitions: DefinitionNode[]) =>
  definitions.filter(isObjectTypeDefinitionNode).reduce(
    (acc, node) => {
      if (['Query', 'Mutation', 'Subscription'].includes(node.name.value)) {
        acc.rootTypes.push(node)
      } else {
        acc.objectTypes.push(node)
      }

      return acc
    },
    {
      rootTypes: [] as ObjectTypeDefinitionNode[],
      objectTypes: [] as ObjectTypeDefinitionNode[],
    },
  )
