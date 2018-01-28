module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.dev.config.babel.js',
      },
    },
    'import/ignore': ['.md$', '.scss$', 'node_modules'],
  },
};
