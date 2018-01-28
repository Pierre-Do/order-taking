module.exports = {
  verbose: false,
  testRegex: '(.*Specs.jsx?|snapshots.jsx)$',
  roots: ['src'],
  coverageDirectory: 'target/coverage/components',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  notify: true,
  moduleNameMapper: {
    '.*scss$': '<rootDir>/specs/mocks/stub.scss',
    '.*md$': '<rootDir>/specs/mocks/raw.js',
  },
  transform: {
    '.*': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    'src/*.{js,jsx}',
    '!src/**/.*Specs.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  setupTestFrameworkScriptFile: './jestSetup.js',
};
