import fs from 'fs-extra'
import {
  buildClientSchema,
  GraphQLSchema,
  introspectionQuery,
  printSchema
} from 'graphql'
import fetch from 'node-fetch'
import path from 'path'

/*
 * https://github.com/prisma/get-graphql-schema/blob/master/src/index.ts
 */

export interface GetRemoteSchemaOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: { [key: string]: string }
}

const defaultOptions: GetRemoteSchemaOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getRemoteSchema = async (
  endpoint: string,
  options?: GetRemoteSchemaOptions
): Promise<
  | { status: 'ok'; schema: GraphQLSchema; typeDefs: string }
  | { status: 'err'; message: string }
> => {
  const opts = {
    ...defaultOptions,
    ...options
  }

  try {
    const { data, errors } = await fetch(endpoint, {
      method: opts.method,
      headers: opts.headers,
      body: JSON.stringify({ query: introspectionQuery })
    }).then(res => res.json())

    if (errors) {
      return { status: 'err', message: JSON.stringify(errors, null, 2) }
    }

    const schema = buildClientSchema(data)
    const typeDefs = printSchema(schema)

    return {
      status: 'ok',
      typeDefs,
      schema
    }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}

export const printToFile = async (
  dest: string,
  data: string
): Promise<
  { status: 'ok'; path: string } | { status: 'err'; message: string }
> => {
  const output = path.resolve(process.cwd(), dest)

  try {
    fs.ensureFileSync(output)
    fs.writeFileSync(output, data)

    return { status: 'ok', path: output }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}
