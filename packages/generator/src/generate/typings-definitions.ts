import {
  isEnumTypeDefinitionNode,
  isInputObjectTypeDefinitionNode,
  isObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  unwrapDocument,
} from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import {
  codegenScalar,
  codegenTsEnum,
  codegenTsInputObject,
  codegenTsObjectToType,
} from '../codegen-typescript'
import { GeneratorProps } from '../generator'
import { printJsSection } from '../print'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsDefinitions = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { rootTypes, objectTypes } = reduceObjectTypeDefinitions(definitions)

  const rootsTypescript = rootTypes
    .map(codegenTsObjectToType(props))
    .join('\n\n')

  const objectsTypescript = objectTypes
    .map(codegenTsObjectToType(props))
    .join('\n\n')

  const inputObjectsTypescript = definitions
    .filter(isInputObjectTypeDefinitionNode)
    .map(codegenTsInputObject(props))
    .join('\n\n')

  const scalarsTypescript = definitions
    .filter(isScalarTypeDefinitionNode)
    .map(codegenScalar(props))
    .join('\n\n')

  const enumsTypescript = definitions
    .filter(isEnumTypeDefinitionNode)
    .map(codegenTsEnum(props))
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
