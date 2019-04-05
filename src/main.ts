import fs from 'fs-extra'
import path from 'path'
import { parse, buildASTSchema, GraphQLSchema, print } from 'graphql'
import { generateFragments, printFragmentsToJs } from './gen-fragments'
import { generateOperations, printOperationsToJs } from './gen-operations.ts'
import { getRootNodes, printRootsToJs } from './roots'
import { wrapInDocument } from './utils'
import {
  generateClients,
  rootClientJstemplate,
  printClientsToJs
} from './gen-client'

const FRAGMENTS_PATH_TS = path.resolve(
  process.cwd(),
  'src/generated/fragments.ts'
)
const FRAGMENTS_PATH_GRAPHQL = path.resolve(
  process.cwd(),
  'src/generated/fragments.graphql'
)

const OPERATIONS_PATH_TS = path.resolve(
  process.cwd(),
  'src/generated/operations.ts'
)

const OPERATIONS_PATH_GRAPHQL = path.resolve(
  process.cwd(),
  'src/generated/operations.graphql'
)

const ROOTS_PATH_TS = path.resolve(process.cwd(), 'src/generated/roots.ts')
const ROOTS_PATH_GRAPHQL = path.resolve(
  process.cwd(),
  'src/generated/roots.graphql'
)

const CLIENT_PATH_TS = path.resolve(process.cwd(), 'src/generated/client.ts')

const writeFragments = async (schema: GraphQLSchema) => {
  const { fragments } = generateFragments(schema)

  const fragmentsTs = printFragmentsToJs(fragments)

  const fragmentsGraphql = print(wrapInDocument(...fragments))

  fs.writeFile(FRAGMENTS_PATH_TS, fragmentsTs)
  fs.writeFile(FRAGMENTS_PATH_GRAPHQL, fragmentsGraphql)
}

const writeOperations = async (schema: GraphQLSchema) => {
  const { operations } = generateOperations(schema)

  const operationsTs = printOperationsToJs(operations)

  const operationsGraphql = print(wrapInDocument(...operations))

  fs.writeFile(OPERATIONS_PATH_TS, operationsTs)
  fs.writeFile(OPERATIONS_PATH_GRAPHQL, operationsGraphql)
}

const writeRoots = async (schema: GraphQLSchema) => {
  const { rootNodes } = getRootNodes(schema)
  const rootsTs = printRootsToJs(rootNodes)
  const rootsGraphql = print(wrapInDocument(...rootNodes))

  fs.writeFile(ROOTS_PATH_TS, rootsTs)
  fs.writeFile(ROOTS_PATH_GRAPHQL, rootsGraphql)
}

const writeClient = async (schema: GraphQLSchema) => {
  const clients = generateClients(schema)
  const clientsTs = printClientsToJs(clients)

  fs.writeFile(CLIENT_PATH_TS, clientsTs)
}

const main = async () => {
  const typeDefs = await fs.readFile(
    path.resolve(__dirname, './generated/schema.graphql'),
    'utf-8'
  )
  const ast = parse(typeDefs, { noLocation: true })
  const schema = buildASTSchema(ast)

  writeFragments(schema)
  writeOperations(schema)
  writeRoots(schema)
  writeClient(schema)
}

main()
