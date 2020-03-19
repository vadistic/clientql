module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@clientql\\/([^/]+)': '<rootDir>/../$1/src',
  },
}
