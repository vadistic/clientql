import { GeneratorProps } from '../generator'
import { resolvePossibleTargets } from '../utils'
import { printClientBoilerplate } from './boilerplate'
import { printClientInterfaces } from './interfaces'
import { printClientsResponses } from './responses'
import { printClientTypedefs } from './typedefs'
import { printClientTypes } from './types'

/**
 * generate client lib
 *
 * moving parts:
 * - `client-typedefs` => filtered runtime typedefs
 * - `client-interfaces` => client proxy typings
 * - `client-types` => standard typescript codegen of all types
 * - `client-responses` => possible operation results and their fragments
 * - `client-boilerplate` => typed client factory
 */

export const generateClient = async (props: GeneratorProps) => {
  const targets = resolvePossibleTargets(props)

  const index = printClientBoilerplate(props)
  const typedefs = printClientTypedefs(props)
  const types = printClientTypes(props)
  const responses = printClientsResponses(props)(targets)
  const clients = printClientInterfaces(props)(targets)

  return {
    index,
    typedefs,
    types,
    responses,
    clients,
  }
}
