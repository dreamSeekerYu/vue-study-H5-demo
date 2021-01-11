import './mock'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 微信分享
import WxShare from './utils/share'
// 微信分享
const wxConfig = {
  title: '请来神州当司机',
  pyqTitle: '请来神州当司机，有车无车都能开专车！',
  content: '单均金额80元，工作日天天能提现，速来加入！',
  otherContent: '请来神州当司机，有车无车都能开专车，单均金额80元，速来加入！',
  url: `${location.protocol}//${location.host}/`,
  // img: `${APP_ENV !== 'test'
  //     ? location.href.replace(/10101111.+/, '10101111cdn.com')
  //     : location.href.replace(/10101111.+/, '10101111.com')
  //   }${shareImg.replace(/[\w/.]+\.com/, '')}`,
}
const shareUtil = new WxShare(wxConfig)
shareUtil.initWeixin()
window.ucarShare = shareUtil
// 使用时 
// methods:{
// qqShare () {
//   window.ucarShare.qqShare()
// },
// weiboShare () {
//   window.ucarShare.weiboShare()
// },
// }

// IE 兼容
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Directives from './directive'
import ellipsis from './components/ellipsis'
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
Vue.component('ellipsis', ellipsis)
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

import mixin from './mixin'
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
