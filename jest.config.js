module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['<rootDir>/tests/', '<rootDir>/src/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
}
