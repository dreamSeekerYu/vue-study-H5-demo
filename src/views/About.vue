<template>
  <div>
    <h1>This is an about page 西瓜视频播放器</h1>
    <videoPlayer />
    <h1>系统通知 notify</h1>
    <notify></notify>
  </div>
</template>

<script>
import videoPlayer from '@/components/xgplayer.vue'
import notify from '@/components/notify.vue'

export default {
  components: {
    // HelloWorld
    videoPlayer,
    notify
  }
}
</script>

<style scoped></style>
