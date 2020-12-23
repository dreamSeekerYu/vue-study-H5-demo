<template>
<div id="app">
  <div id="nav">
    <div style="width:150px">
      <ellipsis :content="content" :rows="rows" :btnText="''" :ellipsisText="'......'" @click-btn="changRows()">
      </ellipsis>
      <div class="ellipsis-component">
        <ellipsis class="ellipsis-content" @click-btn="hideMore(false)" :content="content" :rows="rows" :btnText="btnText" :ellipsisText="ellipsisText" v-if="ellipsis">
        </ellipsis>
        <div class="ellipsis-content" v-else>
          {{ content }}
          <span class="btn" @click.stop="hideMore(true)">折叠</span>
        </div>
      </div>
    </div>

    <p>
      <router-link to="/">Home</router-link>| <router-link to="/about">About</router-link>|
      <router-link to="/pug">pug模板</router-link>| <router-link to="/mand-ui">mand-ui</router-link>|
      <router-link to="/lazyloadImage">lazyloadImage</router-link>|
    </p>
    <p>
      <router-link to="/html2camvas">html2camvas</router-link>|<router-link to="/storage">storage</router-link>|
    </p>
  </div>
  <router-view />
</div>
</template>

<script>
import {
  login
} from './utils/login'
export default {
  data() {
    return {
      content: '啊是的发生的发生sadfa的发顺丰的啊xdafasdfadf是的发生asdf的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的',
      rows: 5,
      btnText: '查看全部',
      ellipsisText: '...',
      link: 'https://github.com/Lushenggang/vue-overflow-ellipsis',
      ellipsis: true,
      ellipsisConfig: {
        line: 5,
        ellipsis: '…',
        className: '.clamp',
        break_word: true
      }
    }
  },
  mounted() {
    console.log('验证去除console功能')
      login()
        .then(res => {
          console.log('%c login....', 'color: red; font-style: italic', res)
        })
        .catch(err => {
          console.log('%c res....', 'color: red; font-style: italic', err)
        })
  },
  methods: {
    changRows() {
      this.rows = 10
    },
    hideMore(ellipsis) {
      console.log('hidemore')
      this.ellipsis = ellipsis
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  border 1px solid #000 width 100vw height 100px line-height 50px word-break break-all // overflow hidden
}
</style>
