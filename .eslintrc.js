module.exports = {
  root: true,

  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],

  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },

  env: {
    es2021: true,
    node: true
  },

  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}
