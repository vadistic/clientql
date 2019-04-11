import { isString } from '@graphql-clientgen/core'
import changeCase from 'change-case'
import { GeneratorConfig } from './config'

type NullableStrings = Array<string | null | boolean | undefined>

export enum StringCase {
  PASCAL = 'pascal-case',
  CONSTANT = 'constant-case',
  CAMEL = 'camel-case',
}

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

export const naming = {
  constantName,
}
