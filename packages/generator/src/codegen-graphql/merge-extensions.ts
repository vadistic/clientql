import {
  indexed,
  Kind,
  TypedefNode,
  unwrapDocument,
  wrapDocument,
} from '@graphql-clientgen/core'
import {
  ASTNode,
  DocumentNode,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'

const extendsionToDefinitionKindMap = {
  [Kind.OBJECT_TYPE_EXTENSION]: Kind.OBJECT_TYPE_DEFINITION,
  [Kind.INPUT_OBJECT_TYPE_EXTENSION]: Kind.INPUT_OBJECT_TYPE_DEFINITION,
  [Kind.SCALAR_TYPE_EXTENSION]: Kind.SCALAR_TYPE_DEFINITION,
  [Kind.ENUM_TYPE_EXTENSION]: Kind.ENUM_TYPE_DEFINITION,
  [Kind.UNION_TYPE_EXTENSION]: Kind.UNION_TYPE_DEFINITION,
  [Kind.INTERFACE_TYPE_EXTENSION]: Kind.INTERFACE_TYPE_DEFINITION,
}

const extensionToDefintionKind = (kind: string) =>
  indexed(extendsionToDefinitionKindMap)[kind]

const isTypeExtension = (node: ASTNode): node is TypeExtensionNode =>
  !!extensionToDefintionKind(node.kind)

const isNotTypeExtension = (node: ASTNode) => !isTypeExtension(node)

/**
 * seriously no idea how to name it.
 *
 * It's boils down to transform on duplicates (eb by some key getter) and spreading rest
 * It would be more plain in forEach.find but this is On not On2
 */
const concatOrTransformDuplicatesByWith = <T>(
  eq: (val: T) => string | number | symbol,
) => (assign: (prevEl: T, nextEl: T) => T) => (
  prevArr: T[],
  nextArr: T[],
): T[] => {
  const keyIndexMap = new Map<string | number | symbol, number>()
  const copy = [...prevArr]
  const unique = []

  for (let i = 0; i < prevArr.length; i++) {
    const key = eq(prevArr[i])
    keyIndexMap.set(key, i)
  }

  for (const nextEl of nextArr) {
    const key = eq(nextEl)
    const prevElIndex = keyIndexMap.get(key)
    if (prevElIndex) {
      copy[prevElIndex] = assign(copy[prevElIndex], nextEl)
    } else {
      unique.push(nextEl)
    }
  }

  return [...copy, ...unique]
}

/**
 * handling extensions separately would make client logic more complex so let's just merge them
 */
export const mergeExtensions = (doc: DocumentNode) => {
  const definitions = unwrapDocument(doc) as Array<
    TypeDefinitionNode | TypeExtensionNode
  >

  const concatOrMergeExtensions = concatOrTransformDuplicatesByWith<
    TypedefNode
  >(v => v.name.value)((prev, next) => mergeExtension(prev, next))

  const res = concatOrMergeExtensions(
    definitions.filter(isNotTypeExtension),
    definitions.filter(isTypeExtension),
  )

  return wrapDocument(...res)
}

const mergeExtension = <T extends any>(type: T, ext: T) => {
  const result: any = {
    ...type,
  }

  if ('description' in ext) {
    /*
    Do extensions can have top level description?

    const description: StringValueNode = {
      kind: Kind.STRING,
      value: type.description
        ? type.description.value + '\n---\n' + ext.description.value
        : ext.description,
      block: type.description ? true : ext.description,
    }

    result.description = description
    */
  }

  if ('fields' in ext) {
    result.fields = [...(type.fields || []), ...(ext.fields || [])]
  }

  if ('directives' in ext) {
    result.directives = [...(type.directives || []), ...(ext.directives || [])]
  }

  if ('values' in ext) {
    result.values = [...(type.values || []), ...(ext.values || [])]
  }

  if ('types' in ext) {
    result.types = [...(type.types || []), ...(ext.types || [])]
  }

  return result
}
