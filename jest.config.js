module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@clientql\\/([^/]+)': '<rootDir>/packages/$1/src',
  },
  projects: ['<rootDir>/packages/*/jest.config.js'],
}
