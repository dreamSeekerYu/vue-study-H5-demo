<template>
<div id="app">
  <el-aside>
    <div id="nav">
      <p v-for="(item, i) in routes" :key="i">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </p>
    </div>
  </el-aside>
  <el-main>
    <router-view />
  </el-main>
</div>
</template>

<script>
import {
  login
} from './utils/login'
import {
  routes
} from './router'

export default {
  data() {
    return {
      routes
    }
  },
  mounted() {
    console.log('验证去除console功能')
    //  需要动态登录验证时打开此功能
    // login()
    //   .then(res => {
    //     console.log('%c 动态登录成功....', 'color: red; font-style: italic', res)
    //   })
    //   .catch(err => {
    //     console.log('%c 取消动态登录....', 'color: red; font-style: italic', err)
    //   })
  }
}
</script>

<style lang="stylus">
#app {
  display flex width 100% height 100vh
}
</style>
