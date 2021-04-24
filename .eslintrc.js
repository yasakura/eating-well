module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'airbnb-typescript',
    "plugin:react-hooks/recommended",
    'prettier',
    'plugin:jest/recommended',
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  }
};