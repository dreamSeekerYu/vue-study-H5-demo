import copy from './copy'
import longpress from './longpress'
import ellipsis  from './ellipsis'
// 自定义指令
const directives = {
  copy,
  longpress,
  ellipsis
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}