import { operationTypeToRootTypename } from '@graphql-clientgen/core'
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printTSInterface } from '../strings'
import { printSelectionSet } from './selection'

export const printOperation = (props: CodegenProps) => (
  node: OperationDefinitionNode,
) => {
  const parent = operationTypeToRootTypename(props.graph)(node.operation)

  if (!parent) {
    throw Error(`Could not find root schema node for ${node.operation}`)
  }

  if (!node.name) {
    throw Error(`Cannot print typings fo unnamed operation`)
  }

  const selection = printSelectionSet(props)(parent, node.selectionSet, true)

  return printTSInterface(node.name.value, undefined, selection)
}

export const printFragment = (props: CodegenProps) => (
  node: FragmentDefinitionNode,
) => {
  const parent = node.typeCondition.name.value

  const selection = printSelectionSet(props)(parent, node.selectionSet, true)

  return printTSInterface(node.name.value, undefined, selection)
}
