<template>
  <div>
    <p>滚动至底部查看分页加载效果</p>
    <zyl-remote-select
      v-model="form.userId"
      :pageSize="10"
      :total="userListTotal"
      clearable
      placeholder="请搜索并选择用户"
      showDefaultList
      @getSelectList="getSelectList"
    />
    <p>使用label初始化数据实现数据回填</p>
    <p>（1）单选</p>
    <zyl-remote-select
      v-model="form2.userId"
      :pageSize="10"
      :total="userListTotal"
      :label="`${form2.userName} (ID：${form2.userId})`"
      clearable
      placeholder="请搜索并选择用户"
      showDefaultList
      @getSelectList="getSelectList"
    />
    <p>（2）多选</p>
    <zyl-remote-select
      v-model="form3.userId"
      :pageSize="10"
      :total="userListTotal"
      :label="
        form3.userName.map(
          (item, index) => `${item} (ID：${form3.userId[index]})`
        )
      "
      clearable
      multiple
      showDefaultList
      placeholder="请搜索并选择用户"
      @getSelectList="getSelectList"
    />
    <p>您也可以自定义备选项</p>
    <zyl-remote-select
      v-model="form4.userId"
      :pageSize="10"
      :total="userListTotal"
      clearable
      placeholder="请搜索并选择用户"
      showDefaultList
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
        userId: ''
      },
      form2: {
        userName: '张三丰',
        userId: 2400
      },
      form3: {
        userName: ['二麻子', '张三丰'],
        userId: [1000, 2400]
      },
      form4: {
        userId: ''
      },
      // 模拟数据库数据
      dataBase: [
        { userName: '王源', userId: 100 },
        { userName: '张三', userId: 200 },
        { userName: '李四', userId: 300 },
        { userName: '王五', userId: 400 },
        { userName: '张丽', userId: 500 },
        { userName: '王媛媛', userId: 600 },
        { userName: '王志强', userId: 700 },
        { userName: '李晓明', userId: 800 },
        { userName: '钱学森', userId: 900 },
        { userName: '二麻子', userId: 1000 },
        { userName: '张三丰', userId: 1100 },
        { userName: '钱学森', userId: 1200 },
        { userName: '二麻子', userId: 1300 },
        { userName: '张三丰', userId: 1400 },
        { userName: '张三丰', userId: 1500 },
        { userName: '张三丰', userId: 1600 },
        { userName: '张三丰', userId: 1700 },
        { userName: '张三丰', userId: 1800 },
        { userName: '张三丰', userId: 1900 },
        { userName: '张三丰', userId: 2000 },
        { userName: '张三丰', userId: 2100 },
        { userName: '张三丰', userId: 2200 },
        { userName: '张三丰', userId: 2300 },
        { userName: '张三丰', userId: 2400 }
      ]
    }
  },
  methods: {
    getSelectList(searchWorld, pageNum, pageSize) {
      // 需要返回一个promise
      return new Promise((resovle) => {
        // 模拟请求
        setTimeout(() => {
          // 模拟后端响应数据模糊搜索(此部分为演示数据处理)
          const filterList = searchWorld
            ? this.dataBase.filter(
                (item) => item.userName.indexOf(searchWorld) > -1
              )
            : this.dataBase

          // 模拟后端响应数据分页查询(此部分为演示数据处理)
          const m = (pageNum - 1) * pageSize
          const n = pageNum * pageSize
          const pageList = filterList.slice(m, n)

          // 模拟响应数据最终返回(此部分为演示数据处理)
          let data = {
            list: pageList,
            total: filterList.length
          }

          // 告知组件数据总数，用于判断是否下拉到底部
          this.userListTotal = data.total
          // 转换成组件接收的形式
          const list =
            data.list.map((item) => {
              return {
                label: `${item.userName} (ID：${item.userId})`, //加上id或其他唯一标识用于识别同名选项
                value: item.userId
              }
            }) || []
          // 传入组件方法列表数据
          resovle(list)
        }, 1500)
      })
    }
  }
}
</script>
