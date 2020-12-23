import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// IE 兼容
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Directives from './directive'
import ellipsis  from './components/ellipsis'
import SearchHighlight from './components/SearchHighlight'
// import ellipsis from "vue-overflow-ellipsis"
// import "vue-overflow-ellipsis/dist/index.css"

// 配置 vconsole
// import Vconsole from 'vconsole'
// new Vconsole()
// 配置图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(ElementUI);
Vue.use(Directives)
Vue.component('ellipsis',ellipsis)
Vue.component('search-highlight', SearchHighlight)

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/logo.png',
  loading: './assets/loading@2x.png'
})
// filters
import './filters'
// 权限指令
import './directive/permission'
// 省略号指令
import './directive/ellipsis'

// 全局 scss 变量
import '@/assets/css/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
