import { Typename, TypescriptString } from '@graphql-clientgen/core'
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql'
import { CodegenProps } from '../codegen'
import { printTsType } from '../print-ts'
import { printSelections } from './selection'

export const printOperation = (props: CodegenProps) => (
  node: OperationDefinitionNode,
): TypescriptString => {
  const parent = props.roots.get(node.operation)

  if (!parent) {
    throw Error(`Could not find root schema node for ${node.operation}`)
  }

  if (!node.name) {
    throw Error(`Cannot print typings for anonymous operation`)
  }

  const nameTs = props.naming.interfaceName(node.name.value)
  const selectionTs = printSelections(props)(
    parent,
    node.selectionSet.selections,
  )

  // cannot be printed as interface
  // since it can consist of inline fragment or fragment spread
  return printTsType(nameTs, selectionTs)
}

export const printFragment = (props: CodegenProps) => (
  node: FragmentDefinitionNode,
): TypescriptString => {
  const parent: Typename = node.typeCondition.name.value

  const selectionTs = printSelections(props)(
    parent,
    node.selectionSet.selections,
  )

  const nameTs = props.naming.interfaceName(node.name.value)

  return printTsType(nameTs, selectionTs)
}
