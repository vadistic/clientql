import { OperationTypeNode } from 'graphql'
import { AstMap, Fieldname, Typename } from './map-build'

export const getTypeDefinition = (map: AstMap, typename: Typename) =>
  map.types[typename] && map.types[typename].definition

export const hasTypeDefinition = (map: AstMap, typename: Typename) =>
  !!(map.types[typename] && map.types[typename].definition)

export const getRootOperationType = (
  map: AstMap,
  fieldname: Fieldname
): OperationTypeNode | undefined =>
  (map.query && map.query.fieldMap.typenames[fieldname] && 'query') ||
  (map.mutation && map.mutation.fieldMap.typenames[fieldname] && 'mutation') ||
  (map.subscription &&
    map.subscription.fieldMap.typenames[fieldname] &&
    'subscription') ||
  undefined
