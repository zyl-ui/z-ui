/*
 * @Author: zhanghan
 * @Date: 2022-11-24 11:07:14
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 10:27:47
 * @Descripttion:
 */
module.exports = {
  base: '/zyl-ui-doc/',
  host: 'localhost',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  title: '最有料 UI',
  description: '一个基于 Vue 和 elementUI 的 最有料 UI PC端业务组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/get-start/' },
    ],
    sidebar: [
      '/introduce/',
      {
        title: '入门',
        children: ['/install/', '/get-start/'],
        collapsable: false, //默认展开
      },
      {
        title: '通用业务组件',
        children: [
          '/components/zylSyncButton.md',
          '/components/zylToast.md',
          '/components/zylSpread.md',
        ],
        collapsable: false, //默认展开
      },
      {
        title: '通用工具函数',
        children: [
          '/plugins/zylUseFormValids.md',
          '/plugins/zylUseFilters.md',
          '/plugins/zylUseTools.md',
        ],
        collapsable: false, //默认展开
      },
    ],
  },
}
