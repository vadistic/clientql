import {
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
} from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { traverseGraph } from '../traverse'
import { printClientInterfaces } from './client-interfaces'
import { printClientsResults } from './client-results'

/**
 * generate client lib
 *
 * moving parts:
 * - `client-typedefs` => filtered runtime typedefs
 * - `client-interfaces` => client proxy typings
 *     imports:
 *      - all client results
 *      - definitions: scalars & input types
 * - `client-definitions` => standard typescript codegen of all types
 * - `client-results` => possible operation results and their fragments
 *      - definitions: scalars
 * - `client-boilerplate` => typed client factory
 *      - root client interfaces
 */

export const generateClient = (props: GeneratorProps) => {
  const targets = resolvePossibleClients(props)

  const { fragmentsTs, resultsTs } = printClientsResults(props)(targets)

  const { clientsTs, rootClientsTs } = printClientInterfaces(props)(targets)

  return clientsTs + '\n\n' + resultsTs
}

/**
 * find possible results of the operations
 */

const resolvePossibleClients = (props: GeneratorProps) => {
  const targets = new Set<string>()

  traverseGraph(props)((vtx, stack) => {
    // no roots
    if (stack.length === 1) {
      return
    }

    if (
      isObjectTypeDefinitionNode(vtx.value) ||
      isInterfaceTypeDefinitonNode(vtx.value) ||
      isUnionTypeDefinitionNode(vtx.value)
    ) {
      targets.add(vtx.name)
    }
  })

  return targets
}
