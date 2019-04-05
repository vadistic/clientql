import { parse, ObjectTypeDefinitionNode, Kind, buildASTSchema } from 'graphql'
import fs from 'fs-extra'
import path from 'path'

export const typeDefs = fs.readFileSync(
  path.resolve(__dirname, '../generated/schema.graphql'),
  'utf-8'
)

export const ast = parse(typeDefs, { noLocation: true })
export const schema = buildASTSchema(ast)

export const mutation = ast.definitions.find(
  node =>
    node.kind === Kind.OBJECT_TYPE_DEFINITION && node.name.value === 'Mutation'
) as ObjectTypeDefinitionNode

export const query = ast.definitions.find(
  node =>
    node.kind === Kind.OBJECT_TYPE_DEFINITION && node.name.value === 'Query'
) as ObjectTypeDefinitionNode
