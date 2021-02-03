module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-rest-params': 'off',
    'camelcase': 'off', //关闭驼峰规则校验

    // 设置 typescript-eslint 规则
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/ban-ts-ignore': 0,  //允许使用轻量取消检查的注释 (@ts-ignore)
    '@typescript-eslint/no-explicit-any': 0, //允许使用any
    '@typescript-eslint/camelcase': 0, //关闭驼峰规则校验
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
