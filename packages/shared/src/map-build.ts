import {
  DocumentNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ObjectTypeDefinitionNode
} from 'graphql'
import { isObjectTypeDefinitionNode } from './graphql-guards'
import { unwrapType } from './graphql-utils'
import { StringMap } from './types'

/**
 *  As lightweight alternative to graphql schema
 * - needs to determine if type is object or whatever
 * - needs to allow fast searches
 */

export type Typename = string
export type Fieldname = string

export interface MapRootEntry {
  definition: ObjectTypeDefinitionNode
  // precalculate roots fields because it will be needed for proxy searches
  fieldMap: FieldMap
}

export interface MapNestedEntry {
  definition: ObjectTypeDefinitionNode
  // and those will be lazy init
  getFieldMap: () => FieldMap
}

export interface AstMap {
  query?: MapRootEntry
  mutation?: MapRootEntry
  subscription?: MapRootEntry
  types: StringMap<MapNestedEntry>
  rootMap: FieldMap
}

/**
 * TODO: refactor to shape like flat FieldDefinitionNodeMeta
 */

export interface NewFieldMap {
  [fieldname: string]: {
    typename: string
    // rename arguments=> args for destruct in strict mode
    args: InputValueDefinitionNode[]
    field: FieldDefinitionNode
    type: ObjectTypeDefinitionNode
  }
}

export interface FieldMap {
  definitions: StringMap<FieldDefinitionNode>
  typenames: StringMap<string>
}

export const buildFieldMap = (node: ObjectTypeDefinitionNode) => {
  const fieldMap = {
    definitions: {},
    typenames: {}
  } as FieldMap

  for (const field of node.fields || []) {
    fieldMap.definitions[field.name.value] = field
    fieldMap.typenames[field.name.value] = unwrapType(field.type).name.value
  }

  return fieldMap
}

export const buildAstMap = (doc: DocumentNode): AstMap => {
  const astMap = {
    types: {} as StringMap<MapNestedEntry>,
    mutation: undefined as MapRootEntry | undefined,
    query: undefined as MapRootEntry | undefined,
    subscription: undefined as MapRootEntry | undefined
  }

  const fieldMapsCache: { [typename: string]: FieldMap } = {}

  /**
   * this for lazyinit, because all those loops
   */
  const getFieldMap = (typename: string) => {
    if (!astMap.types[typename]) {
      return
    }

    if (!!fieldMapsCache[typename]) {
      return fieldMapsCache[typename]
    }

    fieldMapsCache[typename] = buildFieldMap(astMap.types[typename].definition)

    return fieldMapsCache[typename]
  }

  /**
   * Build types map
   * this here is more or less assuming that typedefs were optimised beforehand
   */
  for (const node of doc.definitions) {
    if (isObjectTypeDefinitionNode(node)) {
      const typename = node.name.value

      if (typename === 'Query') {
        astMap.query = {
          definition: node,
          fieldMap: buildFieldMap(node)
        }

        continue
      }
      if (typename === 'Mutation') {
        astMap.mutation = {
          definition: node,
          fieldMap: buildFieldMap(node)
        }
        continue
      }
      if (typename === 'Subscription') {
        astMap.subscription = {
          definition: node,
          fieldMap: buildFieldMap(node)
        }
        continue
      }

      astMap.types[typename] = {
        definition: node,
        getFieldMap: () => getFieldMap(typename)!
      }
    }
  }

  const rootFieldMap: FieldMap = {
    typenames: {
      ...(astMap.query && astMap.query.fieldMap.typenames),
      ...(astMap.mutation && astMap.mutation.fieldMap.typenames),
      ...(astMap.subscription && astMap.subscription.fieldMap.typenames)
    },
    definitions: {
      ...(astMap.query && astMap.query.fieldMap.definitions),
      ...(astMap.mutation && astMap.mutation.fieldMap.definitions),
      ...(astMap.subscription && astMap.subscription.fieldMap.definitions)
    }
  }

  return {
    ...astMap,
    rootMap: rootFieldMap
  }
}
