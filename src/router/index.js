import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { pageMixins } from '../mixin'

import about from '../views/About.vue'
console.log(about)
Vue.use(VueRouter)

// 加载混合器
const extendMixin = (instance, ...mixins) => {
  instance.mixins = instance.mixins ? instance.mixins.concat(mixins) : mixins
  return instance
}

export const routes = [
  {
    path: '/',
    name: 'Home',
    cName: '',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 两种导入页面级 mixins 的方式
    component: extendMixin(about, pageMixins)
    // component: () => {
    //   return import(/* webpackChunkName: "about" */ '../views/About.vue').then(page => extendMixin(page.default, pageMixins))
    // }
  },
  {
    path: '/pug',
    name: 'pug',
    component: () => import(/* webpackChunkName: "pug" */ '../views/pug')
  },
  {
    path: '/mand-ui',
    name: 'mand-ui',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/mand-ui')
  },
  {
    path: '/lazyloadImage',
    name: 'lazyloadImage',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/lazyloadImage')
  },
  {
    path: '/html2camvas',
    name: 'html2camvas',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../components/html2canvas.vue')
  },
  {
    path: '/storage',
    name: 'storage',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/storage')
  },
  {
    path: '/useHeightLight',
    name: 'useHeightLight',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/useHeightLight')
  },
  {
    path: '/ellipsis',
    name: 'ellipsis',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/ellipsis')
  },
  {
    path: '/waterMarker',
    name: 'waterMarker',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../components/waterMarker')
  },
  {
    path: '/autoBindRequestTest',
    name: 'autoBindRequestTest',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/autoBindRequestTest')
  },

  {
    path: '/elTabPage',
    name: 'elTabPage',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/elTabPage/index')
  },
  {
    path: '/asyncFund',
    name: 'asyncFund',
    component: () => import(/* webpackChunkName: "mand-ui" */ '../views/asyncFund/index')
  },





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
