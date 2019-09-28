module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['<rootDir>/src/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  watchPathIgnorePatterns: ['<rootDir>/../__file_snapshots__'],
  moduleNameMapper: {
    '^@clientql\\/([^/]+)': '<rootDir>/../$1/src',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
}
