import { isObjectTypeDefinitionNode } from '@graphql-clientgen/shared'
import { print } from 'graphql'
import { indent } from '../codegen-ts'
import { GeneratorProps } from '../config'

/*
 * This will generate typedefs of object types for runtime client
 * TODO: later support interfaces and maybe args runtime validation with input types
 */

const TYPEDEFS_CONST_NAME = 'TYPEDEFS'

export const generateRuntimeTypedefs = ({ doc: ast }: GeneratorProps) => {
  const objectTypes = ast.definitions.filter(isObjectTypeDefinitionNode)

  let result = `import gql from 'graphql-tag' \n\n`

  result += `export const ${TYPEDEFS_CONST_NAME} = gql\`\n`

  objectTypes.forEach(node => {
    result += '  ' + indent(print(node), 1) + '\n\n'
  })

  result += `\``

  return result
}
