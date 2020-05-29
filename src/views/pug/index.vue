s<template lang="pug">
transition(name="sider")
    div.hello
      h3 {{msg}}
      p(:style="{color:'#000'}", :htmlData="msg") 
      p.avatar label
      button(@click="clickMe") clickTest
      <input v-model='msg'/>
      p 
        span(v-text="msg")
</template>

<script>
export default {
  data() {
    return {
      msg: '此页面使用了 pug 模板'
    }
  },
  methods: {
    clickMe() {
      console.log('has click button')
    }
  }
}
</script>

<style scoped lang="stylus">
.hello {
  color: blue;
  font-weight: bold;
}

.top {
  height: 80px;
  line-height: 80px;
  background-color: #0e5792;
  min-width: 800px;
}

.avatar {
  float: left;
  width: 300px;
  color: red;

  img {
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 30px;
  }
}
</style>
