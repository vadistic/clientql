import { codegen, printCodeSection } from '@graphql-clientgen/codegen'
import {
  isEnumTypeDefinitionNode,
  isInputObjectTypeDefinitionNode,
  isScalarTypeDefinitionNode,
  Kind,
  unwrapDocument,
} from '@graphql-clientgen/core'
import { GeneratorProps } from '../generator'
import { reduceObjectTypeDefinitions } from '../utils'

export const generateTypingsDefinitions = async (props: GeneratorProps) => {
  const definitions = unwrapDocument(props.doc)

  const { rootTypes, objectTypes } = reduceObjectTypeDefinitions(definitions)

  const print = codegen(props)

  const rootsTypescript = rootTypes.map(t => print(t)).join('\n\n')

  const objectsTypescript = objectTypes.map(t => print(t)).join('\n\n')

  const interfacesTypescript = definitions
    .filter(n => n.kind === Kind.INTERFACE_TYPE_DEFINITION)
    .map(t => print(t))
    .join('\n\n')

  const inputObjectsTypescript = definitions
    .filter(isInputObjectTypeDefinitionNode)
    .map(t => print(t))
    .join('\n\n')

  const unionsTypescript = definitions
    .filter(n => n.kind === Kind.UNION_TYPE_DEFINITION)
    .map(t => print(t))
    .join('\n\n')

  const scalarsTypescript = definitions
    .filter(isScalarTypeDefinitionNode)
    .map(t => print(t))
    .join('\n\n')

  const enumsTypescript = definitions
    .filter(isEnumTypeDefinitionNode)
    .map(t => print(t))
    .join('\n\n')

  let result = ''

  result += printCodeSection(`RootTypeDefinition`, rootsTypescript)
  result += printCodeSection(Kind.SCALAR_TYPE_DEFINITION, scalarsTypescript)
  result += printCodeSection(Kind.UNION_TYPE_DEFINITION, unionsTypescript)

  result += printCodeSection(Kind.OBJECT_TYPE_DEFINITION, objectsTypescript)
  result += printCodeSection(
    Kind.INTERFACE_TYPE_DEFINITION,
    interfacesTypescript,
  )

  result += printCodeSection(
    Kind.INPUT_OBJECT_TYPE_DEFINITION,
    inputObjectsTypescript,
  )
  result += printCodeSection(Kind.ENUM_TYPE_DEFINITION, enumsTypescript)

  return result
}
