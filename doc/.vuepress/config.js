/*
 * @Author: zhanghan
 * @Date: 2022-11-24 11:07:14
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-02-10 17:36:14
 * @Descripttion:
 */
module.exports = {
  title: '最有料 UI',
  description: '一个基于 Vue 和 elementUI 的 最有料 UI PC端业务组件库',
  base: '/zyl-ui/',
  host: 'localhost',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitLab', link: 'http://192.168.140.130:8099/zhanghan/zyl-ui' }
    ],
    sidebar: [
      'docs/introduce/',
      {
        title: '入门',
        children: ['docs/install/', 'docs/get-start/'],
        collapsable: false //默认展开
      },
      {
        title: '通用业务组件',
        children: [
          'docs/components/zylTitle.md',
          'docs/components/zylSyncButton.md',
          'docs/components/zylToast.md',
          'docs/components/zylSpread.md',
          'docs/components/zylUploadFile.md',
          'docs/components/zylFileViewer.md',
          'docs/components/zylRemoteSelect.md'
        ],
        collapsable: false //默认展开
      },
      {
        title: '通用工具函数',
        children: [
          'docs/plugins/zylUseFormValids.md',
          'docs/plugins/zylUseFilters.md',
          'docs/plugins/zylUseTools.md'
        ],
        collapsable: false //默认展开
      }
    ],
    logo: '/favicon.ico',
    lastUpdated: '上次更新' // string | boolean
  }
}
