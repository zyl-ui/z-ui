<!--
 * @Author: zhanghan
 * @Date: 2020-04-28 13:53:49
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 10:32:34
 * @Descripttion: 折叠组件
 -->

<template>
  <div class="contentWrapper">
    <div class="componentsMessage">
      <slot name="header"></slot>
      <div>
        <slot v-if="showFooter" name="footer"></slot>
      </div>
      <div class="dispalyCode" @click="showFooter = !showFooter">
        <span>{{ showFooter ? '▲ 收起' : '▼ 展开' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zylSpread',
  props: {
    duration: {
      type: [Number, String],
      default: '500'
    }
  },
  data() {
    return {
      showFooter: false
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.contentWrapper {
  margin-top: 20px;
  &:hover {
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);

    .dispalyCode {
      margin-top: 20px;
      background-color: #f9fafc;
      color: rgb(194, 194, 194);
    }
  }

  .componentsMessage {
    border: 1px solid #ebebeb;
    padding: 20px 20px 20px;
    overflow: hidden;
  }
}

.dispalyCode {
  position: relative;
  margin-top: 20px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  cursor: pointer;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;
  font-size: 12px;
  z-index: 1;
  > span {
    font-size: 12px;
    padding-left: 6px;
  }
}
</style>
