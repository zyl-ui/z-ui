<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名（中/英）" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式（手机号/固话）" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idcard">
        <el-input v-model="ruleForm.idcard"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
      <el-form-item label="余额（元）" prop="balance">
        <el-input v-model="ruleForm.balance"></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="begntime">
        <el-date-picker
          v-model="ruleForm.begntime"
          placeholder="选择开始时间"
          class="dataPicker"
        />
      </el-form-item>
      <el-form-item label="结束时间" prop="endtime">
        <el-date-picker
          v-model="ruleForm.endtime"
          placeholder="选择结束时间"
          class="dataPicker"
        />
      </el-form-item>
      <el-form-item label="出生日期" prop="brdy">
        <el-date-picker
          v-model="ruleForm.brdy"
          :picker-options="pickerOptions"
          type="date"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          提交
        </el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        phone: '',
        idcard: '',
        balance: '',
        code: '',
        begntime: '',
        endtime: '',
        brdy: '',
      },
      pickerOptions: {
        // < 当前日期之前不可选（不含当前日期）
        // <= 当前日期之前不可选（含当前日期）
        // > 当前日期之后不可选（不含当前日期）
        // >= 当前日期之后不可选（含当前日期）
        // = 只能选择当前日期
        ...this.$zylUseFormValids.validateDisabledDate('>'), //当前时间之后不可选（不包含当前日期）
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名（中/英）', trigger: 'blur' },
          { validator: this.$zylUseFormValids.validateCN, trigger: 'blur' },
          {
            validator: this.$zylUseFormValids.validateTextLength(8),
          },
        ],
        phone: [
          {
            required: true,
            message: '请输入联系方式（手机号/固话）',
            trigger: 'blur',
          },
          {
            validator: this.$zylUseFormValids.validateContact,
            trigger: 'blur',
          },
        ],
        idcard: [
          {
            required: true,
            message: '请输入身份证号',
            trigger: 'blur',
          },
          { validator: this.$zylUseFormValids.validateIdCard, trigger: 'blur' },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
          {
            validator: this.$zylUseFormValids.validateTextLength(4),
          },
        ],
        balance: [
          {
            required: false,
            message: '请输入余额',
            trigger: 'blur',
          },
          {
            validator: this.$zylUseFormValids.validateTrueNum,
            trigger: 'blur',
          },
        ],
        // 开始时间和结束时间联动检验
        ...this.$zylUseFormValids.validateTimeRange({
          getRef: () => this.$refs.ruleForm,
          start: 'begntime',
          end: 'endtime',
          startLabel: '开始时间',
          endLabel: '结束时间',
          required: false,
        }),
        brdy: [
          {
            required: true,
            message: '请选择出生日期',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$zylUseToast({ message: '提交成功！' })
        } else {
          this.$zylUseToast({ message: '提交失败，请检查表单项！' })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped></style>
