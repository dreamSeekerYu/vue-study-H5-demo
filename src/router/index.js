import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
