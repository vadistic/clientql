import {
  codegen,
  CodegenConfig,
  printFragment,
  printObjectLikeFields,
  printSelectionSet,
  printTSInterface,
} from '@graphql-clientgen/codegen'
import {
  buildSelection,
  createName,
  getTypename,
  isObjectTypeDefinitionNode,
} from '@graphql-clientgen/core'
import {
  FragmentDefinitionNode,
  Kind,
  NamedTypeNode,
  SelectionSetNode,
  TypeNode,
} from 'graphql'
import { GeneratorProps } from '../generator'
import { naming } from '../naming'
import { traverseGraph } from '../traverse'

/**
 * To have funtional client I need to generate
 * - standard typedefs (optional, separate file)
 * - functional clients for all types (separate file, import operations types)
 * - operation selection typings for all possible operations (namespaced by operation name)
 * - typings for fragments used in those operations
 * - typedefs
 * - some init boilerplate
 */

export const generateClientResults = (props: GeneratorProps) => {
  const targets = resolvePossibleClients(props)

  const { fragments, selections } = buildClientSelections(props)(targets)

  const { fragmentsTs, resultsTs } = printClientsResults(props)(
    selections,
    fragments,
  )

  const clientsTs = printClientInterfaces(props)(targets)

  console.log(clientsTs)
  console.log(resultsTs)
}
/**
 * print possible results of the operations
 */

const resolvePossibleClients = (props: GeneratorProps) => {
  const targets = new Set<string>()

  traverseGraph(props.graph)((vtx, stack) => {
    // no roots
    if (stack.length === 1) {
      return
    }

    // TODO: unions and interfaces
    if (isObjectTypeDefinitionNode(vtx.value)) {
      targets.add(vtx.name)
    }
  })

  return targets
}

/**
 * selection of the same type
 * will be the same even for diferent operation paths (and can be reused)
 *
 * this is the most important thing design consideration,
 * because the codegen will end up with 100k sloc files otherwise
 */
const buildClientSelections = (props: GeneratorProps) => (
  targets: Set<string>,
) => {
  const selections = new Map<string, SelectionSetNode>()
  // resolve unique fragments
  const fragmentnamesSet = new Set<string>()

  targets.forEach(target => {
    // means it was compiled before
    if (!selections.has(target)) {
      const { fragmentnames, selection } = buildSelection(props)([
        ['$ROOT', target],
      ])

      // should be noop
      if (!selection || !selection.selectionSet) {
        return
      }

      selections.set(target, selection.selectionSet)
      fragmentnames.forEach(name => {
        fragmentnamesSet.add(name)
      })
    }
  })

  // retrive fragments form cache
  const fragments: FragmentDefinitionNode[] = []
  fragmentnamesSet.forEach(name => {
    fragments.push(props.fragments.get(name)!.definition)
  })

  return { selections, fragments }
}

const printClientsResults = (props: GeneratorProps) => (
  selections: Map<string, SelectionSetNode>,
  fragments: FragmentDefinitionNode[],
) => {
  const resultsTs: string[] = []
  const fragmentsTs: string[] = []

  // print results
  selections.forEach((set, target) => {
    const content = printSelectionSet(props)(target, set)
    const name = target + props.config.clientResultSuffix
    const result = printTSInterface(name, undefined, content)

    resultsTs.push(result)
  })

  // print dependency fragments
  fragments.forEach(fragment => {
    const result = printFragment(props)(fragment)
    fragmentsTs.push(result)
  })

  return {
    resultsTs: resultsTs.join('\n\n'),
    fragmentsTs: fragmentsTs.join('\n\n'),
  }
}

/**
 * expected result should be
 *
 * field: (args?: {...}) => Promise<TypenameResult | null> & TypenameClient
 */

const printClientInterfaces = (props: GeneratorProps) => (
  targets: Set<string>,
) => {
  // this is the fastest way to keep codegen null/array formating
  // (type not found will be printed as)
  const replaceTypename = (node: TypeNode, name: string): TypeNode =>
    node.kind === Kind.NAMED_TYPE
      ? {
          ...node,
          name: createName(name),
        }
      : {
          ...node,
          type: replaceTypename(node.type, name) as NamedTypeNode,
        }

  const getResultName = naming.clientResultName(props.config)
  const getClientName = naming.clientInterfaceName(props.config)

  const codegenOverrides: Partial<CodegenConfig> = {
    addFieldAsFunction: true,
    transformFieldType: (parent, field, prev, printer) => {
      const typename = getTypename(field.type)

      // it's pointing to client type so let's replace name
      if (targets.has(typename)) {
        const resultType = printer(
          replaceTypename(field.type, getResultName(typename)),
        )

        return resultType + ' & ' + getClientName(typename)
      }
    },
  }

  const clientPrinter = printObjectLikeFields({
    ...props,
    config: {
      ...props.config,
      ...codegenOverrides,
    },
  })

  const clientsTs: string[] = []

  targets.forEach(typename => {
    const vtx = props.graph.get(typename)!

    if (isObjectTypeDefinitionNode(vtx.value)) {
      const fields = clientPrinter(vtx.value)

      const inter = printTSInterface(
        getClientName(typename),
        props.config.clientExtend,
        fields,
      )

      clientsTs.push(inter)
    }

    /*
     * TODO: INTERFACES AND UNIONS
     *
     * idea to handle it is to prefix inines with typename
     *  type Unionclient {
     *    TypenameA: TypenmaeAClient
     *  }
     *
     */
  })

  return clientsTs.join('\n\n')
}
