<template>
  <div>
    <p>您可以输入模糊关键字 '张' 并滚动至底部查看分页加载效果。</p>
    <zyl-remote-select
      v-model="form.userId"
      :label="form.userName"
      :pageSize="10"
      :total="userListTotal"
      clearable
      placeholder="请搜索并选择用户"
      @getSelectList="getSelectList"
    />
    <p>您也可以自定义备选项</p>
    <zyl-remote-select
      v-model="form.userId"
      :label="form.userName"
      :pageSize="10"
      :total="userListTotal"
      clearable
      placeholder="请搜索并选择用户"
      @getSelectList="getSelectList"
    >
      <template v-slot:optionItem="{ row, $index }">
        <span style="color:blue">序号 {{ $index }}：</span>
        <span style="color:red">{{ row.label }}</span>
      </template>
    </zyl-remote-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userListTotal: 0,
      form: {
        userId: 1,
        userName: '王源'
      },
      // 模拟数据库数据
      dataBase: [
        { userName: '王源', userId: 1 },
        { userName: '张三', userId: this.getUid() },
        { userName: '李四', userId: this.getUid() },
        { userName: '王五', userId: this.getUid() },
        { userName: '张丽', userId: this.getUid() },
        { userName: '王媛媛', userId: this.getUid() },
        { userName: '王志强', userId: this.getUid() },
        { userName: '李晓明', userId: this.getUid() },
        { userName: '钱学森', userId: this.getUid() },
        { userName: '二麻子', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '钱学森', userId: this.getUid() },
        { userName: '二麻子', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() },
        { userName: '张三丰', userId: this.getUid() }
      ]
    }
  },
  methods: {
    getSelectList(searchWorld, pageNum, pageSize) {
      // 需要返回一个promise
      return new Promise((resovle) => {
        console.log(
          'searchWorld',
          searchWorld,
          'pageNum',
          pageNum,
          'pageSize',
          pageSize
        )
        // 模拟请求
        setTimeout(() => {
          // 模拟后端响应数据模糊搜索(此部分为演示数据处理)
          const filterList = this.dataBase.filter(
            (item) => item.userName.indexOf(searchWorld) > -1
          )
          console.log('filterList', filterList)

          // 模拟后端响应数据分页查询(此部分为演示数据处理)
          const m = (pageNum - 1) * pageSize
          const n = pageNum * pageSize
          const pageList = filterList.slice(m, n)
          console.log('pageList', pageList)

          // 模拟响应数据最终返回(此部分为演示数据处理)
          let data = {
            list: pageList,
            total: filterList.length
          }
          console.log('data', data)

          // 告知组件数据总数，用于判断是否下拉到底部
          this.userListTotal = data.total
          // 转换成组件接收的形式
          const list =
            data.list.map((item) => {
              return {
                label: `${item.userName} (${item.userId})`, //加上id或其他唯一标识用于识别同名选项
                value: item.userId
              }
            }) || []
          // 传入组件方法列表数据
          resovle(list)
        }, 1500)
      })
    },
    // 模拟用户随机id
    getUid() {
      let num = ''
      for (let i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10)
      }
      return num
    }
  }
}
</script>
