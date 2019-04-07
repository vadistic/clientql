import fs from 'fs-extra'
import { buildASTSchema } from 'graphql'
import { getNaming } from './config'
import { defaultConfig } from './config/config'
import { generateSchema, generateTypescriptTypes } from './generate'
import { generateRuntimeTypedefs } from './generate/typedefs'

const TYPEDEFS_PATH = 'generated/typedefs.ts'
const TYPES_PATH = 'generated/types.ts'
const SCHEMA_PATH = 'generated/schema.graphql'

const main = async () => {
  const { ast, typeDefs } = await generateSchema(SCHEMA_PATH)

  const schema = buildASTSchema(ast)

  const generatorProps = {
    ast,
    schema,
    config: defaultConfig,
    naming: getNaming(defaultConfig)
  }

  const types = await generateTypescriptTypes(generatorProps)
  fs.writeFile(TYPES_PATH, types)

  const typedefs = await generateRuntimeTypedefs(generatorProps)
  fs.writeFile(TYPEDEFS_PATH, typedefs)
}

main()
