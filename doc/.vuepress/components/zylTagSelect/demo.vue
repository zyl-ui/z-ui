<template>
  <div>
    <p>单选：{{ currentMonth1 }}</p>
    <zyl-tag-select
      v-model="currentMonth1"
      :list="monthList"
      :showTagNum="12"
      @change="selectTag"
    />
    <p>
      单选时可通过
      <strong>switchSelect</strong>
      属性设置点击左右切换选中项是否可跟随切换移动：
    </p>
    <p>{{ currentMonth2 }}</p>
    <zyl-tag-select
      v-model="currentMonth2"
      :list="monthList"
      :showTagNum="12"
      switchSelect
      @change="selectTag"
    />
    <p>多选：{{ currentMonth3 }}</p>
    <zyl-tag-select
      v-model="currentMonth3"
      :list="monthList"
      :showTagNum="12"
      multiple
      @change="selectTag"
    />
    <p>
      可通过
      <strong>followSelect</strong>
      属性设置点击标签/下拉选项后展示项是否跟随选中项移动：
    </p>
    <p>{{ currentMonth4 }}</p>
    <zyl-tag-select
      v-model="currentMonth4"
      :list="monthList"
      :showTagNum="12"
      followSelect
      @change="selectTag"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth1: '1',
      currentMonth2: '2',
      currentMonth3: ['1', '2', '3', 'Q2'],
      currentMonth4: '2',
      monthList: [
        {
          label: '一月',
          value: '1',
          type: 'month'
        },
        {
          label: '二月',
          value: '2',
          type: 'month'
        },
        {
          label: '三月',
          value: '3',
          type: 'month'
        },
        {
          label: '第一季度',
          value: 'Q1',
          type: 'quarter'
        },
        {
          label: '四月',
          value: '4',
          type: 'month'
        },
        {
          label: '五月',
          value: '5',
          type: 'month'
        },
        {
          label: '六月',
          value: '6',
          type: 'month'
        },
        {
          label: '第二季度',
          value: 'Q2',
          type: 'quarter'
        },
        {
          label: '七月',
          value: '7',
          type: 'month'
        },
        {
          label: '八月',
          value: '8',
          type: 'month'
        },
        {
          label: '九月',
          value: '9',
          type: 'month'
        },
        {
          label: '第三季度',
          value: 'Q3',
          type: 'quarter'
        },
        {
          label: '十月',
          value: '10',
          type: 'month'
        },
        {
          label: '十一月',
          value: '11',
          type: 'month'
        },
        {
          label: '十二月',
          value: '12',
          type: 'month'
        },
        {
          label: '第四季度',
          value: 'Q4',
          type: 'quarter'
        },
        {
          label: '年度',
          value: '年度',
          type: 'year'
        }
      ]
    }
  },
  methods: {
    selectTag(tagInfo) {
      console.log('selectTag', tagInfo)
    }
  }
}
</script>
