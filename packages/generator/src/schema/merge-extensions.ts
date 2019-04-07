import {
  Kind,
  StringMap,
  unwrapDocument,
  wrapDocument
} from '@graphql-clientgen/shared'
import {
  ASTNode,
  DocumentNode,
  TypeDefinitionNode,
  TypeExtensionNode
} from 'graphql'

/**
 * Handling extensions separately would make client logic way more complex so lets just merge them
 */
export const mergeExtensions = (doc: DocumentNode) => {
  const definitionsMap: StringMap<StringMap<TypeDefinitionNode>> = {
    [Kind.OBJECT_TYPE_DEFINITION]: {},
    [Kind.INPUT_OBJECT_TYPE_DEFINITION]: {},
    [Kind.SCALAR_TYPE_DEFINITION]: {},
    [Kind.ENUM_TYPE_DEFINITION]: {},
    [Kind.UNION_TYPE_DEFINITION]: {},
    [Kind.INTERFACE_TYPE_DEFINITION]: {}
  }

  const extensionsMap: StringMap<StringMap<TypeExtensionNode>> = {
    [Kind.OBJECT_TYPE_EXTENSION]: {},
    [Kind.INPUT_OBJECT_TYPE_EXTENSION]: {},
    [Kind.SCALAR_TYPE_EXTENSION]: {},
    [Kind.ENUM_TYPE_EXTENSION]: {},
    [Kind.UNION_TYPE_EXTENSION]: {},
    [Kind.INTERFACE_TYPE_EXTENSION]: {}
  }

  const definitions = unwrapDocument(doc)

  const definitionKindArr = Object.keys(definitionsMap)
  const extensionKindArr = Object.keys(extensionsMap)

  const isTypeDefinitionNode = (node: ASTNode): node is TypeDefinitionNode =>
    definitionKindArr.includes(node.kind)
  const isTypeExtensionNode = (node: ASTNode): node is TypeExtensionNode =>
    extensionKindArr.includes(node.kind)

  for (const node of definitions) {
    if (isTypeDefinitionNode(node)) {
      definitionsMap[node.kind][node.name.value] = node
    }
    if (isTypeExtensionNode(node)) {
      extensionsMap[node.kind][node.name.value] = node
    }
  }

  for (const kind of extensionKindArr) {
    for (const [typename, ext] of Object.entries(extensionsMap[kind])) {
      definitionsMap[kind][typename] = mergeExtension(
        definitionsMap[kind][typename],
        ext
      )
    }
  }

  return wrapDocument(
    ...Object.values(definitionsMap)
      .map(obj => Object.values(obj))
      .flat(2)
  )
}

const mergeExtension = <T extends TypeDefinitionNode>(
  type: T,
  ext: TypeExtensionNode
) => {
  const result: any = {
    ...type
  }

  if ('fields' in ext) {
    result.fields = [...(result.fields || []), ...(result.fields || [])]
  }

  if ('directives' in ext) {
    result.directives = [
      ...(result.directives || []),
      ...(result.directives || [])
    ]
  }

  if ('values' in ext) {
    result.values = [...(result.values || []), ...(result.values || [])]
  }

  if ('types' in ext) {
    result.types = [...(result.types || []), ...(result.types || [])]
  }

  return result
}
