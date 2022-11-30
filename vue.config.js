// 开发环境（编译构建的是examples文件夹内的东西，用于组件库开发调试）
const devConfig = require('./config/config.dev')

// 打包环境（编译构建的是packages文件夹内的东西，用于打包组件发布npm）
const buildConfig = require('./config/config.build')

// 根据运行环境选择编译配置
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig
