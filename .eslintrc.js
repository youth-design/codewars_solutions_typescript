module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
