import {
  isObjectTypeDefinitionNode,
  unwrapDocument
} from '@graphql-clientgen/shared'
import { codegenObjectMetaToClient } from '../client'
import { getObjectTypeDefinitionNodeMeta } from '../codegen'
import { GeneratorProps } from '../config'

export const generateClient = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.ast)

  const objectTypesClientsTyping = definitions
    .filter(isObjectTypeDefinitionNode)
    .map(getObjectTypeDefinitionNodeMeta)
    .map(codegenObjectMetaToClient(props))
    .join('\n\n')

  return objectTypesClientsTyping
}
