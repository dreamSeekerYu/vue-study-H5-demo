<template>
<div class=" page-container">
  <!-- <compont1 v-if="activeName=='first'" @changeActiveName="changeActiveName"></compont1>
  <compont2 v-if="activeName=='second'" @changeActiveName="changeActiveName"></compont2> -->
  <component :is="activeName"  @changeActiveName="changeActiveName"></component>
</div>
</template>

<script>
import compont2 from './compont2'
import compont1 from './compont1'
export default {
  components: {
    compont1,
    compont2,
    first: compont1,
    second: compont2,
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {

    changeActiveName(val) {
      this.activeName = val
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  border: 1px solid #000;
  position: relative;
}
</style>
