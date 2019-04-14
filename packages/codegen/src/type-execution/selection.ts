import { indent, isNullable, Typename } from '@graphql-clientgen/core'
import { Kind, SelectionSetNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printType } from '../type-reference'

export const printSelectionSet = (props: CodegenProps) => (
  parent: Typename,
  set: SelectionSetNode,
  skipBrackets = false,
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

  // handle typename
  if (
    vtx.value.kind === Kind.OBJECT_TYPE_DEFINITION &&
    props.config.addTypename
  ) {
    const typenameValue =
      props.config.addTypename === 'string'
        ? 'string'
        : `'${vtx.value.name.value}'`

    lines.push(`__typename: ${typenameValue}`)
  }

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

      const fieldTs = field.name.value + modifier + printType(props)(field.type)

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

  if (lines.length !== 0 && skipBrackets) {
    result += lines.join('\n')
  }

  if (lines.length !== 0 && !skipBrackets) {
    result = '{\n'
    result += indent(lines.join('\n'), 1)
    result += '\n}'
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
