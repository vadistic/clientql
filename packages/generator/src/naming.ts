import { FragmentType } from '@graphql-clientgen/core'
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
  const getClientName = (typename: string) =>
    toCase(StringCase.PASCAL, typename, config.clientSuffix)

  const getRootClientName = () =>
    toCase(StringCase.PASCAL, 'Root', config.clientSuffix)

  const getFragmentName = (typename: string, fragmentType: FragmentType) =>
    toCase(StringCase.PASCAL, typename, fragmentType)

  const getJsConstantName = (name: string) => toCase(config.constantCase, name)

  // do not case-process provided prefix
  const interfacePrefix =
    config.prefixInterfaces === true
      ? 'I'
      : !!config.prefixInterfaces
      ? config.prefixInterfaces
      : ''

  const getInterfaceName = (typename: string) =>
    interfacePrefix + toCase(StringCase.PASCAL, typename)

  return {
    getClientName,
    getRootClientName,
    getFragmentName,
    getJsConstantName,
    getInterfaceName,
  }
}
