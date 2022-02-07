module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/tests/**/*.spec.js', '**/__tests__/**/*.spec.js'],
  moduleNameMapper: {
    '^main(.*)$': '<rootDir>/src$1'
  }
}
