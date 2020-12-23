<template>
<div>
  <div id="container">
  <!-- <input type="file"> -->
</div>
</div>

</template>

<script>
import {
  blobToImg,
  imgToCanvas,
  watermark
} from '../utils/waterMarker'
export default {
  mounted() {
    let dom = document.querySelector('#container')
    this.imgWatermark(dom, '水印文字')
  },
  methods: {
    imgWatermark(dom, text = '水印文本') {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.onchange = async () => {
        let img = await blobToImg(input.files[0])
        let canvas = imgToCanvas(img)
        let blob = await watermark(canvas, text)
        // 此处将Blob读取到img标签，并在dom内渲染出来；如果是上传文件，可以将blob添加到FormData中
        let newImage = await blobToImg(blob)
        dom.appendChild(newImage)
      }
      input.click()
    }
  }
}
</script>

<style lang="scss" scoped>

#container{
  width: 1600px;
  height: 1500px;
  border: 1px solid #000;

}
</style>
