import { FieldNode, Kind } from 'graphql'

export const typenameFieldNode: FieldNode = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: '__typename'
  }
}
