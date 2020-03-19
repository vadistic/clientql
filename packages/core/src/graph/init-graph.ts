import { DocumentNode } from 'graphql'
import { getTypename, Kind } from '../ast'
import { nonNull } from '../utils'
import { Digraph } from './digraph'
import { Edge, EdgeField, GraphEntry } from './types'

export const initGraph = (doc: DocumentNode) => {
  const entries = doc.definitions
    .map<GraphEntry | undefined>(node => {
      if (
        node.kind === Kind.OBJECT_TYPE_DEFINITION ||
        node.kind === Kind.INTERFACE_TYPE_DEFINITION
      ) {
        const name = node.name.value
        const edgesArr: Edge[] = (node.fields || []).map(field => [
          field.name.value,
          getTypename(field.type),
        ])

        const weigthsArr: EdgeField[] = (node.fields || []).map(field => [field.name.value, field])

        const prototypes =
          node.kind === Kind.OBJECT_TYPE_DEFINITION && node.interfaces
            ? node.interfaces.map(inter => inter.name.value)
            : undefined

        return { name, edgesArr, weigthsArr, prototypes, value: node }
      }

      if (node.kind === Kind.UNION_TYPE_DEFINITION) {
        const name = node.name.value
        const implementations = (node.types || []).map(type => type.name.value)

        return { name, implementations, value: node }
      }
    })
    .filter(nonNull)

  return Digraph.from(entries)
}
