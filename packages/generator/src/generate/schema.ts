import fs from 'fs-extra'
import { getIntrospectionQuery, parse } from 'graphql'
import path from 'path'

/*
 * This will allow to read schema from json/ graphql or endpoint... but later
 */

export const generateSchema = async (from: string) => {
  const schemaPath = path.resolve(process.cwd(), from)

  const typeDefs = await fs.readFile(schemaPath, 'utf-8')

  const ast = parse(typeDefs, { noLocation: true })

  return { ast, typeDefs }
}
