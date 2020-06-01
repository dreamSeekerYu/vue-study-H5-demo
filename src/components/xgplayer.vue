<template>
  <div>
    <h3>西瓜视频播放器，支持封面加载</h3>
    <div id="mse"></div>
  </div>
</template>

<script>
import Player from 'xgplayer'
export default {
  mounted() {
    const player = new Player({
      id: 'mse',
      url: 'https://download.10101111cdn.com/ucarcdnstore/mmc/mmc/bw_video2.mp4',
      width: 375,
      height: 200,
      autoplay: true,
      videoInit: true,
      'x5-video-player-type': 'h5',
      poster: 'https://p.ssl.qhimg.com/dmfd/420_627_/t01db04cce0d6011bf8.jpg'
    })
    player
  }
}
</script>

<style scoped></style>
