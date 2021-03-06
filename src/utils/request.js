import axios from 'axios'
import store from '@/store'
// import {Toast} from 'vant'
// eslint-disable-next-line object-curly-spacing
import {Toast} from 'mand-mobile'

// 根据环境不同引入不同api地址
// eslint-disable-next-line object-curly-spacing
import {baseApi} from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      // Toast.loading({
      //   forbidClick: true
      // })
      Toast.loading('加载中...')
      setTimeout(() => {
        Toast.hide()
      }, 3000)
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.hide()
    // Toast.clear() // vant

    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.hide()
    // Toast.clear() // vant
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
