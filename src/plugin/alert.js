import uCarAlert from '../components/alert'


const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)

export default {
  isVNode (node) {
    return typeof node === 'object' && hasOwn(node, 'componentOptions')
  }
}

let instance = null
export default function (Vue) {
  Object.defineProperty(Vue.prototype, '$alert', {
    value (options = {}, timeOut = 2000) {
      if (instance && !instance.$$destroyed) return
      const initObj = {
        data: typeof options === 'string' ? { content: options } : options
      }
      const Alert = Vue.extend(uCarAlert)
      const root = document.getElementById('app')
      if (initObj.callback) {
        initObj.methods = { callback: initObj.callback }
        delete initObj.callback
      }
      instance = new Alert(initObj)
      if (options.jsx && vdom.isVNode(options.jsx)) {
        instance.$slots.default = [options.jsx]
        options.jsx = ''
      }
      instance.$mount()
      root.appendChild(instance.$el)
      if (instance.type === 'notice' || instance.type === 'success') {
        setTimeout(() => {
          instance.show = false
        }, timeOut)
      }
    }
  })
}
