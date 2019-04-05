const { defaults } = require('jest-config')

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['<rootDir>/src/tests/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
}
