import {
  DocumentNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ObjectTypeDefinitionNode,
} from 'graphql'
import { isObjectTypeDefinitionNode } from './graphql-guards'
import { StringMap } from './types'
import { TypeModifier, unwrapType } from './unwrap-type'

export type Typename = string
export type Fieldname = string

export interface Fieldmap {
  [fieldname: string]: {
    typename: Typename
    args: InputValueDefinitionNode[]
    field: FieldDefinitionNode
    modifiers: TypeModifier[]
  }
}

export const buildFieldmap = (node: ObjectTypeDefinitionNode) => {
  const fieldMap: Fieldmap = {}

  for (const field of node.fields || []) {
    const fieldname = field.name.value
    const { modifiers, typename } = unwrapType(field.type)

    fieldMap[fieldname] = {
      args: [...(field.arguments || [])],
      field,
      typename,
      modifiers,
    }
  }

  return fieldMap
}

export interface MapEntry {
  node: ObjectTypeDefinitionNode
  fieldmap: Fieldmap
}

export interface AstMap {
  query: MapEntry | undefined
  mutation: MapEntry | undefined
  subscription: MapEntry | undefined
  operation: Fieldmap
  types: StringMap<MapEntry>
}

export const buildAstMap = (doc: DocumentNode): AstMap => {
  const astMap: AstMap = {
    types: {},
    query: undefined,
    mutation: undefined,
    subscription: undefined,
    operation: {},
  }

  const fieldmapCache: { [typename: string]: Fieldmap } = {}

  // operation field is aggregation of root operations
  Object.defineProperty(astMap, 'operation', {
    get() {
      return {
        ...(this.query && this.query.fieldmap),
        ...(this.mutation && this.mutation.fieldmap),
        ...(this.subscription && this.subscription.fieldmap),
      }
    },
  })

  /**
   * Lazyinit fieldmap getter
   * this here is more or less assuming that typedefs were optimised beforehand
   */

  const getFieldmap = (typename: string) => {
    const type = astMap.types[typename] && astMap.types[typename].node

    if (!type) {
      return
    }

    if (!!fieldmapCache[typename]) {
      return fieldmapCache[typename]
    }

    const fieldmap = buildFieldmap(type)
    fieldmapCache[typename] = fieldmap

    return fieldmap
  }

  /**
   * Build types map
   * this here is more or less assuming that typedefs were optimised beforehand
   */
  for (const node of doc.definitions) {
    if (isObjectTypeDefinitionNode(node)) {
      const typename = node.name.value

      astMap.types[typename] = {
        node,
        fieldmap: {},
      }

      // a bit of proxy-like for lazyinit
      Object.defineProperty(astMap.types[typename], 'fieldmap', {
        get: () => getFieldmap(typename),
      })

      // roots will be also added to types since they are types
      if (['Query', 'Mutation', 'Subscription'].includes(typename)) {
        ;(astMap as any)[typename.toLowerCase()] = {
          node,
          fieldmap: astMap.types[typename].fieldmap,
        }
      }
    }
  }

  return astMap
}
