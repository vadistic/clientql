import { OperationTypeNode } from 'graphql'
import { AstMap, Fieldname, Typename } from './type-graph'

export const getMapEntry = (map: AstMap, typename: Typename) =>
  map.types[typename]

export const hasMapEntry = (map: AstMap, typename: Typename) =>
  !!map.types[typename]

export const getOperationType = (
  map: AstMap,
  fieldname: Fieldname,
): OperationTypeNode | undefined =>
  (map.query && map.query.fieldmap[fieldname] && 'query') ||
  (map.mutation && map.mutation.fieldmap[fieldname] && 'mutation') ||
  (map.subscription &&
    map.subscription.fieldmap[fieldname] &&
    'subscription') ||
  undefined
