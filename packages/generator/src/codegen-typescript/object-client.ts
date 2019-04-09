import { buildTypemap, isNotEmpty } from '@graphql-clientgen/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printTsInterface } from '../print'
import { codegenTsFieldToFunction, TransformFieldType } from './field'

const transformTypeFn = (props: GeneratorProps): TransformFieldType => ({
  field,
  body,
}) => {
  const { typename } = buildTypemap(field.type)
  const isObjectType = !!props.astMap.types[typename]

  let result = `Promise<${body}>`

  if (isObjectType) {
    result = `${result} & ${props.naming.getClientName(typename)}`
  }

  return result
}

export const codegenTsObjectToClient = (props: GeneratorProps) => (
  node: ObjectTypeDefinitionNode,
) => {
  const name = props.naming.getClientName(node.name.value)

  // TODO: think how to handle client interfaces
  const extend = [props.naming.clientExtends]

  const fieldsTs =
    isNotEmpty(node.fields) &&
    node.fields.map(
      codegenTsFieldToFunction(props, {
        transformType: transformTypeFn(props),
      }),
    )

  const result = printTsInterface(name, extend, fieldsTs)

  return result
}

/**
 *  generate main client for query.mutation/subscription
 *
 *  after implementing actual client - here I can make it extend some cool lib interface
 */

export const codegenTsRootClient = (props: GeneratorProps) => () => {
  const name = props.naming.getRootClientName()
  const fields = Object.values(props.astMap.operation).map(el => el.field)

  const fieldsTs = fields.map(
    codegenTsFieldToFunction(props, { transformType: transformTypeFn(props) }),
  )

  const result = printTsInterface(name, false, fieldsTs)

  return result
}
