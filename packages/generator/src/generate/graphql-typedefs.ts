import { printCodeSection } from '@graphql-clientgen/codegen'
import { wrapDocument } from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { printGqlTag } from '../print'

/*
 * This will generate typedefs of object types for runtime client
 *
 * Only objects for now since nothing else is really supported
 */

export const TYPEDEFS_CONST_NAME = 'TYPEDEFS'

export const generateGraphqlTypedefs = (props: GeneratorProps) => {
  const newDoc = wrapDocument(
    ...Object.values(props.astMap.types).map(({ node }) => node),
  )
  const constantName = props.naming.getJsConstantName(TYPEDEFS_CONST_NAME)

  let result = printCodeSection('RUNTIME TYPEDEFS', '') + '\n\n'

  result += `import gql from 'graphql-tag' \n\n`

  result += printGqlTag(constantName, newDoc) + '\n\n'

  // this way I do not need to put it to config...+
  result += `export default ${constantName}`

  return result
}
