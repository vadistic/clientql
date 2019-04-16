import { codegen, printCodeSection } from '@graphql-clientgen/codegen'
import { truthy, unwrapDocument } from '@graphql-clientgen/core'
import { DefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { groupDefinitionsByKind } from '../utils'

/**
 * this generate types for schema definition nodes
 */
export const generateTsTypes = async (props: GeneratorProps) => {
  const print = codegen(props)
  const groups = groupDefinitionsByKind(unwrapDocument(props.doc))

  const typesTs = Object.entries(groups)
    .map(
      ([kind, nodes]) =>
        nodes &&
        printCodeSection(
          kind + 'Typings',
          (nodes as DefinitionNode[]).map(print).join('\n\n'),
        ),
    )
    .filter(truthy)
    .join('\n\n')

  return typesTs
}
