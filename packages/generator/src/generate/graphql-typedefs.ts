import { printCodeSection } from '@graphql-clientgen/codegen'
import { GeneratorProps } from '../generator'
import { naming } from '../naming'
import { printGqlTag } from '../print'

/*
 * This will save typedefs for runtime client
 *
 */

export const TYPEDEFS_CONST_NAME = 'TYPEDEFS'

export const generateGraphqlTypedefs = (props: GeneratorProps) => {
  const constantName = naming.constantName(props.config)(TYPEDEFS_CONST_NAME)

  let result = printCodeSection('RUNTIME TYPEDEFS', '') + '\n\n'

  result += `import gql from 'graphql-tag' \n\n`

  result += printGqlTag(constantName, props.doc) + '\n\n'

  // this way I do not need to put specific name to config...+
  result += `export default ${constantName}`

  return result
}
