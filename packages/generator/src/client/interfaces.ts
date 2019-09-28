import {
  CodegenConfig,
  printBlockComment,
  printObjectLikeFields,
  printTsImports,
  printTsInterface,
  printTypeModifiers,
} from '@clientql/codegen'
import {
  GraphVertex,
  indent,
  isInterfaceTypeDefinitonNode,
  isObjectTypeDefinitionNode,
  isUnionTypeDefinitionNode,
  ObjectLikeNode,
  Typename,
  TypescriptString,
  unwrapDocument,
  unwrapType,
} from '@clientql/core'
import { ObjectTypeDefinitionNode } from 'graphql'
import { GeneratorProps } from '../generator'
import { printYadaYada } from '../print'
import { groupDefinitionsByKind } from '../utils'

/**
 * print client interfaces for all targets
 */

export const printClientInterfaces = (props: GeneratorProps) => (
  targets: Set<Typename>,
): TypescriptString => {
  const fieldsPrinter = printClientObjectFields(props)(targets)
  const inlineableFieldsPrinter = printClientFields(props)(fieldsPrinter)

  // for roots
  const rootClientsTs: TypescriptString[] = []

  props.roots.forEach((typename, type) => {
    const vtx = props.graph.get(typename)!
    const nameTs = props.naming.clientInterfaceName(typename)

    const contentTs = fieldsPrinter(vtx.value as ObjectTypeDefinitionNode)
    const interfaceTs = printTsInterface(nameTs, contentTs)

    rootClientsTs.push(interfaceTs)
  })

  // for each target
  const clientsTs: TypescriptString[] = []
  const clientExtendsTs = props.naming.interfaceName(props.config.clientExtend)

  targets.forEach(typename => {
    const vtx = props.graph.get(typename)!
    const nameTs = props.naming.clientInterfaceName(typename)

    const contentTs = inlineableFieldsPrinter(vtx)
    const interfaceTs = printTsInterface(nameTs, contentTs, clientExtendsTs)

    clientsTs.push(interfaceTs)
  })

  const importsTs = printImportsForClientInterfaces(props)(targets)

  const boilerplateTs = printClientInterfacesBoilerplate(props)

  let resultTs = ''

  resultTs += printYadaYada() + '\n\n'
  resultTs += importsTs + '\n\n'

  resultTs += boilerplateTs + '\n\n'

  resultTs += printBlockComment('Root Client Interfaces') + '\n\n'
  resultTs += rootClientsTs.join('\n\n') + '\n\n'

  resultTs += printBlockComment('Client Interfaces') + '\n\n'
  resultTs += clientsTs.join('\n\n') + '\n\n'

  return resultTs
}

/**
 * recursively print client fields for a given target
 */
const printClientFields = (props: GeneratorProps) => (
  printer: ClientFieldPrinter,
) => (vtx: GraphVertex): TypescriptString[] => {
  // basically base for this
  if (isObjectTypeDefinitionNode(vtx.value)) {
    return printer(vtx.value)
  }

  if (isUnionTypeDefinitionNode(vtx.value)) {
    // union with no memebrs, need to return something
    if (!vtx.implementations) {
      return ['[typename: string]: any']
    }

    const inlinesTs = vtx.implementations.map(implem => {
      const child = props.graph.get(implem)!
      const fieldsTs = printClientFields(props)(printer)(child)

      return implem + ': {\n' + indent(fieldsTs.join('\n'), 1) + '\n}'
    })

    return inlinesTs
  }

  if (isInterfaceTypeDefinitonNode(vtx.value)) {
    const ownFieldTs = printer(vtx.value)

    // weird if interface is not implemented by any type but ok
    if (!vtx.implementations) {
      return ownFieldTs
    }

    const inlinesTs = vtx.implementations.map(implem => {
      const child = props.graph.get(implem)!
      const fieldsTs = printClientFields(props)(printer)(child)

      return implem + ': {\n' + indent(fieldsTs.join('\n'), 1) + '\n}'
    })

    return [...ownFieldTs, ...inlinesTs]
  }

  return []
}

/*
 * codegen printer with modified config
 */
type ClientFieldPrinter = (node: ObjectLikeNode) => TypescriptString[]

const printClientObjectFields = (props: GeneratorProps) => (
  targets: Set<Typename>,
) => {
  // modify codegen config for field as function + transform result
  const codegenOverrides: Partial<CodegenConfig> = {
    addFieldAsFunction: true,
    transformFieldType: (parent, field, prev) => {
      const { typename, modifiers } = unwrapType(field.type)

      if (targets.has(typename)) {
        const resultTypeTs = printTypeModifiers(props.config)(
          props.naming.clientResponseName(typename),
          modifiers,
        )

        return (
          `Promise<${resultTypeTs}>` +
          ' & ' +
          props.naming.clientInterfaceName(typename)
        )
      }

      return `Promise<${prev}>`
    },
  }

  const clientFieldsPrinter = printObjectLikeFields({
    ...props,
    config: {
      ...props.config,
      ...codegenOverrides,
    },
  })

  return clientFieldsPrinter
}

/**
 * needs to import:
 * - all responses form './responses'
 * - input + scalars + enums from './types'
 */
const printImportsForClientInterfaces = (props: GeneratorProps) => (
  targets: Set<Typename>,
): TypescriptString => {
  const responsesNamesTs = Array.from(targets).map(typename =>
    props.naming.clientResponseName(typename),
  )

  const repsonsesImportsTs = printTsImports(
    responsesNamesTs,
    props.paths.responses,
  )

  const groups = groupDefinitionsByKind(unwrapDocument(props.doc))

  const inputNamesTs = (groups.InputObjectTypeDefinition || []).map(node =>
    props.naming.interfaceName(node.name.value),
  )
  const scalarNamesTs = (groups.ScalarTypeDefinition || []).map(node =>
    props.naming.interfaceName(node.name.value),
  )
  const enumNamesTs = (groups.EnumTypeDefinition || []).map(node =>
    props.naming.interfaceName(node.name.value),
  )

  // it would be better to import only those used but later
  const typesImportsTs = printTsImports(
    [...inputNamesTs, ...scalarNamesTs, ...enumNamesTs],
    props.paths.types,
  )

  let importsTs = ''

  if (typesImportsTs) {
    importsTs += typesImportsTs + '\n\n'
  }

  importsTs += repsonsesImportsTs

  return importsTs
}

const printClientInterfacesBoilerplate = (
  props: GeneratorProps,
): TypescriptString => {
  const clientExtendsTs = props.naming.interfaceName(props.config.clientExtend)

  // TODO: later think about how to make some cool customizations api
  const boilerplateTs = `
  export interface ${clientExtendsTs} {
    $fragment: <T = any>(fragment: any) => Promise<T>
  }
  `.trim()

  return boilerplateTs
}
