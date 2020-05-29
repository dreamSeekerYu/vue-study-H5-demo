<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <li class="big">big size</li>
    <li class="mid">mid size</li>
    <li class="min">min size</li>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
// img {
// width: 250px;
// }

// .big {
// font-size: 30px;
// height: 30px;
// line-height: 30px;
// }

// .mid {
// font-size: 20px;
// height: 20px;
// line-height: 20px;
// }

// .min {
// font-size: 12px;
// height: 12px;
// line-height: 12px;
// }
img {
  width: 500px;
}

.big {
  font-size: 60px;
  height: 60px;
  line-height: 60px;
}

.mid {
  font-size: 40px;
  height: 40px;
  line-height: 40px;
}

.min {
  font-size: 25px;
  height: 25px;
  line-height: 25px;
}
</style>
