// eslint-disable-next-line import/no-extraneous-dependencies
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper:
    compilerOptions.paths && compilerOptions.paths.length
      ? pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' })
      : undefined,
}
