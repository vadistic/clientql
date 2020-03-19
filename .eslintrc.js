module.exports = {
  ...require('@vadistic/eslint-config-node'),
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.js',
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/test/**',
          '**/__test__/**',
          '**/spec/**',
          '**/__spec__/**',
          '**/scripts/**',
        ],
        optionalDependencies: true,
      },
    ],
  },
}
