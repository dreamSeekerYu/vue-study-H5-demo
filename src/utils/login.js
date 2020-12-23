import Login from '@/components/Login.vue'
import Vue from 'vue'
// ...
let vm = null
export function login() {
  if (!vm) {
    const LoginConstructor = Vue.extend(Login)
    vm = new LoginConstructor().$mount('#login-box')// 挂载节点必须添加， 并且不要和 #app 冲突， 不然会造成 原有node 节点的替换
  }
  return vm.showModal(
    // () => {
    //   console.log('%c login success....', 'color: red; font-style: italic')
    // },
    // () => {
    //   console.log('%c login success....', 'color: red; font-style: italic')
    // }
  )
}

// TODO:
// 做队列缓存请求，执行完成请求即可从队列删除
  // 碰到登录认证状态时 记录保存， 登录完成之后自动 执行请求，取消登录时进行登录提示

// 同时需要考虑 登录模块是否会造成 模块的循环引用


//  动态模组登录好处
//    可以保留页面状态
// 但是必须考虑 retry 处理 任务缓存，不然导致正常的流程逻辑的异常

//  包括一些后置处理流程， 登录完成之后 cookie、token、session 、vuex 的同步处理
