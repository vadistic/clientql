import { FragmentType, Typename } from '@graphql-clientgen/core'
import changeCase from 'change-case'
import { GeneratorConfig, GeneratorOptions } from './config'

type NullableStrings = Array<string | null | boolean | undefined>

export enum StringCase {
  PASCAL = 'pascal-case',
  CONSTANT = 'constant-case',
  CAMEL = 'camel-case',
}

const isString = (input: any): input is string => typeof input === 'string'

/**
 * change-case have like 20 deps so  maybe implement this myself later
 */
export const pascalCase = (...inputs: NullableStrings) =>
  changeCase.pascalCase(inputs.filter(isString).join(' '))

export const constantCase = (...inputs: NullableStrings) =>
  changeCase.constantCase(inputs.filter(isString).join(' '))

export const camelCase = (...inputs: NullableStrings) =>
  changeCase.camelCase(inputs.filter(isString).join(' '))

export const toCase = (type: StringCase, ...inputs: NullableStrings) => {
  switch (type) {
    case StringCase.PASCAL:
      return pascalCase(...inputs)
    case StringCase.CONSTANT:
      return constantCase(...inputs)
    case StringCase.CAMEL:
      return camelCase(...inputs)
  }
}

export type GeneratorNaming = ReturnType<typeof getGeneratorNaming>

export const getGeneratorNaming = (config: GeneratorConfig) => {
  // do not case-process provided prefix
  const interfacePrefix =
    config.interfacePrefix === true
      ? 'I'
      : !!config.interfacePrefix
      ? config.interfacePrefix
      : ''

  /**
   * Placeholder for common client functions
   */
  const clientExtends = interfacePrefix + 'Fragmentable'

  const getJsConstantName = (name: string) => toCase(config.constantCase, name)

  const getClientName = (typename: Typename) =>
    interfacePrefix + toCase(StringCase.PASCAL, typename, config.clientSuffix)

  const getRootClientName = () =>
    interfacePrefix + toCase(StringCase.PASCAL, 'Root', config.clientSuffix)

  const getFragmentName = (typename: Typename, fragmentType: FragmentType) =>
    toCase(StringCase.PASCAL, typename, fragmentType)

  const getFragmentJsConstName = (fragmentname: string) =>
    getJsConstantName(fragmentname + ' ' + config.fragmentJsConstantSuffix)

  const getInterfaceName = (typename: string) =>
    interfacePrefix + toCase(StringCase.PASCAL, typename)

  /**
   * Convention for arguments interfaces will be:
   * Prefix + Parent + Target + Args
   * e.g. `IQueryUsersArgs`
   */
  const getArgumentsInterfaceName = (parent: string, target: string) =>
    interfacePrefix + toCase(StringCase.PASCAL, parent, target) + 'Args'

  return {
    interfacePrefix,
    clientExtends,
    getClientName,
    getRootClientName,
    getFragmentName,
    getFragmentJsConstName,
    getJsConstantName,
    getInterfaceName,
    getArgumentsInterfaceName,
  }
}
