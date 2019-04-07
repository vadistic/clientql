import fs from 'fs-extra'
import { parse, print } from 'graphql'
import { getRemoteSchema } from './get-remote-schema'
import { mergeExtensions } from './merge-extensions'

/**
 * --endpoint cli flag flag
 */
export const remoteSchema = async (url: string, merge: boolean = true) => {
  const res = await getRemoteSchema(url)

  if (res.status === 'err') {
    throw Error(res.message)
  }

  if (!merge) {
    return {
      typeDefs: res.typeDefs,
      doc: parse(res.typeDefs)
    }
  }

  const mergedDoc = mergeExtensions(parse(res.typeDefs))

  return {
    typeDefs: print(mergedDoc),
    doc: mergedDoc
  }
}

/**
 * --schema cli flag flag
 */
export const localSchema = async (file: string, merge: boolean = true) => {
  const typeDefs = await fs.readFile(file, 'utf-8')
  const doc = parse(typeDefs)

  if (!merge) {
    return {
      typeDefs,
      doc
    }
  }

  const mergedDoc = mergeExtensions(parse(typeDefs))

  return {
    typeDefs: print(mergedDoc),
    doc: mergedDoc
  }
}
