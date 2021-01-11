import Cookie from 'js-cookie'

// 所有的本地存储均为json字符串格式

/**
 *  sessionStorage
 **/
export const setSessionStorage = (key, value) => {
  if (!key) {
    alert(`设置 sessionStorage 失败,请提供正确的 key 值, 不能为 null 或 undefined`)
    return
  }
  if (!value) {
    alert(`设置 sessionStorage 失败,请提供正确的 value 值, 不能为 null 或 undefined`)
    return
  }
  sessionStorage.setItem(key, JSON.stringify(value))
}
export const getSessionStorage = key => {
  let value = sessionStorage.getItem(key)
  if (!value) {
    alert('getSessionStorage 失败，请设置正确的 key 值')
    return
  }
  try {
    if (value.length) {
      value = JSON.parse(value)
    }
  } catch (err) {
    console.warn(`getSessionStorage 获取到的 ${key} 参数不合法,JSON parse 失败, 请修改设置方式为 json 格式\n`, err)
  }
  console.log(value)
  return value
}

// JSON.parse(sessionStorage.getItem(key))
export const clearSessionStorage = () => sessionStorage.clear()
export const removeSessionStorage = key => sessionStorage.removeItem(key)

/**
 *  localStorage
 **/
export const setLocalStorage = (key, value) => {
  if (!key) {
    alert(`设置 localStorage 失败,请提供正确的 key 值, 不能为 null 或 undefined`)
    return
  }
  if (!value) {
    alert(`设置 localStorage 失败,请提供正确的 value 值, 不能为 null 或 undefined`)
    return
  }
  localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorage = key => {
  let value = localStorage.getItem(key)
  if (!value) {
    alert('getLocalStorage 失败，请设置正确的 key 值')
    return
  }
  try {
    if (value.length) {
      value = JSON.parse(value)
    }
  } catch (err) {
    console.warn(`getLocalStorage 获取到的 ${key} 参数不合法,JSON parse 失败, 请修改设置方式为 json 格式\n`, err)
  }
  return value
}
export const removeLocalStorage = key => localStorage.removeItem(key)
export const clearLocalStorage = () => localStorage.clear()

/**
 *  cookies
 */

export const setCookie = (key, value) => Cookie.set(key, value)
export const getCookie = key => Cookie.get(key)

export const removeCookie = key => {
  localStorage.setItem()
}
/**
 *  //创建有效期为7天的cookie
 *    Cookie.set('name', 'value', { expires: 7 });
 *  //为当前页创建有效期7天的cookie
 *    Cookie.set('name', 'value', { expires: 7, path: '' });
 */

/**
 *  token
 */
const token = 'token'
export const getToken = (tokenKey = token) => Cookie.get(tokenKey)
export const setToken = (value, tokenKey = token) => Cookie.set(tokenKey, value)
export const removeToken = (tokenKey = token) => Cookie.remove(tokenKey)

// 整体抛出  参考 storage copy.js 做 key 的校验和加减密，防止信息泄露

export default {
  setSessionStorage,
  getSessionStorage,
  clearSessionStorage,
  removeSessionStorage,

  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,

  setCookie,
  getCookie,
  removeCookie,

  getToken,
  setToken,
  removeToken

}