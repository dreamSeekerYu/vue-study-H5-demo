import server from '../utils/server'

import diagApi from './diag'
// ...

function autoBindApi(apiObj) {
  for (let key in apiObj) {
    // console.log('%c 绑定server 方法....', 'color: red; font-style: italic', key, diagApi)
    server.parseRouter(key, apiObj[key])
  }
}

autoBindApi(diagApi)
// ...


export default server