import Login from '@/components/Login.vue'
import Vue from 'vue'
// ...
let vm = null
export function login() {
  if (!vm) {
    const LoginConstructor = Vue.extend(Login)
    vm = new LoginConstructor().$mount()
  }
  return vm.showModal(
      () => {
      console.log('%c login success....', 'color: red; font-style: italic')
    },
      () => {
        console.log('%c login success....', 'color: red; font-style: italic')
      }
  )
}