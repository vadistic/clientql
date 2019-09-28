import { initCodegenNaming } from '@clientql/codegen'
import {
  FragmentName,
  Typename,
  TypescriptString,
} from '@clientql/core'
import changeCase from 'change-case'
import { GeneratorConfig } from './config'

export enum StringCase {
  PASCAL = 'pascal-case',
  CONSTANT = 'constant-case',
  CAMEL = 'camel-case',
}

/**
 * change-case have like 20 deps so  maybe implement this myself later
 */
export const pascalCase = <T extends string>(...inputs: T[]) =>
  changeCase.pascalCase(inputs.join(' ')) as T

export const constantCase = <T extends string>(...inputs: T[]) =>
  changeCase.constantCase(inputs.join(' ')) as T

export const camelCase = <T extends string>(...inputs: T[]) =>
  changeCase.camelCase(inputs.join(' ')) as T

export const toCase = <T extends string>(type: StringCase, ...inputs: T[]) => {
  switch (type) {
    case StringCase.PASCAL:
      return pascalCase(...inputs)
    case StringCase.CONSTANT:
      return constantCase(...inputs)
    case StringCase.CAMEL:
      return camelCase(...inputs)
  }
}

const constantName = (config: GeneratorConfig) => (name: string) => {
  switch (config.constantCase) {
    case StringCase.CONSTANT:
      return constantCase(name)
    case StringCase.PASCAL:
      return pascalCase(name)
    case StringCase.CAMEL:
      return camelCase(name)
  }
}

export const TYPEDEFS_CONST_NAME = 'TYPEDEFS'

const interfacePrefix = (input: string | boolean) =>
  typeof input === 'string' ? input : input === true ? 'I' : ''

const typedefsConstName = (config: GeneratorConfig): TypescriptString =>
  constantName(config)(TYPEDEFS_CONST_NAME)

const fragmentConstantName = (config: GeneratorConfig) => (
  fragmentName: FragmentName,
): TypescriptString =>
  constantName(config)(fragmentName + ' ' + config.fragmentJsConstantSuffix)

const clientResponseName = (config: GeneratorConfig) => (
  typename: Typename,
): TypescriptString =>
  interfacePrefix(config.interfacePrefix) +
  pascalCase(typename + ' ' + config.clientResponseSuffix)

const clientInterfaceName = (config: GeneratorConfig) => (
  typename: Typename,
): TypescriptString =>
  interfacePrefix(config.interfacePrefix) +
  pascalCase(typename + ' ' + config.clientSuffix)

export type GeneratorNaming = ReturnType<typeof initGeneratorNaming>

export const initGeneratorNaming = (config: GeneratorConfig) => ({
  ...initCodegenNaming(config),
  typedefsConstName: typedefsConstName(config),
  fragmentConstantName: fragmentConstantName(config),
  clientResponseName: clientResponseName(config),
  clientInterfaceName: clientInterfaceName(config),
})
