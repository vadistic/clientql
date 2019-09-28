import {
  DefinitionNode,
  DocumentNode,
  TypeDefinitionNode,
  TypeExtensionNode,
} from 'graphql'
import { isTypeDefinitionNode, isTypeExtensionNode } from './guards'
import { unwrapDocument, wrapDocument } from './helpers-document'

/**
 * seriously no idea how to name it...
 *
 * It's boils down to transformation/merge on duplicates
 * (eg by some key getter) and spreading the rest
 *
 * It would be more plain in some forEach.find but this is O(N) not O(N2)
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
    // damn, remember about 0s
    if (prevElIndex !== undefined) {
      copy[prevElIndex] = assign(copy[prevElIndex], nextEl)
    } else {
      unique.push(nextEl)
    }
  }

  return [...copy, ...unique]
}

/**
 * merge single type extension node into type definition node
 */
const mergeSingleExtension = <T extends any>(type: T, ext: any): T => {
  const result: any = {
    ...type,
  }

  if ('description' in ext) {
    // does extension can have top level description ?
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

/**
 * merge type extension nodes into type definition nodes
 */
export const mergeExtensions = (doc: DocumentNode) => {
  const definitions = unwrapDocument(doc)

  const concatOrMergeExtensions = concatOrTransformDuplicatesByWith<
    TypeDefinitionNode | TypeExtensionNode
  >(v => v.name.value)((prev, next) => mergeSingleExtension(prev, next))

  const { rest, defs, exts } = definitions.reduce(
    (acc, node) => {
      isTypeDefinitionNode(node)
        ? acc.defs.push(node)
        : isTypeExtensionNode(node)
        ? acc.exts.push(node)
        : acc.rest.push(node)
      return acc
    },
    {
      rest: [] as DefinitionNode[],
      defs: [] as TypeDefinitionNode[],
      exts: [] as TypeExtensionNode[],
    },
  )

  const res = concatOrMergeExtensions(defs, exts)

  return wrapDocument(...res, ...rest)
}
