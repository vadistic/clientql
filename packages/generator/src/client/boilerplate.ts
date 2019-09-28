import { printTsImports, printTsInterface } from '@clientql/codegen'
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

  const importRootInterfaceTs = printTsImports(
    rootsNamesTs,
    props.paths.interfaces,
  )

  const importClientLibTs = printTsImports(
    ['createClient'],
    '@clientql/client',
  )

  const importTypedefsTs = printTsImports(
    [props.naming.typedefsConstName],
    props.paths.typedefs,
  )

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

  const clientInterfaceTs = printTsInterface(
    props.naming.interfaceName('ClientProxy'),
    clientFieldsTs,
  )

  const clientInitTs = `export const useClient = createClient<${props.naming.interfaceName(
    'ClientProxy',
  )}>({typedefs: ${props.naming.typedefsConstName}})`

  let resultTs = printYadaYada() + '\n\n'

  resultTs += importClientLibTs + '\n'
  resultTs += importRootInterfaceTs + '\n'
  resultTs += importTypedefsTs + '\n\n'

  resultTs += exportsTs + '\n\n'
  resultTs += clientInterfaceTs + '\n\n'
  resultTs += clientInitTs + '\n\n'

  return resultTs
}
