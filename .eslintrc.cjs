/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential', // vue3核心的eslint规则
    'plugin:vue/vue3-recommended', // vue3推荐的强制执行主观社区默认值的规则，以确保一致性。
    'plugin:vue/vue3-strongly-recommended', //  vue3推荐的依赖规则提高可读性
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended', // eslint建议的规则
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
    '@vue/prettier',
    'prettier'
    // '@vue/prettier/@typescript-eslint'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 'warn',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    // 关闭文件有多个组件的警告
    'vue/one-component-per-file': 'off',
    // 关闭 console的提示
    'no-console': ['off', { allow: ['warn', 'error'] }],
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off'
    /* 'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ] */
  }
}
