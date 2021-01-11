import Vue from 'vue'
const isWeixin = () => {
  const userAgent = navigator.userAgent
  return /micromessenger/i.test(userAgent)
}
export default class {
  constructor(dataConfig) {
    if (dataConfig && dataConfig.url) {
      this.dataConfig = dataConfig
      this.url = encodeURIComponent(dataConfig.url)
    }
  }

  // qq分享
  qqShare() {
    window.location.href = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=
    ${this.url}%3Fucarfrom%3Dqq_share&title=
    ${this.dataConfig.title}&summary=
    ${this.dataConfig.content}&site=神州专车&pics=
    ${this.dataConfig.img}`
  }

  // 新浪微博分享
  weiboShare() {
    window.open(`http://v.t.sina.com.cn/share/share.php?appkey=830300514&${encodeURI('url=' + this.dataConfig.url +
      '&title=' + this.dataConfig.content)}`)
  }
  //  服务端获取 微信公众号的配置，用于分享使用， 保存在服务端安全
  getWeixinConfig() {
    const params = {}
    params.url = encodeURIComponent(location.href.split('#')[0])
    Vue.prototype.$post('/api/weixin/getShareConfig', params).then((re) => {
      if (re) {
        if (typeof wx === 'undefined') {
          const loadWX = setInterval(() => {
            if (typeof wx !== 'undefined') {
              window.clearInterval(loadWX)
              this.initWX(re)
            }
          }, 1000)
        } else {
          this.initWX(re)
        }
      }
    })
  }

  initWX(config) {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: config.timestamp, // 必填，生成签名的时间戳
      nonceStr: config.nonceStr, // 必填，生成签名的随机串
      signature: config.signature, // 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'hideOptionMenu', 'showOptionMenu'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: this.dataConfig.pyqTitle, // 分享标题
        link: decodeURIComponent(`${this.dataConfig.url}%3Fucarfrom%3Dwechat_share`), // 分享链接
        imgUrl: this.dataConfig.img, // 分享图标
        success() {
          // 用户确认分享后执行的回调函数
        },
        cancel() {
          // 用户取消分享后执行的回调函数
        },
        trigger(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        }
      })
      wx.onMenuShareAppMessage({
        title: this.dataConfig.title, // 分享标题
        desc: this.dataConfig.content, // 分享描述
        link: decodeURIComponent(`${this.dataConfig.url}%3Fucarfrom%3Dwechat_share`), // 分享链接
        imgUrl: this.dataConfig.img, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success() {
          // 用户确认分享后执行的回调函数
        },
        cancel() {
          // 用户取消分享后执行的回调函数
        }
      })
      wx.onMenuShareQQ({
        title: this.dataConfig.title, // 分享标题
        desc: this.dataConfig.content, // 分享描述
        link: decodeURIComponent(`${this.dataConfig.url}%3Fucarfrom%3Dqq_share`), // 分享链接
        imgUrl: this.dataConfig.img, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
      wx.onMenuShareQZone({
        title: this.dataConfig.title, // 分享标题
        desc: this.dataConfig.content, // 分享描述
        link: decodeURIComponent(`${this.dataConfig.url}%3Fucarfrom%3Dqq_share`), // 分享链接
        imgUrl: this.dataConfig.img, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
    wx.error(() => {
    })
  }

  initWeixin() {
    if (!isWeixin()) {
      return
    }
    this.getWeixinConfig()
  }
}
