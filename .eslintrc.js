module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  plugins: ['react'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'comma-dangle': 0,
  },
};
