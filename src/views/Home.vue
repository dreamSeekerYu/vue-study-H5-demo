<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    -->
    <h3>采用qrcode.vue生成二维码</h3>
    <div class="qrcode-box">
      <dl>
        <dd>
          <qrcode />
        </dd>
        <dt>vue-H5 demo</dt>
      </dl>
      <dl>
        <dd>
          <qrcode :value="youdaoUrl" />
        </dd>
        <dt>有道云分享</dt>
      </dl>
    </div>
    <hr />

    <li class="big">big size</li>
    <li class="mid">mid size</li>
    <li class="min">min size</li>
    <hr />
    <videoPlayer />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import qrcode from '@/components/qrcode.vue'

import videoPlayer from '@/components/xgplayer.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    qrcode,
    videoPlayer
  },
  data() {
    return {
      youdaoUrl: 'http://note.youdao.com/noteshare?id=cdceb903fc357fcd530728e5c613dfd8'
    }
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

.qrcode-box {
  // margin-top: 40px;
  // margin-bottom: 40px;
  display: flex;
  // justify-content: space-around;
  text-align: center;

  >dl {
    padding: 25px;
  }
}
</style>
