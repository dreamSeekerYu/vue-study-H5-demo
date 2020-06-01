<template>
  <div id="app">
    <div class="screen_subject" ref="cutScreen">
      <div class="screen_header">
        <div class="title">
          <div class="real_time">
            <span>{{ currentTime }}</span>
          </div>
          <div class="signal">
            <i class="symbol fa fa-bluetooth-b" aria-hidden="true"></i>
            <i class="symbol fa fa-signal" aria-hidden="true"></i>
            <span class="symbol">4G</span>
            <span class="symbol"> <i class="fa fa-battery-full" aria-hidden="true"></i> 100% </span>
          </div>
        </div>
        <div class="chatroom_name">
          <i class="el-icon-arrow-left"></i>
          <span>
            {{ chatroomDetail.noSpanName }}( <b>{{ chatroomDetail.memberCount }}</b
            >)
          </span>
        </div>
      </div>
      <div class="msg_sub">
        134134
        <!-- <div class="msg_view" v-for="msg in messages" :key="msg.msgId">
          <screen-message :message="msg" :tagetMsgId="msgId" />
        </div>-->
      </div>
      <div class="editor">
        <div class="editor_tools left">
          <img src="../assets/333.jpg" alt />
        </div>
        <span class="input_line"></span>
        <div class="editor_tools right">
          <img src="../assets/111.jpg" alt />
          <img src="../assets/222.jpg" alt />
        </div>
      </div>
    </div>
    <hr />
    <a :href="screenUrl" class="down" download="下载">下载</a>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      currentTime: new Date(),
      chatroomDetail: {noSpanName: '12341234', memberCount: '134132'},
      screenUrl: ''
    }
  },
  methods: {
    saveImage() {
      // 参考链接
      // https://blog.csdn.net/caroline_Luoluo/article/details/83655927
      setTimeout(() => {
        // 创建一个新的canvas
        const _canvas = this.$refs.cutScreen
        // 此处用于解决截图不清晰问题，将生成的canvas放大，然后再填充到原有的容器中就会清晰
        const width = _canvas.offsetWidth
        const height = _canvas.offsetHeight
        const canvas2 = document.createElement('canvas')
        const scale = 2
        canvas2.width = width * scale
        canvas2.height = height * scale
        const context1 = canvas2.getContext('2d')
        if (context1) {
          context1.scale(scale, scale)
        }
        const opts = {
          scale,
          canvas: canvas2,
          // logging: true, //日志开关，便于查看html2canvas的内部执行流程
          width,
          height,
          // 【重要】开启跨域配置
          useCORS: true
        }
        html2canvas(_canvas, opts).then(canvas => {
          const context = canvas2.getContext('2d')
          if (context) {
            context.scale(2, 2)
            context.mozImageSmoothingEnabled = false
            context.webkitImageSmoothingEnabled = false
            context.imageSmoothingEnabled = false
          }
          // canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
          this.screenUrl = canvas.toDataURL()
        })
      }, 1000)
    }
  },
  mounted() {
    this.saveImage()
  }
}
</script>
