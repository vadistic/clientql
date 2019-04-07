import { buildAstMap } from '@graphql-clientgen/shared'
import fs from 'fs-extra'
import { buildASTSchema, parse } from 'graphql'
import path from 'path'
import { generateTypescript } from './codegen-ts'
import { getNaming } from './config'
import { defaultConfig } from './config/config'
import { generateRuntimeTypedefs } from './generate/typedefs'
import { getRemoteSchema, localSchema, printToFile } from './schema'

const SCHEMA_PATH = 'generated/schema.graphql'
const SCHEMA_URL = 'https://vats.now.sh/graphql'

const CLIENT_DIR = 'generated/client'
const TYPEDEFS_PATH = path.join(CLIENT_DIR, 'typedefs.ts')
const CLIENT_PATH = path.join(CLIENT_DIR, 'index.ts')

const main = async () => {
  const { doc, typeDefs } = await localSchema(SCHEMA_PATH)

  const astMap = buildAstMap(doc)

  const generatorProps = {
    doc,
    astMap,
    config: defaultConfig,
    naming: getNaming(defaultConfig)
  }

  const typescript = await generateTypescript(generatorProps)

  fs.ensureDirSync(CLIENT_DIR)

  fs.writeFile(CLIENT_PATH, typescript)

  const typedefs = await generateRuntimeTypedefs(generatorProps)
  fs.writeFile(TYPEDEFS_PATH, typedefs)
}

main()
