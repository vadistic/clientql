import {
  buildAstMap,
  unwrapDocument,
  wrapDocument
} from '@graphql-clientgen/shared'
import fs from 'fs-extra'
import {
  ASTNode,
  buildASTSchema,
  DocumentNode,
  Kind,
  ObjectTypeDefinitionNode,
  parse,
  visit
} from 'graphql'
import path from 'path'
import { defaultConfig, GeneratorProps, getNaming } from '../src'

export const typeDefs = fs.readFileSync(
  path.resolve(__dirname, '../generated/schema.graphql'),
  'utf-8'
)

export const ast = parse(typeDefs, { noLocation: true })
export const schema = buildASTSchema(ast)

/**
 * let's not use it for now
 */
const getFixtureGenProps = (doc?: DocumentNode): GeneratorProps => {
  const extendedAst = !doc
    ? ast
    : wrapDocument(...unwrapDocument(doc), ...unwrapDocument(doc))

  return {
    config: defaultConfig,
    naming: getNaming(defaultConfig),
    doc: extendedAst,
    astMap: buildAstMap(extendedAst)
  }
}

export const getIsolatedGenProps = (doc: DocumentNode): GeneratorProps => ({
  config: defaultConfig,
  naming: getNaming(defaultConfig),
  doc,
  astMap: buildAstMap(doc)
})

export const mutation = ast.definitions.find(
  node =>
    node.kind === Kind.OBJECT_TYPE_DEFINITION && node.name.value === 'Mutation'
) as ObjectTypeDefinitionNode

export const query = ast.definitions.find(
  node =>
    node.kind === Kind.OBJECT_TYPE_DEFINITION && node.name.value === 'Query'
) as ObjectTypeDefinitionNode

export const normalise = (astNode: ASTNode) =>
  visit(astNode, {
    enter(node) {
      const copy = { ...node }
      let flag = false

      if ('loc' in copy) {
        delete copy.loc
        flag = true
      }

      if ('alias' in copy && !copy.alias) {
        delete copy.alias
        flag = true
      }

      if (
        'arguments' in copy &&
        (!copy.arguments || copy.arguments.length === 0)
      ) {
        delete copy.arguments
        flag = true
      }

      if (
        'directives' in copy &&
        (!copy.directives || copy.directives.length === 0)
      ) {
        delete copy.directives
        flag = true
      }

      if (
        'selectionSet' in copy &&
        (!copy.selectionSet || copy.selectionSet.selections.length === 0)
      ) {
        delete copy.selectionSet
        flag = true
      }

      // sort selections
      if (copy.kind === 'SelectionSet') {
        copy.selections = copy.selections
          .slice()
          .sort((a, b) =>
            'name' in a && 'name' in b
              ? a.name.value > b.name.value
                ? -1
                : 1
              : 0
          )
        flag = true
      }

      if (flag) {
        return copy
      }
    }
  })
