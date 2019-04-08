import {
  isEnumTypeDefinitionNode,
  isInputObjectTypeDefinitionNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  unwrapDocument,
} from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import {
  codegenEnum,
  codegenInputObject,
  codegenObjectToType,
  codegenScalar,
} from '../codegen-typescript'
import { GeneratorProps } from '../generator'
import { printJsSection } from '../print'

export const generateTypingsDefinitions = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { rootTypes, objectTypes } = definitions
    .filter(isObjectTypeDefinitionNode)
    .reduce(
      (acc, node) => {
        if (['Query', 'Mutation', 'Subscription'].includes(node.name.value)) {
          acc.rootTypes.push(node)
        } else {
          acc.objectTypes.push(node)
        }

        return acc
      },
      {
        rootTypes: [] as ObjectTypeDefinitionNode[],
        objectTypes: [] as ObjectTypeDefinitionNode[],
      },
    )

  const rootsTypescript = rootTypes.map(codegenObjectToType(props)).join('\n\n')

  const objectsTypescript = objectTypes
    .map(codegenObjectToType(props))
    .join('\n\n')

  const inputObjectsTypescript = definitions
    .filter(isInputObjectTypeDefinitionNode)
    .map(codegenInputObject(props))
    .join('\n\n')

  const scalarsTypescript = definitions
    .filter(isScalarTypeDefinitionNode)
    .map(codegenScalar(props))
    .join('\n\n')

  const enumsTypescript = definitions
    .filter(isEnumTypeDefinitionNode)
    .map(codegenEnum(props))
    .join('\n\n')

  let result = ''

  result += printJsSection(`ROOT TYPES`, rootsTypescript)
  result += printJsSection(`OBJECT TYPES`, objectsTypescript)
  // result += printJsSection(interfacesTypescript, `INTERFACE TYPES`)
  result += printJsSection(`INPUT OBJECT TYPES`, inputObjectsTypescript)
  result += printJsSection(`SCALAR TYPES`, scalarsTypescript)
  result += printJsSection(`ENUM TYPES`, enumsTypescript)
  // result += printJsSection(unionsTypescript, `UNION TYPES`)

  return result
}
