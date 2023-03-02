<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-02-10 19:44:27
 * @Descripttion: 组件事件
 -->
<template>
  <div>
    <zyl-attr :tableData="tableData"></zyl-attr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          eventName: 'getSelectList(searchWorld, pageNum, pageSize)',
          intro:
            '下拉滚动事件触发的回调（用于请求分页数据，需要返回一个promise函数，具体用法参考使用示例）',
          param:
            '<strong>searchWorld</strong> 搜索的关键词 string<br/>' +
            '<strong>pageNum</strong> 当前页 number <br/>' +
            '<strong>pageSize</strong> 分页大小 number <br/>'
        },
        {
          eventName: '继承element事件',
          intro: '继承element事件',
          param: '继承element事件'
        },
        {
          eventName: '',
          intro: '',
          param: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
