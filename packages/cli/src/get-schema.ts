import fs from 'fs-extra'
import { parse } from 'graphql'
import { getRemoteSchema } from './get-remote-schema'

/**
 * --endpoint cli flag flag
 */
export const remoteSchema = async (url: string) => {
  const res = await getRemoteSchema(url)

  if (res.status === 'err') {
    throw Error(`Could not load relote schema: ${res.message}`)
  }

  return {
    typeDefs: res.typeDefs,
    doc: parse(res.typeDefs)
  }
}

/**
 * --schema cli flag flag
 */
export const localSchema = async (file: string, merge: boolean = true) => {
  let typeDefs: string

  try {
    typeDefs = await fs.readFile(file, 'utf-8')
  } catch (err) {
    throw Error(`Could not read local schema: ${err}`)
  }

  const doc = parse(typeDefs)

  return {
    typeDefs,
    doc
  }
}
