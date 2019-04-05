import {
  GraphQLSchema,
  Kind,
  GraphQLObjectType,
  print,
  FragmentDefinitionNode
} from 'graphql'
import {
  FragmentType,
  objectTypeToFragment,
  getFragmentDependencies,
  getFragmentConstName
} from './object-to-fragment'
import { filterNull } from './utils'

export const generateFragments = (schema: GraphQLSchema) => {
  const objectTypes = Object.keys(schema.getTypeMap())
    .map(name => schema.getType(name))
    .filter(
      (type): type is GraphQLObjectType => {
        if (!type || !type.astNode) {
          return false
        }

        if (
          type.name === 'Query' ||
          type.name === 'Mutation' ||
          type.name === 'Subscription'
        ) {
          return false
        }

        return type.astNode.kind === Kind.OBJECT_TYPE_DEFINITION
      }
    )

  const flatFragments = objectTypes
    .map(type => objectTypeToFragment(schema, type.astNode!, FragmentType.FLAT))
    .filter(filterNull)

  const deepFragments = objectTypes
    .map(type => objectTypeToFragment(schema, type.astNode!, FragmentType.DEEP))
    .filter(filterNull)

  const defaultFragments = objectTypes
    .map(type =>
      objectTypeToFragment(schema, type.astNode!, FragmentType.DEFAULT)
    )
    .filter(filterNull)

  const fragments = [flatFragments, defaultFragments, deepFragments].flat(1)

  return {
    fragments,
    flatFragments,
    deepFragments,
    defaultFragments
  }
}

const fragmentJSTemplate = (
  fragmentName: string,
  fragmentDeps: string[],
  body: string
) => {
  const deps = fragmentDeps
    ? fragmentDeps
        .map(dep => '${' + getFragmentConstName(dep) + '}')
        .join('\n  ')
    : ''

  const bodyAndDeps = `
  ${body.replace(/\n/gm, '\n  ').trim()}

  ${deps}
  `.trim()

  const all = `
export const ${getFragmentConstName(fragmentName)} = gql\`
  ${bodyAndDeps}
\`
`

  return all
}

export const printFragmentsToJs = (
  fragments: ReadonlyArray<FragmentDefinitionNode>
) => {
  const imports = `import gql from 'graphql-tag'`

  const body = fragments
    .map(fragment =>
      fragmentJSTemplate(
        fragment.name.value,
        getFragmentDependencies(fragment),
        print(fragment)
      )
    )
    .join('')

  return [imports, body].join('\n')
}
