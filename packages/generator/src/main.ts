import fs from 'fs-extra'
import { parse } from 'graphql'
import path from 'path'
import { generateSchema, generateTypescriptTypes } from './generate'
import { generateRuntimeTypedefs } from './generate/typedefs'

const TYPEDEFS_PATH = 'generated/typedefs.ts'
const TYPES_PATH = 'generated/types.ts'
const SCHEMA_PATH = 'generated/schema.graphql'

const main = async () => {
  const { ast, typeDefs } = await generateSchema(SCHEMA_PATH)

  const types = await generateTypescriptTypes(ast)
  fs.writeFile(TYPES_PATH, types)

  const typedefs = await generateRuntimeTypedefs(ast)
  fs.writeFile(TYPEDEFS_PATH, typedefs)
}

main()
