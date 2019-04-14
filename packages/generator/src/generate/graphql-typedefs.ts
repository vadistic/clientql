import { printCodeSection } from '@graphql-clientgen/codegen'
import { Typename, wrapDocument } from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { naming } from '../naming'
import { printGqlTag } from '../print'
import { traverseGraph } from '../traverse'

/*
 * This will save typedefs for runtime client
 *
 */

export const TYPEDEFS_CONST_NAME = 'TYPEDEFS'

export const generateGraphqlTypedefs = (props: GeneratorProps) => {
  const constantName = naming.constantName(props.config)(TYPEDEFS_CONST_NAME)

  const minimalDoc = getMinimalTypedefs(props)

  let result = printCodeSection('RUNTIME TYPEDEFS', '') + '\n\n'

  result += `import gql from 'graphql-tag' \n\n`

  result += printGqlTag(constantName, minimalDoc) + '\n\n'

  // this way I do not need to put specific name to config...+
  result += `export default ${constantName}`

  return result
}

export const getMinimalTypedefs = (props: GeneratorProps) => {
  const register = new Set<Typename>()

  traverseGraph(props)(vtx => {
    register.add(vtx.name)
  })

  return wrapDocument(
    ...Array.from(register).map(typename => props.graph.get(typename)!.value),
  )
}
