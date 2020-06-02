<markdown>
调用原生功能需要授权，类似于微信分享
</markdown>

<template>
  <div>
    <div class="notification" @click="notifyMe()">notification</div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    notifyMe() {
      if (!('Notification' in window)) {
        // 先检查浏览器是否支持
        alert('This browser does not support desktop notification')
      } else if (Notification.permission === 'granted') {
        // 检查用户是否同意接受通知
        // If it's okay let's create a notification
        var notification = new Notification('你好snowball:', {
          dir: 'auto', // auto（自动）, ltr（从左到右）, or rtl（从右到左）
          lang: 'zh', // 指定通知中所使用的语言。这个字符串必须在 BCP 47 language tag 文档中是有效的。
          tag: 'testTag' + Math.random(), // 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。每次值不要一样，不然不会触发通知
          icon: 'https://hao1.qhimg.com/t012ca96bd4815f49e7.png', // 提示时候的图标
          body: '今天是个好天气111' + Math.random() // 一个图片的URL，将被用于显示通知的图标。
        })
        console.log(notification)
      } else if (Notification.permission !== 'denied') {
        // 否则我们需要向用户获取权限
        Notification.requestPermission(function(permission) {
          // 如果用户同意，就可以向他们发送通知
          if (permission === 'granted') {
            const notification = new Notification('你好snowball:', {
              dir: 'auto', // auto（自动）, ltr（从左到右）, or rtl（从右到左）
              lang: 'zh', // 指定通知中所使用的语言。这个字符串必须在 BCP 47 language tag 文档中是有效的。
              tag: 'testTag' + Math.random(), // 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。
              icon: 'https://hao1.qhimg.com/t012ca96bd4815f49e7.png', // 提示时候的图标
              body: '今天是个好天气222' // 一个图片的URL，将被用于显示通知的图标。
            })
            console.log(notification)
          }
        })
      }
      console.log(Notification.permission)
      console.log('no-no-no-no')
      // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
      // 出于尊重，我们不应该再打扰他们了
    }
  }
}
</script>

<style scoped>
.notification {
  width: 200px;
  height: 50px;
  padding: 20px;
  line-height: 50px;
  text-align: center;
  background: red;
  border-radius: 5px;
  font-size: 30px;
  position: absolute;
  left: 45%;
}
</style>
