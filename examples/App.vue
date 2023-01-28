<!--
 * @Author: zhanghan
 * @Date: 2022-11-24 00:16:12
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-09 14:01:04
 * @Descripttion: APP主入口文件
-->
<template>
  <div>
    <el-row>
      <h3>折叠组件测试</h3>
      <div>
        <zyl-spread>
          <template slot="header">
            <zyl-sync-button @click="callToast">点击</zyl-sync-button>
          </template>
          <template slot="footer">
            <pre><code>这里可以展示折叠内容</code></pre>
          </template>
        </zyl-spread>
      </div>
    </el-row>
    <el-row>
      <h3>组件属性表格测试</h3>
      <div>
        <zyl-attr :tableData="tableData"></zyl-attr>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          param: 'icon',
          intro: '图标类名',
          type: 'String',
          choose: '——',
          default: '——',
        },
        {
          param: 'icon-position',
          intro: '图标位置',
          type: 'String',
          choose: 'left / right',
          default: 'left',
        },
        {
          param: 'loading',
          intro: '是否带 loading 效果',
          type: 'Boolean',
          choose: 'true / false',
          default: 'false',
        },
      ],
    }
  },
  methods: {
    callToast() {
      // 模拟请求
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          this.$zylUseToast({
            message: '2S 后自动关闭',
            closeButton: {
              text: 'Close',
              callback() {
                console.log('Closed')
              },
            },
            enableHtml: true,
            autoClose: 2,
            position: 'middle',
          })
        }, 2000)
      })
    },
  },
}
</script>
