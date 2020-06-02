<template>
  <div id="app">
    <div id="nav">
      <p>
        <router-link to="/">Home</router-link>| <router-link to="/about">About</router-link>|
        <router-link to="/pug">pug模板</router-link>| <router-link to="/mand-ui">mand-ui</router-link>|
        <router-link to="/lazyloadImage">lazyloadImage</router-link>|
      </p>
      <p><router-link to="/html2camvas">html2camvas</router-link>|<router-link to="/storage">storage</router-link>|</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('验证去除console功能')
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
</style>
