import {
  Graph,
  GraphVertex,
  indent,
  isNullable,
  Typename,
} from '@graphql-clientgen/core'
import { GraphQLSchema, Kind, SelectionNode, SelectionSetNode } from 'graphql'
import { CodegenConfig } from '../config'
import { printType } from '../type-reference'

export interface ExecutionCodegenProps {
  graph: Graph
  schema: GraphQLSchema
  config: CodegenConfig
}

export const printSelectionSet = (props: ExecutionCodegenProps) => (
  parent: Typename,
  set: SelectionSetNode,
  skipTopBrackets = false,
) => {
  const vtx = props.graph.get(parent)

  // weird
  if (!vtx) {
    throw Error(`Missing parent node ${parent}`)
  }

  // intersection for each fragment spread
  const fragments: string[] = []
  // Union for each inline spread
  const unions: string[] = []
  // own selection lines (for fields)
  const lines: string[] = []

  for (const node of set.selections) {
    /*
     * Field => vtx is object or interface
     */
    if (node.kind === Kind.FIELD && !node.selectionSet) {
      const field = vtx.weightsMap!.get(node.name.value)!

      const modifier =
        isNullable(field.type) && props.config.useOptionalModifier
          ? '?: '
          : ': '

      const fieldTs =
        field.name.value +
        modifier +
        printType(props.config, props.schema)(field.type)

      lines.push(fieldTs)
      continue
    }

    if (node.kind === Kind.FIELD && node.selectionSet) {
      const child = vtx.edgesMap!.get(node.name.value)
      const field = vtx.weightsMap!.get(node.name.value)

      if (!field || !child) {
        throw Error(`Missing node for field ${node.name.value} on ${parent}`)
      }

      const nested = printSelectionSet(props)(child, node.selectionSet)

      const modifier =
        isNullable(field.type) && props.config.useOptionalModifier
          ? '?: '
          : ': '

      const fieldTs = field.name.value + modifier + nested

      lines.push(fieldTs)
      continue
    }

    if (node.kind === Kind.FRAGMENT_SPREAD) {
      fragments.push(node.name.value)
    }

    if (node.kind === Kind.INLINE_FRAGMENT) {
      if (!node.typeCondition) {
        throw Error(`Missing typeCondition for inline spread on ${parent}`)
      }

      const nested = printSelectionSet(props)(
        node.typeCondition.name.value,
        node.selectionSet,
      )

      unions.push(nested)
    }
  }

  let result = ''

  if (lines.length !== 0) {
    result = skipTopBrackets ? '' : '{\n'
    result += indent(lines.join('\n'), 1)
    result += skipTopBrackets ? '' : '\n}'
  }

  if (fragments.length !== 0) {
    result = [...fragments, ...(!!result ? [result] : [])].join(' & ')
  }

  if (unions.length === 1) {
    result += ' & ' + unions[0]
  }

  if (unions.length > 1) {
    result += ' & (' + unions.join(' | ') + ')'
  }

  return result
}
