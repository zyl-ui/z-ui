(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{353:function(s,t,a){},379:function(s,t,a){"use strict";a(353)},385:function(s,t,a){"use strict";a.r(t);var i={name:"indexPage",data:()=>({errorMsg:"",password:"",hasPass:!1}),mounted(){this.hasPass=!!this.$zylUseTools.getCookie("hasPass")},methods:{login(){this.password?"zylinfo"===this.password?(this.$zylUseTools.setCookie("hasPass",1,1),this.hasPass=!0,this.errorMsg=""):this.errorMsg="密码不正确！":this.errorMsg="密码不能为空！"}}},n=(a(379),a(3)),o=Object(n.a)(i,(function(){var s=this,t=s._self._c;return t("div",[s.hasPass?t("div",{staticClass:"home-page"},[t("div",{staticClass:"contentWrapper"},[t("div",{staticClass:"home-header"},[t("div",{staticClass:"menu"},[t("i",{staticClass:"iconfont icon-kucun"}),s._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:{path:"docs/get-start"}}},[s._v("\n                在线文档\n              ")])],1),s._v(" "),s._m(0)])])]),s._v(" "),t("div",{staticClass:"home-content"},[t("div",{staticClass:"banner"},[s._m(1),s._v(" "),s._m(2),s._v(" "),t("router-link",{staticClass:"startBtn",attrs:{to:{path:"docs/get-start"}}},[s._v("\n            快速上手\n          ")])],1),s._v(" "),s._m(3)])]),s._v(" "),s._m(4)]):s._e(),s._v(" "),s.hasPass?s._e():t("div",{staticClass:"apt-password-wrap",on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.login.apply(null,arguments)}}},[t("div",{staticClass:"apt-password-login-form"},[t("div",{staticClass:"apt-password-wrap-form"},[t("h1",[s._v("最有料 UI组件库")]),s._v(" "),t("div",{staticClass:"apt-password-wrap-form-input",on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.login.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"请输入密码查看文档"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),s._v(" "),t("button",{staticClass:"apt-password-login-btn",attrs:{type:"button"},on:{click:s.login}},[s._v("\n            查看文档\n          ")])]),s._v(" "),t("small",[t("a",{attrs:{target:""}},[s._v(s._s(s.errorMsg))])])])])])])}),[function(){var s=this._self._c;return s("li",[s("a",{attrs:{href:"http://192.168.140.130:8099/zhanghan/zyl-ui",target:"_blank"}},[this._v("\n                GitLab\n              ")])])},function(){var s=this._self._c;return s("div",[s("span",[this._v("最有料UI组件库")])])},function(){var s=this._self._c;return s("div",[s("p",[this._v("一个聚合通用业务的PC组件库")])])},function(){var s=this._self._c;return s("div",{staticClass:"iconWrapper"},[s("i",{staticClass:"iconfont icon-kucun"})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"footerWrapper"},[t("p",[s._v("你可以使用 最有料UI组件库 做什么？")]),s._v(" "),t("div",{staticClass:"advantage"},[t("div",{staticClass:"tips"},[t("i",{staticClass:"iconfont icon-kuaijierukou"}),s._v(" "),t("p",[s._v("更快的完成前端业务开发")])]),s._v(" "),t("div",{staticClass:"tips"},[t("i",{staticClass:"iconfont icon-suoyouzhaobiaoxiangmu"}),s._v(" "),t("p",[s._v("高效利用已建设资源")])]),s._v(" "),t("div",{staticClass:"tips"},[t("i",{staticClass:"iconfont icon-wupinguanli"}),s._v(" "),t("p",[s._v("业务组件统一升级更易于维护")])])]),s._v(" "),t("p",{staticClass:"copyright"},[s._v("MIT Licensed | Copyright © 2022-present 最有料")])])}],!1,null,"3d3d181a",null);t.default=o.exports}}]);