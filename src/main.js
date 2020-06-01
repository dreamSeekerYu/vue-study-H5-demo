import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置 vconsole
import Vconsole from 'vconsole'
new Vconsole()
// 配置图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/logo.png',
  loading: './assets/loading@2x.png',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
