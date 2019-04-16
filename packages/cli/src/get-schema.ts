import fs from 'fs-extra'
import {
  buildClientSchema,
  DocumentNode,
  introspectionQuery,
  parse,
  printSchema,
} from 'graphql'
import fetch from 'node-fetch'

/*
 * https://github.com/prisma/get-graphql-schema/blob/master/src/index.ts
 */

export interface GetRemoteSchemaOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: { [key: string]: string }
}

const opts: GetRemoteSchemaOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const remoteSchema = async (
  url: string,
): Promise<
  | { status: 'ok'; typedefs: string; doc: DocumentNode }
  | { status: 'err'; message: string }
> => {
  try {
    const { data, errors } = await fetch(url, {
      method: opts.method,
      headers: opts.headers,
      body: JSON.stringify({
        operationName: 'IntrospectionQuery',
        query: introspectionQuery,
        variables: {},
      }),
    }).then(res => res.json())

    if (errors) {
      return { status: 'err', message: JSON.stringify(errors, null, 2) }
    }

    const schema = buildClientSchema(data)
    const typdefs = printSchema(schema)
    const doc = parse(typdefs)

    return {
      status: 'ok',
      typedefs: typdefs,
      doc,
    }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}

export const localSchema = async (
  file: string,
): Promise<
  | { status: 'ok'; typedefs: string; doc: DocumentNode }
  | { status: 'err'; message: string }
> => {
  let typedefs: string

  try {
    typedefs = await fs.readFile(file, 'utf-8')
  } catch (err) {
    return {
      status: 'err',
      message: 'Could not read local schema: ' + err,
    }
  }

  const doc = parse(typedefs)

  return {
    status: 'ok',
    typedefs,
    doc,
  }
}

// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

export const getSchemaDoc = async (input: string) => {
  const isRemote = urlRegex.test(input)

  console.log(`Loading ${isRemote ? 'remote' : 'local'} schema...`)

  const schemaRes = isRemote
    ? await remoteSchema(input)
    : await localSchema(input)

  console.log(`Loaded!`)

  if (schemaRes.status === 'err') {
    console.warn(`Could not load ${isRemote ? 'remote' : 'local'} schema`)
    console.warn(`Provided input: '${input}'`)
    console.warn(`Error: ${schemaRes.message}`)
    throw Error('Invalid schema')
  }

  return schemaRes.doc
}
