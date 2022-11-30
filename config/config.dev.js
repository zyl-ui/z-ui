/*
 * @Author: zhanghan
 * @Date: 2022-11-28 09:13:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-28 09:14:38
 * @Descripttion: 开发环境配置
 */

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // packages 加入编译
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
    // 别名配置
    config.resolve.alias.set('@', '/examples').set('@packages', '/packages')
  },
}
