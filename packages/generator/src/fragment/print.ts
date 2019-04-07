import { FragmentDefinitionNode, print } from 'graphql'
import { GeneratorProps } from '../config'
import { getFragmentDependencies } from './object-to-fragment'

const fragmentJSTemplate = ({ naming }: GeneratorProps) => (
  fragmentName: string,
  fragmentDeps: string[],
  body: string
) => {
  const deps = fragmentDeps
    ? fragmentDeps
        .map(dep => '${' + naming.getFragmentConstantName(dep) + '}')
        .join('\n  ')
    : ''

  const bodyAndDeps = `
  ${body.replace(/\n/gm, '\n  ').trim()}

  ${deps}
  `.trim()

  const all = `
export const ${naming.getFragmentConstantName(fragmentName)} = gql\`
  ${bodyAndDeps}
\`
`

  return all
}

export const printFragmentsToJs = (props: GeneratorProps) => (
  fragments: ReadonlyArray<FragmentDefinitionNode>
) => {
  const imports = `import gql from 'graphql-tag'`

  const body = fragments
    .map(fragment =>
      fragmentJSTemplate(props)(
        fragment.name.value,
        getFragmentDependencies(fragment),
        print(fragment)
      )
    )
    .join('')

  return [imports, body].join('\n')
}
