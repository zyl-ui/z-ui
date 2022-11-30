<template>
  <div>
    <el-table :data="tableData" style="width: 100%" class="attrTable">
      <el-table-column prop="name" label="姓名">
        <template slot-scope="{ row }">
          {{ row.name | zylName }}
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号/电话">
        <template slot-scope="{ row }">
          {{ row.phone | zylTel }}
        </template>
      </el-table-column>
      <el-table-column prop="idcard" label="身份证">
        <template slot-scope="{ row }">
          {{ row.idcard | zylIdcard }}
        </template>
      </el-table-column>
      <el-table-column prop="balance" label="余额（元）">
        <template slot-scope="{ row }">
          {{ row.balance | zylMoney }}
        </template>
      </el-table-column>
      <el-table-column prop="psnType" label="人员类型">
        <template slot-scope="{ row }">
          {{ row.psnType | zylGetLabel(psnTypeOptions) }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建日期">
        <template slot-scope="{ row }">
          {{ row.date | zylDataFormat('{y}-{m}-{d} {h}:{i}') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="noValue"
        label="空值过滤测试"
        :formatter="
          (row, column, cellValue) => $options.filters.zylEmpty(cellValue)
        "
      >
        <template slot-scope="{ row }"> {{ row.noValue | zylName }} </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '王小虎',
          phone: '18888888888',
          idcard: '420101196602253521',
          balance: '5',
          psnType: '0',
          date: 1669728960813,
          noValue: '',
        },
        {
          name: '张小虎',
          phone: '0595-87687106',
          idcard: '420101196708126272',
          balance: '89.9',
          psnType: '1',
          date: 1669728960813,
          noValue: '测试有值能不能被过滤',
        },
        {
          name: '李小虎测试数据格式兼容',
          balance: 100, //余额为数字
          phone: 15555555556, //手机号为数字
          idcard: '', //值为空
          psnType: '3', //不存在的字典码
          date: '2022-11-29', //不是时间戳
          noValue: undefined, // noValue 不存在
        },
      ],
      psnTypeOptions: [
        { label: '居民', value: '0' },
        { label: '职工', value: '1' },
        { label: '军人', value: '2' },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
