<template>
  <div>
    <!-- 首页 -->
    <div class="home-page" v-if="hasPass">
      <div class="contentWrapper">
        <div class="home-header">
          <div class="menu">
            <i class="iconfont icon-kucun"></i>
            <ul>
              <li>
                <router-link :to="{ path: 'get-start' }">在线文档</router-link>
              </li>
              <li>
                <a
                  href="http://192.168.140.130:8099/zhanghan/zyl-ui"
                  target="_blank"
                >
                  GitLab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="home-content">
          <div class="banner">
            <div>
              <span>最有料UI组件库</span>
            </div>
            <div>
              <p>一个聚合通用业务的PC组件库</p>
            </div>
            <router-link class="startBtn" :to="{ path: 'get-start' }">
              快速上手
            </router-link>
          </div>
          <div class="iconWrapper">
            <i class="iconfont icon-kucun"></i>
          </div>
        </div>
      </div>
      <div class="footerWrapper">
        <p>你可以使用 最有料UI组件库 做什么？</p>
        <div class="advantage">
          <div class="tips">
            <i class="iconfont icon-kuaijierukou"></i>
            <p>更快的完成前端业务开发</p>
          </div>
          <div class="tips">
            <i class="iconfont icon-suoyouzhaobiaoxiangmu"></i>
            <p>高效利用已建设资源</p>
          </div>
          <div class="tips">
            <i class="iconfont icon-wupinguanli"></i>
            <p>业务组件统一升级更易于维护</p>
          </div>
        </div>
        <p class="copyright">MIT Licensed | Copyright © 2022-present 最有料</p>
      </div>
    </div>
    <!-- 文档密码输入框 -->
    <div class="apt-password-wrap" @keyup.enter="login" v-if="!hasPass">
      <div class="apt-password-login-form">
        <div class="apt-password-wrap-form">
          <h1>最有料 UI组件库</h1>
          <div class="apt-password-wrap-form-input" @keyup.enter="login">
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="请输入密码查看文档"
            />
            <button type="button" class="apt-password-login-btn" @click="login">
              查看文档
            </button>
          </div>
          <small
            ><a target="">{{ errorMsg }}</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data() {
    return {
      errorMsg: '',
      password: '',
      hasPass: false,
    }
  },
  mounted() {
    this.hasPass = this.$zylUseTools.getCookie('hasPass') ? true : false
  },
  methods: {
    login() {
      if (!!this.password) {
        if (this.password === 'zylinfo') {
          this.$zylUseTools.setCookie('hasPass', 1, 1)
          this.hasPass = true
          this.errorMsg = ''
        } else {
          this.errorMsg = '密码不正确！'
        }
      } else {
        this.errorMsg = '密码不能为空！'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import './index-page.css';

* {
  transition: all 0.1s;
}

@mixin styling($range) {
  .home-page {
    background-color: #fff;
    .contentWrapper {
      background-color: #1b65b9;
      padding: 0 5vw * $range;
      .home-header {
        width: 100%;
        padding: 2.5vw * $range 0;
        .menu {
          display: inline-flex;
          ul {
            margin: 0;
            margin-left: 2vw * $range;
            list-style: none;
            display: flex;
            padding: 0;
            li a {
              font-size: 3.5vw * $range;
              color: white;
              font-weight: bold;
              padding-right: 3vw * $range;
              display: inline-block;
              height: 8vw * $range;
              line-height: 8vw * $range;
              &:hover {
                color: wheat;
              }
            }
          }
          .iconfont {
            font-size: 7.763vw * $range;
            color: white;
            overflow: hidden;
            &:hover {
              color: wheat;
            }
          }
        }
      }
      .home-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        .iconWrapper {
          margin-left: 15vw * $range;
          .iconfont {
            font-size: 25vw * $range;
            color: white;
            overflow: hidden;
            &:hover {
              transition: transform 1s;
              color: wheat;
              cursor: pointer;
            }
          }
        }
        .banner {
          display: inline-flex;
          flex-direction: column;
          margin: 15vw * $range 0;
          span {
            color: white;
            font-size: 6vw * $range;
            font-family: Georgia, 'Times New Roman', 'Microsoft YaHei',
              '微软雅黑', STXihei, '华文细黑', serif;
          }
          p {
            font-size: 3.5vw * $range;
            color: white;
            font-weight: bold;
            font-family: 'Times New Roman', Georgia, 'SimSun', '宋体',
              'Times New Roman', 'Microsoft YaHei', '微软雅黑', STXihei,
              '华文细黑', serif;
          }
          .startBtn {
            text-decoration: none;
            border: 1px solid rgb(146, 148, 248);
            position: relative;
            overflow: hidden;
            font-size: 4vw * $range;
            color: #f4f4f4;
            text-align: center;
            width: 40vw * $range;
            height: 10vw * $range;
            line-height: 10vw * $range;
            &:hover {
              box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
            }
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                120deg,
                transparent,
                rgba(146, 148, 248, 0.4),
                transparent
              );
              transition: all 650ms;
            }
            &:hover:before {
              left: 100%;
            }
          }
        }
      }
    }
    .footerWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      > p {
        width: 100%;
        margin: 12vw * $range 0;
        font-size: 5vw * $range;
        color: black;
        font-weight: bold;
        font-family: 'Times New Roman', Georgia, 'SimSun', '宋体',
          'Times New Roman', 'Microsoft YaHei', '微软雅黑', STXihei, '华文细黑',
          serif;
      }
      .copyright {
        width: 100%;
        color: #666;
        font-size: 3vw * $range;
      }
      > .advantage {
        width: 80%;
        display: flex;
        justify-content: space-between;
        .tips {
          border-radius: 0.5vw * $range;
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2vw * $range;
          .iconfont {
            font-size: 10vw * $range;
            fill: #337480;
            overflow: hidden;
          }
          p {
            font-size: 3vw * $range;
            text-align: center;
          }
          &:hover {
            background-color: #1b65b9;
            color: white;
            cursor: pointer;
            transform: translateY(-0.658vw);
            box-shadow: 0vw 0.132vw * $range 0.526vw * $range 0vw
              rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
    // .apt-password-wrap {
    //   width: 100%;
    //   height: 100%;
    //   position: fixed;
    //   left: 0;
    //   top: 0;
    //   text-align: center;
    //   background: #f5f7fa;

    //   .apt-password-wrap-form {
    //     margin: 80px auto;
    //     position: relative;
    //     width: 480px;
    //     height: 236px;
    //     border-radius: 5px;
    //     margin-top: 10%;
    //     padding: 20px 0;
    //     border: 1px solid #ebeef5;
    //     background: #fff;
    //     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    //     .apt-password-wrap-form-input {
    //       display: flex;
    //       width: 80%;
    //       margin: 28px auto;
    //       text-align: center;
    //     }
    //   }
    // }
  }
}

// 平板及以上
@media screen and (max-width: 992px) {
  @include styling($range: 1);
}
// 手机
@media screen and (min-width: 992px) {
  @include styling($range: 0.4);
}
</style>
