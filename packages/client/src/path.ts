import { Fieldname, OperationEdge, StringMap, Typename } from '@clientql/core'
import { OperationTypeNode } from 'graphql'
import { Segments } from './fluent-async-proxy'

/**
 * typings should be enough validation, eventually let's do it somewhere else
 */
export const parseSegments = (segments: Segments) => {
  const path: OperationEdge[] = []
  const variables: StringMap<any> = {}
  const [[first]] = segments

  const varSuffix = (l: number) => (l > 0 ? '' + l : '')

  const type = first as OperationTypeNode
  path.push([type, undefined])

  let level = 0

  for (const [prop, calls] of segments.slice(1)) {
    // enters inline
    if (calls.length === 0) {
      path.push([undefined, prop as Typename])
    }

    // normal call
    if (calls.length === 1) {
      // single object with parametrized variables or undef
      const [[arg]] = calls
      if (!!arg && typeof arg === 'object') {
        for (const key of Object.keys(arg)) {
          variables[key + varSuffix(level)] = arg[key]
        }
      }

      path.push([prop as Fieldname, undefined])
      level += 1
    }
  }

  return { path, variables, type }
}
