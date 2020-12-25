<template>
<div>
  compont2
  <div class="click-box" @click="$emit('changeActiveName','first')"> click</div>
</div>
</template>

<script>
export default {
  name: 'second',

  created() {
    console.log('%c res....', 'color: red; font-style: italic', 'compont2 is created')
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
