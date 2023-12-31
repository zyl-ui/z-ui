<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 10:34:36
 * @Descripttion: 消息提示组件
 -->

<template>
  <div class="wrapper" :class="toastClasses">
    <div class="zyl-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" @click="onClickClose" class="close">
        {{ this.closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zylToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 2,
      validator(value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {
            this.close()
          }
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle', 'right', 'left'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyle()
    this.execAutoClose()
  },
  computed: {
    toastClasses() {
      return { [`toast-position-${this.position}`]: true }
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    // 点击后销毁组件，并执行用户传入的 callback
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes pushToast-top {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pushToast-bottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pushToast-middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes pushToast-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pushToast-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.wrapper {
  z-index: 999;
  position: fixed;
  &.toast-position-top {
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    .zyl-toast {
      animation: pushToast-top 0.5s;
    }
  }
  &.toast-position-bottom {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    .zyl-toast {
      animation: pushToast-bottom 0.5s;
    }
  }
  &.toast-position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .zyl-toast {
      animation: pushToast-middle 1s;
    }
  }
  &.toast-position-left {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    .zyl-toast {
      animation: pushToast-left 0.5s;
    }
  }
  &.toast-position-right {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    .zyl-toast {
      animation: pushToast-right 0.5s;
    }
  }
}
.zyl-toast {
  font-size: $font-size;
  color: white;
  min-height: $toast-min-height;
  line-height: 1.8;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid white;
    margin: 0 1.5em;
  }
  .close {
    flex-shrink: 0;
    cursor: pointer;
  }
}
</style>
