import axios from 'axios'
import NProgress from 'nprogress'
import store from '@/store'
import { MessageBox, Message } from 'element-ui'
import vueRouter from '@/router'

const server = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Content-Type': 'application/json'
  }
})

// request interceptor
server.interceptors.request.use(
  config => {
    NProgress.start()
    if (config.data) {
      config.data = formatParams(config.data)
    }
    if (config.params) {
      config.data = formatParams(config.params)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
server.interceptors.response.use(
  response => {
    NProgress.done()
    const res = response.data
    store.dispatch('user/currentSystem')
    if (res.code === '431' || res.code === '421') {
      var currentSystem = store.getters.currentSystem
      window.location.href = `${currentSystem}/#/login`
      return
    }
    if (res.code === '433') {
      vueRouter.push({ path: '/noAuthority' })
    }
    if (!res.success) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else if (res.code === 404 || res.code === 302 || res.code === 504) {
      // to re-login
      MessageBox.confirm(
        'You have been logged out, you can cancel to stay on this page, or log in again',
        'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }
      ).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    } else {
      return res.data
    }
    // return Promise.reject(new Error(res.msg || 'Error'))
  },
  error => {
    // if (error.toString().includes('421')) {
    //   sessionStorage.removeItem('userId')
    //   router.push(`/login?redirect=${location.hash.replace('#', '')}`)
    //   return true
    // }
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

function formatParams (params) {
  params && Object.keys(params).forEach(key => {
    if (typeof params[key] === 'string') {
      params[key] = params[key].trim()
    } else if (typeof params[key] === 'object') {
      formatParams(params[key])
    }
  })
  return params
}
//  防止请求冒泡，影响整体代码运行
window.addEventListener('unhandledrejection', event => {
  event.preventDefault()
})

export default server
