import { FragmentDefinitionNode, print } from 'graphql'
import {
  getFragmentConstName,
  getFragmentDependencies
} from './object-to-fragment'

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
