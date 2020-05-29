<template>
  <qrcode-vue class="qrcode" :value="value" :size="size" level="H"></qrcode-vue>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  props: {
    value: {
      default: 'https://vue-study-h5-demo.now.sh'
    }
  },
  data() {
    return {
      size: 120
    }
  },
  components: {
    QrcodeVue
  }
}
</script>
<style lang="stylus"></style>
