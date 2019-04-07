import fs from 'fs-extra'
import { buildASTSchema, parse } from 'graphql'
import path from 'path'
import { getNaming } from './config'
import { defaultConfig } from './config/config'
import { generateClient, generateTypescriptTypes } from './generate'
import { generateRuntimeTypedefs } from './generate/typedefs'
import { getRemoteSchema, printToFile } from './schema'

const SCHEMA_PATH = 'generated/schema.graphql'
const SCHEMA_URL = 'https://vats.now.sh/graphql'

const CLIENT_DIR = 'generated/client'
const TYPEDEFS_PATH = path.join(CLIENT_DIR, 'typedefs.ts')
const CLIENT_PATH = path.join(CLIENT_DIR, 'index.ts')

/**
 * --endpoint cli flag flag
 */
export const remote = async (url: string) => {
  const res = await getRemoteSchema(url)

  if (res.status === 'err') {
    throw Error(res.message)
  }

  return {
    schema: res.schema,
    typeDefs: res.typeDefs,
    ast: parse(res.typeDefs)
  }
}

/**
 * --schema cli flag flag
 */
export const local = async (file: string) => {
  const typeDefs = await fs.readFile(SCHEMA_PATH, 'utf-8')

  const ast = parse(typeDefs)
  const schema = buildASTSchema(ast)

  return {
    schema,
    typeDefs,
    ast
  }
}

const main = async () => {
  const { ast, schema, typeDefs } = await local(SCHEMA_PATH)

  const generatorProps = {
    ast,
    schema,
    config: defaultConfig,
    naming: getNaming(defaultConfig)
  }

  const client = await generateClient(generatorProps)
  const types = await generateTypescriptTypes(generatorProps)

  fs.ensureDirSync(CLIENT_DIR)

  fs.writeFile(CLIENT_PATH, client + '\n\n' + types)

  const typedefs = await generateRuntimeTypedefs(generatorProps)
  fs.writeFile(TYPEDEFS_PATH, typedefs)
}

main()
