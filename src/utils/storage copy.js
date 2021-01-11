export default {
  /**
   * 64位编码程序
   */
  enBase64 (a) {
    let b = ''
    for (let e, f, g, c = 0, d = a.length,
      h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; d > c;) {
      e = 255 & a.charCodeAt(c++)
      if (c === d) {
        b += h.charAt(e >> 2)
        b += h.charAt((3 & e) << 4)
        b += '=='
        break
      }
      f = a.charCodeAt(c++)
      if (c === d) {
        b += h.charAt(e >> 2)
        b += h.charAt((3 & e) << 4 | (240 & f) >> 4)
        b += h.charAt((15 & f) << 2)
        b += '='
        break
      }
      g = a.charCodeAt(c++)
      b += h.charAt(e >> 2)
      b += h.charAt((3 & e) << 4 | (240 & f) >> 4)
      b += h.charAt((15 & f) << 2 | (192 & g) >> 6)
      b += h.charAt(63 & g)
    }
    return b
  },
  /**
   * 64位解码程序
   */
  deBase64 (a) {
    let h = ''
    for (let b, c, d, e, f = 0, g = a.length, i = [-1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1,
      -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1,
      -1, -1, -1, -1]; g > f;) {
      do {
        b = i[255 & a.charCodeAt(f++)]
      } while (g > f && b === -1)
      if (b === -1) break
      do {
        c = i[255 & a.charCodeAt(f++)]
      } while (g > f && c === -1)
      if (c === -1) break
      h += String.fromCharCode(b << 2 | (48 & c) >> 4)
      do {
        d = 255 & a.charCodeAt(f++)
        if (d === 61) return h
        d = i[d]
      } while (g > f && d === -1)
      if (d === -1) break
      h += String.fromCharCode((15 & c) << 4 | (60 & d) >> 2)
      do {
        e = 255 & a.charCodeAt(f++)
        if (e === 61) return h
        e = i[e]
      } while (g > f && e === -1)
      if (e === -1) break
      h += String.fromCharCode((3 & d) << 6 | e)
    }
    return h
  },
  /**
   * 加密字符串
   * @str 待加密字符串
   * @key 密钥  可选，若无密钥传入，则会生成一枚随机密钥，并在结果中传出
   */
  enString (str, key) {
    // 如果没有key, 取一个随机数做为密钥
    key = key || this.getRandom()
    // 将经过url编码的字符串进行base64位编码
    str = this.enBase64(encodeURIComponent(str))
    // 加密操作
    let keyLen = key.length
    let strLen = str.length
    let Str = ''
    let i = 0
    for (; i < strLen; i += 1) {
      Str += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % keyLen))
    }
    // 如果有key, 传出base64编码后的加密字符串, 如果没有key, 传出加密字符串与key
    return key ? this.enBase64(Str) : {
      str: this.enBase64(Str),
      key: key
    }
  },
  /**
   * 解密字符串
   * @str 待解密字符串
   * @key 密钥
   */
  deString (str, key) {
    str = this.deBase64(str)
    let keyLen = key.length
    let strLen = str.length
    let Str = ''
    let i = 0
    for (; i < strLen; i += 1) {
      Str += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % keyLen))
    }
    return decodeURIComponent(this.deBase64(Str))
  },
  /**
   * cookie
   */
  getCookies (key) {
    let val = ''
    // 查找cookie中的内容
    document.cookie.split(';').forEach((str) => {
      str = str.trim()
      if (str.indexOf(key) === 0) {
        val = str.substring(key.length + 1, str.length)
        return false
      }
    })
    if (!val) return null
    // 检查内容是否经过加密
    if (val.indexOf('en:/str,') === 0) {
      val = this.deString(val.slice(8), key)
    } else {
      this.removeCookies(key)
      return null
    }
    try {
      return JSON.parse(val)
    } catch (err) {
      return val
    }
  },
  setCookies (key, val, expires) {
    if (expires) {
      const date = new Date()
      date.setTime(date.getTime() + (expires * 1e3))
      expires = '; expires=' + date.toGMTString()
    } else {
      expires = ''
    }
    val = JSON.stringify(val)
    // 加密字符串值后存入cookie
    document.cookie = key + '=en:/str,' + this.enString(val, key) + expires + '; path=/'
  },
  removeCookies (key) {
    const date = new Date()
    date.setTime(date.getTime() - 1)
    document.cookie = key + '=;expires=' + date.toGMTString() + '; path=/'
  },
  /**
   * web storage
   */
  hasStorage () {
    return 'localStorage' in window
  },
  /**
   * 记录本次页面读取后对缓存的操作(暂时)
   */
  initStorageEvent (key, oldValue, storageType) {
    if (!this.storageList) {
      this.storageList = {}
    }
    // 检查内容是否已经存在
    for (let storageKey in this.storageList) {
      if (storageKey === key + '_' + storageType) return false
    }
    // 记入缓存列表
    this.storageList[key + '_' + storageType] = oldValue
  },
  /**
   * 还原本页面对缓存的操作
   */
  clearStorageList () {
    if (!this.storageList) return false
    let storageKey
    for (let key in this.storageList) {
      storageKey = key.split('_')[0]
      if (key.split('_')[1] === 'storage') {
        this.setStorage(storageKey, this.storageList[key])
      } else {
        this.setSession(storageKey, this.storageList[key])
      }
    }
  },
  /**
   * 特殊手机标记，部分sessionstorage支持不好的手机类型，转为使用localstorage处理
   * @returns {boolean}
   */
  isSpecialDevice () {
    let userAgent = navigator.userAgent
    return userAgent && (userAgent.indexOf('vivo') > -1 || userAgent.indexOf('OPPO') > -1)
  },
  /**
   * set local storage
   * @key string 必须
   * @val string || object 必须
   * @expires timesTamp 可选，如未传入则默认为永久有效(如浏览器不支持storage则录入cookie中，三年有效)
   */
  setStorage (key, val, expires) {
    if (!this.hasStorage()) return this.setCookies(key, val, expires || 9.46e7)
    val = JSON.stringify(val)
    // 加密字符串值
    val = this.enString(val, key)
    // 如果有有效时长，写入有效期
    if (expires) {
      let date = new Date()
      date.setTime(date.getTime() + (expires * 1e3))
      expires = ';expires:' + date.toGMTString()
    } else {
      expires = ''
    }
    // 存储本次写入前该键所对应的值(每页面刷新前仅记录一次)
    this.initStorageEvent(key, this.getStorage(key), 'storage')
    // 清除原有缓存(避免iphone中偶尔出现的奇怪错误)
    this.removeStorage(key)
    // 正常写入缓存
    localStorage.setItem(key, 'en:/str;' + val + expires)
  },
  getStorage (key) {
    if (!this.hasStorage()) return this.getCookies(key)
    let val = localStorage.getItem(key)
    let data = []
    if (!val) {
      return val
    }
    if (val.indexOf(';expires:') > 0) {
      data = val.split(';expires:')
      val = data[0]
      // 有效期判断
      if (new Date().getTime() >= new Date(data[1]).getTime()) {
        this.removeStorage(key)
        return null
      }
    }
    // 判断是否加密，如未加密则清除本条内容
    if (val.indexOf('en:/str;') === 0) {
      val = this.deString(val.slice(8), key)
    } else {
      localStorage.removeItem(key)
      return null
    }
    if (/^\d{16,}$/.test(val)) {
      return val
    }
    try {
      return JSON.parse(val)
    } catch (err) {
      return (val)
    }
  },
  removeStorage (key) {
    if (!this.hasStorage()) {
      this.removeCookies(key)
    } else {
      // 存储本次写入前该键所对应的值(每页面刷新前仅记录一次)
      this.initStorageEvent(key, this.getStorage(key), 'storage')
      localStorage.removeItem(key)
    }
  },
  /**
   * set local storage
   * @key string 必须
   * @val string || object 必须
   * @expires timesTamp 可选，如未传入则默认为永久有效(如浏览器不支持storage则录入cookie中，退出浏览器后失效)
   */
  setSession (key, val, noEncrypt) {
    if (this.isSpecialDevice()) {
      return this.setStorage('session-' + key, val)
    }
    if (!this.hasStorage()) return this.setCookies(key, val)
    val = JSON.stringify(val)
    if (!noEncrypt) {
      val = this.enString(val, key)
    }
    // 存储本次写入前该键所对应的值(每页面刷新前仅记录一次)
    this.initStorageEvent(key, this.getSession(key), 'session')
    // 清除原有缓存(避免iphone中偶尔出现的奇怪错误)
    this.removeSession(key)
    // 正常写入缓存
    sessionStorage.setItem(key, 'en:/str;' + val)
  },
  getSession (key, noEncrypt) {
    if (this.isSpecialDevice()) {
      return this.getStorage('session-' + key)
    }
    if (!this.hasStorage()) return this.getCookies(key)
    let val = sessionStorage.getItem(key)
    if (!val) {
      return val
    }
    if (!noEncrypt) {
      // 判断是否加密，如未加密则清除本条内容
      if (val.indexOf('en:/str;') === 0) {
        val = this.deString(val.slice(8), key)
      } else {
        this.removeSession(key)
        return null
      }
    }
    if (/^\d{16,}$/.test(val)) {
      return val
    }
    try {
      return JSON.parse(val)
    } catch (err) {
      return val
    }
  },
  removeSession (key) {
    if (this.isSpecialDevice()) {
      return this.removeStorage('session-' + key)
    }
    if (!this.hasStorage()) {
      this.removeCookies(key)
    } else {
      // 存储本次写入前该键所对应的值(每页面刷新前仅记录一次)
      this.initStorageEvent(key, this.getSession(key), 'session')
      sessionStorage.removeItem(key)
    }
  }
}
