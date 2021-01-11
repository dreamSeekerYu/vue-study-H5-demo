<template>
  <div class="alert-container">
    <transition name="fade" appear>
      <ucar-mask id="alert-mask" key="mask" v-if="!noMask && show" @click="cancel"></ucar-mask>
    </transition>
    <transition name="scale" appear @afterLeave="destroy">
      <span key="notice" class="alert-notice" v-if="show && type === 'notice'">{{content}}</span>
    </transition>
    <transition name="scale" appear @afterLeave="destroy">
      <div key="alert-success" class="alert-success" v-if="show && type === 'success'">
        <div class="alert-success-img"></div>
        <div class="alert-success-des">{{content}}</div>
      </div>
    </transition>
    <transition name="scale" appear @afterLeave="destroy">
      <div key="tips" class="alert-tips" v-if="show && type === 'tips'">
        <div class="alert-tips-close" @click="close">✕</div>
        <h3>{{content}}</h3>
        <p>{{desc}}</p>
      </div>
    </transition>
    <transition name="scale" appear @afterLeave="destroy">
      <div key="confirm" class="alert-confirm" v-if="show && type === 'confirm'">
        <div class="alert-confirm-content" v-if="content">{{content}}</div>
        <div class="alert-confirm-dsc" :class="{ 'center': center }" v-if="dsc">{{dsc}}</div>
        <ul class="alert-confirm-list" v-if="list && list.length > 0">
          <li :key="item" v-for="item in list">{{item}}</li>
        </ul>
        <div class="alert-confirm-btn-wrapper">
          <span
            class="alert-confirm-btn alert-confirm-btn-cancel"
            @click="cancel"
            v-if="showCancel"
          >{{cancelText || '取消'}}</span>
          <span
            class="alert-confirm-btn alert-confirm-btn-ok"
            :style="{ backgroundColor: backgroundColor, color: color }"
            @click="ok"
          >{{okText || '确定'}}</span>
        </div>
      </div>
    </transition>
    <transition name="scale" appear @afterLeave="destroy">
      <div key="upload" class="alert-upload" v-if="show && type === 'upload'">
        <div class="alert-upload-close" @click="close">✕</div>
        <div class="alert-upload-content" v-if="content">{{content}}</div>
        <div class="alert-upload-dsc" v-if="dsc">{{dsc}}</div>
        <div class="alert-upload-img-wrapper" :class="{ 'error': tips !== '' }">
          <img :src="currentSrc">
          <input type="file" ref="target" @change="upload" accept="image/*">
        </div>
        <div class="alert-upload-ocr-tips" v-if="supportOcr">将根据图片智能识别</div>
        <div class="alert-upload-tips" v-if="tips">{{tips}}</div>
        <div class="alert-upload-btn" @click="findFile">{{init ? '上传图片' : '重新上传'}}</div>
      </div>
    </transition>
  </div>
</template>
<style lang="stylus" scoped>
@import "../styles/variable.styl";

.alert-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 11;
}

.alert-success {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 570px;
  height: 240px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  z-index: 11;

  .alert-success-img {
    width: 80px;
    height: 80px;
    background: url('../assets/icon-success.png') no-repeat 100%/100%;
  }

  .alert-success-img + .alert-success-des {
    margin-top: 20px;
    color: $ucar_font_color;
    font-size: $ucar_font_h4;
  }
}

#alert-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.alert-notice,
.alert-confirm,
.alert-upload {
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  border-radius: 4px;
  z-index: 11;
}

.alert-notice {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 50px 40px;
  font-size: 24px;
  line-height: 1.5;
  color: #fff;
  white-space: nowrap;
  z-index: 12;
}

.alert-confirm {
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  width: 572px;
  color: $ucar_font_assist_color;
  z-index: 12;

  .alert-confirm-content {
    text-align: center;
    font-size: $ucar_font_h4;
    padding: 30px 0;
    line-height: 1;
    font-weight: bold;
    color: $ucar_font_color;
  }

  .alert-confirm-content + .alert-confirm-dsc {
    padding: 0 40px 30px;
    color: $ucar_font_color;
  }

  .alert-confirm-dsc {
    max-height: 525px;
    overflow: auto;
    text-align: left;
    padding: 30px 40px;
    font-size: $ucar_font_h5;
    line-height: 1.8;
    color: $ucar_font_assist_color;

    &.center {
      text-align: center;
    }
  }

  .alert-confirm-list {
    max-height: 525px;
    overflow: auto;
    list-style: disc inside;
    padding-left: 30px;
    text-align: left;
    font-size: $ucar_font_h6;
    margin-bottom: 30px;
    color: $ucar_font_color;

    li {
      line-height: 2;
      list-style: disc inside;
    }
  }

  .alert-confirm-btn-wrapper {
    border-top: 1px solid $ucar_light_border; /*no*/
    display: flex;
    align-items: center;

    .alert-confirm-btn {
      box-sizing: border-box;
      outline: none;
      border: none;
      flex: 1 1 50%;
      display: block;
      font-size: $ucar_font_h4;
      height: 100px;
      line-height: 100px;
    }

    .alert-confirm-btn-cancel {
      background-color: #fff;
    }

    .alert-confirm-btn-ok {
      background-color: $ucar_main_color;
    }

    .alert-confirm-btn-cancel + .alert-confirm-btn-ok {
      border-left: 1px solid $ucar_light_border; /*no*/
    }

    .alert-confirm-btn:first-child {
      margin-left: 0;
    }
  }
}

.fade-top-enter-active,
.fade-top-leave-active {
  transition: all 0.2s linear;
}

.fade-top-enter {
  opacity: 0;
}

.fade-top-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -75%, 0);
}

.scale-enter {
  transform: translate3d(-50%, -50%, 0) scale(.1, .1);
}

.scale-enter-active {
  transition: transform .2s cubic-bezier(0,1.76,1,1);
}

.scale-enter-to {
  transform: translate3d(-50%, -50%, 0) scale(1, 1);
}

.alert-tips {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 650px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 4px;
  z-index: 11;
  padding: 70px 50px;
  background-color: #fff;

  h3 {
    font-weight: bolder;
    text-align: center;
    font-size: 30px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 26px;
    line-height: 1.5;
    color: #333;
  }

  .alert-tips-close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #dedede;
    font-size: 40px;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
  }
}

.alert-upload {
  background-color: #fff;
  border-radius: 8px;
  padding-top: 45px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 690px;
  color: $ucar_font_color;

  .alert-upload-close {
    position: absolute;
    right: 25px;
    top: 25px;
    color: #dedede;
    font-size: 50px;
    vertical-align: middle;
    height: 50px;
    line-height: 50px;
  }

  .alert-upload-content {
    font-size: $ucar_font_h4;
    margin-bottom: 20px;
  }

  .alert-upload-dsc {
    box-sizing: border-box;
    font-size: $ucar_font_h5;
    text-align: left;
    width: 100%;
    padding: 0 45px;
    margin-bottom: 55px;
  }

  .alert-upload-img-wrapper {
    margin-bottom: 10px;
    width: 510px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 320px;
      max-width: 510px;
    }

    input {
      display: none;
    }

    &.error {
      border: 1px solid $ucar_input_require_color; /*no*/
    }
  }

  .alert-upload-ocr-tips {
    display: flex;
    align-items: center;
    font-size: $ucar_font_h5;
    color: $ucar_font_color;

    &::before {
      content: '';
      background: url('../assets/icon-ocr.png') no-repeat 100%/100%;
      margin-right: 10px;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }

  .alert-upload-tips {
    color: $ucar_input_require_color;
    font-size: $ucar_font_h5;
  }

  .alert-upload-btn {
    margin-top: 45px;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    height: 90px;
    line-height: 86px;
    font-size: $ucar_font_h4;
    text-align: center;
    color: $ucar_main_color;
  }
}
</style>
<script>
import valid from '../utils/valid-check'
import canvasResize from '../utils/canvas-resize'
import { uploadImg } from '../api'
export default {
  data () {
    return {
      $$destroyed: false,
      show: true,
      content: '',
      dsc: '',
      type: 'notice',
      showCancel: false,
      backgroundColor: '#fff',
      color: '#daab73',
      list: [],
      center: false,
      noMask: false,
      cancelText: '',
      supportOcr: false,
      cancelCallback: () => {},
      okText: '',
      callback: () => {},
      status: 'pending',
      currentSrc: '',
      tips: '',
      imgType: 0,
      init: true
    }
  },
  methods: {
    ok () {
      this.status = 'ok'
      this.show = false
    },
    cancel () {
      if (this.type === 'notice') return
      this.show = false
      this.status = 'cancel'
    },
    destroy () {
      this.$el.remove()
      this.$$destroyed = true
      if (typeof this.callback === 'function' && this.status === 'ok') { this.callback() }
      if (typeof this.cancelCallback === 'function' && this.status === 'cancel') { this.cancelCallback() }
      this.tips = ''
      this.$destroy()
    },
    findFile () {
      const target = this.$refs.target
      target.click()
    },
    upload () {
      const target = this.$refs.target
      const file = target.files[0]
      if (!file) return
      // 适配中兴手机和部分安卓机型原生浏览器，上传图片后中兴手机自带浏览器会将图片类型的文件的type清空并将文件名后缀去除，部分安卓机型会清空图片类型文件的type
      let fileType = file.type
      if (!fileType) {
        // type为空时生成一个新的type
        let imgName = file.name
        let imgType = imgName
          .split('.')
          .pop()
          .toLowerCase()
        if (imgType === 'jpg' || imgName.split('.').length === 1) {
          // 中兴手机会将文件名后缀去除，所以imgName.split(".").length等于1，此时强制将其type设为jpeg
          imgType = 'jpeg'
        }
        fileType = 'image/' + imgType
      }
      const error = valid.imgFilter(fileType)
      if (error) {
        this.tips = error
        return
      }
      if (file.size > '5000000') {
        this.tips = '上传图片不能超过5M, 请重新上传'
        return
      }
      this.tips = ''
      this.$loading.show()
      const q = new Promise(resolve => {
        canvasResize(file, {
          width: 1200,
          height: 1200,
          crop: false,
          quality: 80,
          rotate: 0,
          callback: data => {
            resolve(data)
          }
        })
      })
      q.then(src => {
        return Promise.resolve(src)
      })
        .then(src => {
          return uploadImg(src, this.imgType)
        })
        .then(
          re => {
            const url = re.replace(/https?:\/\//, 'https://')
            typeof this.callback === 'function' && this.callback(url)
            this.init = false
            this.show = false
          },
          e => {
            this.tips = e.msg || e
          }
        )
    },
    close () {
      this.show = false
    }
  },
  mounted () {
    if (this.type === 'notice') this.noMask = true
    this.tips = ''
  }
}
</script>
