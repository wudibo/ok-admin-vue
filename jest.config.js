const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts?(x)',
    '**/tests/**/*.spec.js',
    '**/__tests__/**/*.spec.js'
  ],
  // 别名设置
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
