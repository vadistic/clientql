import {
  capitalise,
  Fieldname,
  FragmentName,
  Typename,
  TypescriptString,
} from '@clientql/core'
import { CodegenConfig, defaultCodegenConfig } from './config'

/**
 * TODO: some sort of spliting
 */

export const pascalCase = (...inputs: string[]) =>
  inputs.map(capitalise).join('')

const interfacePrefix = (config: CodegenConfig): TypescriptString =>
  config.interfacePrefix === true
    ? 'I'
    : typeof config.interfacePrefix === 'string'
    ? config.interfacePrefix
    : ''

const interfaceName = (config: CodegenConfig) => (
  typename: Typename,
): TypescriptString => interfacePrefix(config) + pascalCase(typename)

const argumentsInterfaceName = (config: CodegenConfig) => (
  parent: Typename,
  fieldname: Fieldname,
): TypescriptString =>
  interfacePrefix(config) +
  pascalCase(parent, fieldname) +
  config.fieldArgumentsInterfaceSuffix

const fragmentName = (config: CodegenConfig) => (name: FragmentName) =>
  pascalCase(name, config.fragmentSuffix)

export type CodegenNaming = ReturnType<typeof initCodegenNaming>

// maybe some proxy later to allow dynamically changing scoped naming config,
// but it does not seem important
export const initCodegenNaming = (config: CodegenConfig) => ({
  interfacePrefix: interfacePrefix(config),
  argumentsInterfaceName: argumentsInterfaceName(config),
  interfaceName: interfaceName(config),
  fragmentName: fragmentName(config),
})
