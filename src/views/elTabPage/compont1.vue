<template>
<div>
  compont1
  <div class="click-box" @click="$emit('changeActiveName', 'second')">click</div>
</div>
</template>

<script>
export default {
  name: 'first',
  created() {

    console.log('%c res....', 'color: red; font-style: italic', 'compont1 is created')
  }
}
</script>

<style lang="scss" scoped>
.click-box {
  margin: 30px;
  padding: 10px;
  border: 1px solid #000;
}
</style>
