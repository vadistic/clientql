import { codegen, printCodeSection } from '@clientql/codegen'
import {
  truthy,
  TypescriptString,
  unwrapDocument,
} from '@clientql/core'
import { DefinitionNode } from 'graphql'
import { GeneratorConfig } from '../config'
import { GeneratorProps } from '../generator'
import { printYadaYada } from '../print'
import { groupDefinitionsByKind } from '../utils'

/*
 * generate standard type definitions
 */

export const printClientTypes = (props: GeneratorProps): TypescriptString => {
  // make sure defs will be printed as plain object interfaces
  const configOverrides: Partial<GeneratorConfig> = {
    addFieldAsFunction: false,
  }

  const print = codegen({
    ...props,
    config: { ...props.config, ...configOverrides },
  })

  const groups = groupDefinitionsByKind(unwrapDocument(props.doc))

  const typesTs = Object.entries(groups)
    .map(
      ([kind, nodes]) =>
        nodes &&
        printCodeSection(
          kind + ' Typings',
          (nodes as DefinitionNode[]).map(print).join('\n\n'),
        ),
    )
    .filter(truthy)
    .join('\n\n')

  const resultTs = printYadaYada() + '\n\n' + typesTs + '\n\n'

  return resultTs
}
