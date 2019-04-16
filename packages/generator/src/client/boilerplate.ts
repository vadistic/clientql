import { printTsImports, printTsInterface } from '@graphql-clientgen/codegen'
import { GeneratorProps } from '../generator'
import { printYadaYada } from '../print'

/**
 * generate index for client lib
 */

// TODO: client actual boilerplate
// TODO: add one letter aliases to client interface
export const printClientBoilerplate = (props: GeneratorProps) => {
  const rootEntries = Array.from(props.roots.entries())

  const rootsNamesTs = rootEntries.map(([type, typename]) =>
    props.naming.clientInterfaceName(typename),
  )

  const importsTs = printTsImports(rootsNamesTs, props.paths.interfaces)

  const exportsTs = [
    props.paths.interfaces,
    props.paths.responses,
    props.paths.types,
    props.paths.typedefs,
  ]
    .map(path => `export * from '${path}'`)
    .join('\n')

  const clientFieldsTs = rootEntries.map(
    ([type], i) => type + ': ' + rootsNamesTs[i],
  )

  const clientTs = printTsInterface(
    props.naming.interfaceName('ClientProxy'),
    clientFieldsTs,
  )

  let resultTs = printYadaYada() + '\n\n'

  resultTs += importsTs + '\n\n'
  resultTs += exportsTs + '\n\n'
  resultTs += clientTs + '\n\n'

  return resultTs
}
