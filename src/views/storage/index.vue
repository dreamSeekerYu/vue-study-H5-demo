<template>
  <div>
    <h3>
      sesseionStorage
    </h3>
    <p>
      <button @click="setSessionStorage('session', {abc: 123})">设置</button>
      <button @click="setSessionStorage()">设置无key</button>
      <button @click="setSessionStorage('session')">设置无value</button>
      <button @click="item = getSessionStorage('123')">获取 不到</button>
      <button @click="item = getSessionStorage('session')">获取 到</button>
      <button @click="item = getSessionStorage('item')">获取 到 解析不正确</button>{{ item }}
      <button @click="removeSessionStorage('session')">删除某一项</button>
      <button @click="clearSessionStorage()">删除所有</button>
    </p>
    <h3>localStorage</h3>
    <p>
      <button @click="setLocalStorage('local', {abc: 123})">设置</button>
      <button @click="setLocalStorage()">设置无key</button>
      <button @click="setLocalStorage('local')">设置无value</button>
      <button @click="item = getLocalStorage('123')">获取 不到</button>
      <button @click="item = getLocalStorage('local')">获取 到</button>
      <button @click="item = getLocalStorage('item')">获取 到 解析不正确</button>{{ item }}
      <button @click="removeLocalStorage('local')">删除某一项</button>
      <button @click="clearLocalStorage()">删除所有</button>
    </p>
    <h3>
      cookie
    </h3>
    <p>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </p>
    <h3>
      token
    </h3>
    <p>
      <button @click="setToken(token)">设置token</button>
      <button @click="getTokenStr = getToken()">获取token</button>
      <button @click="removeToken()">
        删除token
      </button>
      {{ getTokenStr }}
    </p>
  </div>
</template>

<script>
import {
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
} from '@/utils/storage.js'
export default {
  data() {
    return {
      item: '',
      token: 'BXZP-MYDE-3F1Y-GLO6|60150a697e453920cbffc065e45a2b147460d6d7|lin',
      getTokenStr: '',
      obj: {a: 1}
    }
  },
  methods: {
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
  },
  mounted() {
    this.setSessionStorage('item', 12341234)
    this.setLocalStorage('item', 12341234)
    setInterval(() => {
      this.getTokenStr = this.getToken()
    }, 200)
  }
}
</script>

<style scoped></style>
