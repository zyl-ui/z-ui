<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 14:30:39
 * @Descripttion: 标题组件
 -->

<template>
  <div class="zyl-title" :style="style">
    <div
      :class="['content', borderLine ? '' : 'border-none']"
      :style="borderStyle"
    >
      <span :style="lineStyle"></span>
      <span :style="contentStyle">{{ titleContent }}</span>
      <span :style="contentStyle">
        <slot></slot>
      </span>
      <span class="end-flag" :style="endStyle">
        <slot name="end"></slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zylTitle',
  props: {
    mBottom: {
      // 组件底部间距
      type: String,
      default: '30'
    },
    // 左侧竖线样式
    lineWidth: {
      // 竖线宽度
      type: String,
      default: '4'
    },
    lineHeight: {
      // 竖线高度
      type: String,
      default: '16'
    },
    lineLeft: {
      // 竖线左边距
      type: String,
      default: '0'
    },
    lineRight: {
      // 竖线右边距
      type: String,
      default: '6'
    },
    lineTop: {
      // 竖线顶部部边距
      type: String,
      default: '0'
    },
    lineBottom: {
      // 竖线底部边距
      type: String,
      default: '14'
    },
    lineColor: {
      // 竖线颜色
      type: String,
      default: '#3C7BFF'
    },
    // 标题内容样式
    titleContentSize: {
      // 标题字体大小
      type: String,
      default: '14'
    },
    titleContentWeight: {
      // 标题字体是否加粗
      type: String,
      default: 'bold'
    },
    titleContentColor: {
      // 标题内容颜色
      type: String,
      default: '#16191D'
    },
    titleContent: {
      // 标题内容
      type: String,
      default: ''
    },
    // 下划线样式
    borderLine: {
      // 是否显示标题下划线
      type: Boolean,
      default: true
    },
    borderColor: {
      // 下划线颜色
      type: String,
      default: '#e7e9ec'
    },
    borderHeight: {
      // 下划线粗细
      type: String,
      default: '1'
    },
    endColor: {
      // 末尾自定义插槽文字颜色
      type: String,
      default: '#5c5e61'
    }
  },
  computed: {
    style() {
      return {
        marginBottom: this.mBottom + 'px'
      }
    },
    lineStyle() {
      return {
        width: this.lineWidth + 'px',
        height: this.lineHeight + 'px',
        marginLeft: this.lineLeft + 'px',
        marginRight: this.lineRight + 'px',
        marginTop: this.lineTop + 'px',
        marginBottom: this.lineBottom + 'px',
        background: this.lineColor
      }
    },
    borderStyle() {
      return {
        borderBottom: `${this.borderHeight}px solid ${this.borderColor}`
      }
    },
    contentStyle() {
      return {
        fontSize: this.titleContentSize + 'px',
        color: this.titleContentColor,
        fontWeight: this.titleContentWeight,
        height: this.lineHeight + 'px',
        lineHeight: this.lineHeight + 'px'
      }
    },
    endStyle() {
      return {
        color: this.endColor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.zyl-title {
  position: relative;
  .border-none {
    border: 0 !important;
  }
  .content {
    font-family: PingFangSC-Medium;
    position: relative;
    display: flex;
    .end-flag {
      margin-left: auto;
      font-size: 14px;
    }
  }
}
</style>
