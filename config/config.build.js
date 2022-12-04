/*
 * @Author: zhanghan
 * @Date: 2022-11-28 09:13:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 16:29:13
 * @Descripttion: 生产环境配置
 */

const fs = require('fs')
const path = require('path')
const join = path.join
//  获取基于当前路径的目标文件
const resolve = (dir) => path.join(__dirname, '../', dir)

// 获取组件库的每个包的入口文件地址
function getComponentEntries(path) {
  let files = fs.readdirSync(resolve(path))

  const componentEntries = files.reduce((fileObj, item) => {
    //  文件路径
    const itemPath = join(path, item)
    //  在文件夹中
    const isDir = fs.statSync(itemPath).isDirectory()
    const [name, suffix] = item.split('.')

    // 文件中的入口文件
    if (isDir) {
      fileObj[item] = resolve(join(itemPath, 'index.js'))
    }
    //  文件夹外的入口文件
    else if (suffix === 'js') {
      fileObj[name] = resolve(`${itemPath}`)
    }
    return fileObj
  }, {})

  return componentEntries
}

const buildConfig = {
  //  输出文件目录
  outputDir: resolve('lib'),
  productionSourceMap: false,
  //  webpack配置
  configureWebpack: {
    //  入口文件(这里获取到的是每个独立包的入口文件地址数组)
    entry: {
      // 全量引入的文件入口
      index: resolve('packages'),
      // 按需引入的文件入口
      ...getComponentEntries('packages/plugins'),
      ...getComponentEntries('packages/components'),
    },
    //  输出配置
    output: {
      //  主入口文件名称
      filename: '[name]/index.js',
      //  构建依赖类型
      libraryTarget: 'umd',
      //  库中被导出的项
      libraryExport: 'default',
      //  引用时的依赖名
      library: 'zyl-ui',
    },
  },
  css: {
    sourceMap: false,
    // 是否将组件中的css提取至一个独立的css，库构建时可以设置为false，免得用户需要自己导入css
    extract: false,
    // extract: {
    //   filename: '[name]/index.css',
    // },
  },
  chainWebpack: (config) => {
    // 一些构建优化
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  },
}

module.exports = buildConfig
