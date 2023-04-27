/*
 * @Author: zhanghan
 * @Date: 2022-11-01 14:17:31
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-13 16:35:41
 * @Descripttion: eslint配置
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': ['error', { args: 'none' }], //允许函数参数未使用
    'no-control-regex': 0, //允许在正则表达式中使用控制字符
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  }
}
