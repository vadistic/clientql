import { codegen, printCodeSection } from '@clientql/codegen'
import { truthy, unwrapDocument } from '@clientql/core'
import { DefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { groupDefinitionsByKind } from '../utils'

/**
 * this generate types for schema definition nodes
 */
export const generateDefinitions = async (props: GeneratorProps) => {
  const print = codegen(props)
  const groups = groupDefinitionsByKind(unwrapDocument(props.doc))

  const typesTs = Object.entries(groups)
    .map(
      ([kind, nodes]) =>
        nodes &&
        printCodeSection(kind + 'Typings', (nodes as DefinitionNode[]).map(print).join('\n\n')),
    )
    .filter(truthy)
    .join('\n\n')

  return typesTs
}
