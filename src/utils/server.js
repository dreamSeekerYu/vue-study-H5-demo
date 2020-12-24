import server from './interceptors'

function myserver () {
  this.nowhandle = null
  this.server = server
}

myserver.prototype.parseRouter = function (name, urlOb) {
  var ob = this[name] = {}
  Object.keys(urlOb).forEach(apiName => {
    ob[apiName] = this.sendMes.bind(this, name, apiName, urlOb[apiName])
    ob[apiName].state = 'ready'
  })
}

myserver.prototype.v = function (vueObj) {
  this.nowhandle = vueObj
  return this
}

myserver.prototype.sendMes = function (moudleName, name, urlConfig, data, bindObj, bindName = '') {
  var config = urlConfig || {}
  config.data = data || {}
  var bindName = bindName || name
  var self = this
  var before = function (res) {
    // 数据相关操作处理
    self.state = 'ready'
    return res
  }
  var defaultFn = function (res) {
    // 默认的数据处理
    if (self.nowhandle) {
      // self.nowhandle[bindName] = res.data
    }
    if (bindObj) {
      bindObj[bindName] = res
    }
    return res
  }

  var success = config.success || defaultFn

  var callback = function (res) {
    return success(res, defaultFn)
  }
  // console.log('%c config....', 'color: red; font-style: italic', JSON.stringify(config, null, 2))
  if (this[moudleName][name].state == 'ready') {
    this.state = 'waiting'
    return this.server(config).then(before).then(callback)
  }
}

window.addEventListener('unhandledrejection', event => {
  event.preventDefault()
})

export default new myserver