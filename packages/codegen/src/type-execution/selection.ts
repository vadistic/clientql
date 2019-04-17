import {
  indent,
  isNullable,
  Typename,
  TypescriptString,
} from '@graphql-clientgen/core'
import { Kind, SelectionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printType } from '../type-reference'

/**
 * prints operation selection,
 * returning bracketed fields with fragment intersections and unions - well, unions
 */

export const printSelections = (props: CodegenProps) => (
  parent: Typename,
  selections: ReadonlyArray<SelectionNode>,
): TypescriptString => {
  const vtx = props.graph.get(parent)

  // weird
  if (!vtx) {
    console.log(parent, selections)
    throw Error(`Missing parent node ${parent}`)
  }

  // intersection for each fragment spread
  const intersections: TypescriptString[] = []
  // union for each inline spread
  const unions: TypescriptString[] = []
  // own selection lines (for fields of object/interface)
  const lines: TypescriptString[] = []

  for (const node of selections) {
    /*
     * Field => vtx is object or interface
     */
    if (node.kind === Kind.FIELD && !node.selectionSet) {
      /**
       * typename could be added to all entries, but
       * I think that for operations it's a bit more semantic to just reflect provided selection
       */
      if (node.name.value === '__typename') {
        const typenameTs =
          props.config.addTypename === 'string' ? 'string' : `'${parent}'`

        lines.push(`__typename: ${typenameTs}`)
        continue
      }

      const field = vtx.weightsMap!.get(node.name.value)!

      const modifierTs =
        isNullable(field.type) && props.config.useOptionalModifier
          ? '?: '
          : ': '

      const fieldTs =
        field.name.value + modifierTs + printType(props)(field.type)

      lines.push(fieldTs)
      continue
    }

    if (node.kind === Kind.FIELD && node.selectionSet) {
      const child = vtx.edgesMap!.get(node.name.value)
      const field = vtx.weightsMap!.get(node.name.value)

      if (!field || !child) {
        throw Error(`Missing target for field ${node.name.value} on ${parent}`)
      }

      const nestedTs = printSelections(props)(
        child,
        node.selectionSet.selections,
      )

      const modifierTs =
        isNullable(field.type) && props.config.useOptionalModifier
          ? '?: '
          : ': '

      const fieldTs = field.name.value + modifierTs + nestedTs

      lines.push(fieldTs)
      continue
    }

    if (node.kind === Kind.FRAGMENT_SPREAD) {
      intersections.push(props.naming.interfaceName(node.name.value))
    }

    if (node.kind === Kind.INLINE_FRAGMENT) {
      if (!node.typeCondition) {
        throw Error(`Missing typeCondition for inline spread on ${parent}`)
      }

      const nestedTs = printSelections(props)(
        node.typeCondition.name.value,
        node.selectionSet.selections,
      )

      unions.push(nestedTs)
    }
  }

  let resultTs = ''

  if (lines.length !== 0) {
    resultTs = '{\n'
    resultTs += indent(lines.join('\n'), 1)
    resultTs += '\n}'
  }

  if (intersections.length !== 0) {
    resultTs = [...intersections, ...(!!resultTs ? [resultTs] : [])].join(' & ')
  }

  if (unions.length === 1) {
    resultTs += ' & ' + unions[0]
  }

  if (unions.length > 1) {
    resultTs += ' & (' + unions.join(' | ') + ')'
  }

  return resultTs
}
