import { printBlockComment } from '@graphql-clientgen/codegen'
import {
  TypescriptString,
  unwrapDocument,
  wrapDocument,
} from '@graphql-clientgen/core'
import { Kind } from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsGql, printYadaYada } from '../print'
import { stripLocationDescriptionAndEmpty } from '../utils'

/*
 * this will save typedefs for runtime client
 *
 * cutting everything except object/unions/interface+schema
 */

export const printClientTypedefs = (
  props: GeneratorProps,
): TypescriptString => {
  const constantName = props.naming.typedefsConstName

  const filtered = unwrapDocument(props.doc).filter(
    node =>
      node.kind === Kind.SCHEMA_DEFINITION ||
      node.kind === Kind.OBJECT_TYPE_DEFINITION ||
      node.kind === Kind.INTERFACE_TYPE_DEFINITION ||
      node.kind === Kind.UNION_TYPE_DEFINITION,
  )

  const filteredDoc = wrapDocument(...filtered)

  let resultTs = ''

  resultTs += printYadaYada() + '\n\n'
  resultTs += printBlockComment('Client Runtime TypeDefs') + '\n\n'

  if (props.config.useGqlTagTypedefs) {
    const typedefsTs = printTsGql(constantName, filteredDoc)

    resultTs += `import gql from 'graphql-tag'` + '\n\n'
    resultTs += typedefsTs + '\n\n'
  } else {
    const typedefsJson = JSON.stringify(
      stripLocationDescriptionAndEmpty(filteredDoc),
      null,
      2,
    )
      // get rid of \\"name\\"
      .replace(/\"([^(\")"]+)\":/g, '$1:')
      .replace(/\\/g, '')

    resultTs += `export const ${constantName} = ${typedefsJson}` + '\n\n'
  }

  return resultTs
}
