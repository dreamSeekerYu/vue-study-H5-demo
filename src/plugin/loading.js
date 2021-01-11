import loading from '../components/loading'

let instance = null
export default function (Vue) {
  Object.defineProperty(Vue.prototype, '$loading', {
    value: {
      show (text) {
        if (instance && !instance.$$destroyed && instance.show) return
        const Loading = Vue.extend(loading)
        const root = document.getElementById('app')
        instance = new Loading({data: {text}}).$mount()
        root.appendChild(instance.$el)
      },
      hidden () {
        if (!instance) return
        instance.show = false
      }
    }
  })
}
