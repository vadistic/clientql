import { defaultConfig } from './config'
import { NullableString } from './strings'

export const capitalise = (input: string) =>
  input[0].toUpperCase() + input.slice(1)

/**
 * TODO: some sort of spliting
 */

export const pascalCase = (...inputs: NullableString[]) =>
  inputs
    .filter((el): el is string => !!el && typeof el === 'string')
    .map(capitalise)
    .join('')

const interfacePrefix = (config = defaultConfig) =>
  config.interfacePrefix === true
    ? 'I'
    : !!config.interfacePrefix
    ? config.interfacePrefix
    : ''

const interfaceName = (config = defaultConfig) => (name: string) =>
  interfacePrefix(config) + pascalCase(name)

const argumentsInterfaceName = (config = defaultConfig) => (
  parent: string,
  target: string,
) =>
  interfacePrefix(config) +
  pascalCase(parent, target) +
  config.fieldArgumentsInterfaceSuffix

const fragmentName = (config = defaultConfig) => (name: string) =>
  pascalCase(name, config.fragmentSuffix)

export const naming = {
  interfacePrefix,
  argumentsInterfaceName,
  interfaceName,
  fragmentName,
}
