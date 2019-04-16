import { codegen, printCodeSection } from '@graphql-clientgen/codegen'
import { truthy, unwrapDocument } from '@graphql-clientgen/core'
import { DefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { groupDefinitionsByKind } from '../utils'

export const generateTypingsDefinitions = async (props: GeneratorProps) => {
  const print = codegen(props)
  const groups = groupDefinitionsByKind(unwrapDocument(props.doc))

  const resultTs = Object.entries(groups)
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

  return resultTs
}
