# vue-study-H5-demo

常见的移动端项目配置练习 demo

#### 一、@vue/cli 4.4.1 创建的模板

[cli 配合文件官网](https://cli.vuejs.org/config/)

```
  yarn install
  yarn start
  yarn build
```

#### 二、 根目录配置 .npmrc .yarnrc 文件指定淘宝镜像源

#### 三、 尝试配置并使用 pug 模板

下包 npm i -D pug pug-html-loader pug-plain-loader
vue.config.js 文件中配置

```
module.exports = {
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  }
}
```

#### 四、配置并且使用 stylus

暂时自动保存导致自动跟改为 scss 样式，之后修改

npm i stylus stylus-loader -D

```
<style lang="stylus">即可以开始使用stylus
```

#### 五、配置 zeit 自动化上线

```
gitHub 配置 zeit 上线
https://zeit.co/signup 关联 github 账号和 github 项目即可
访问地址：
https://vue-study-h5-demo.now.sh/
```

//TODO:以下的为待完成项

#### 六、配置移动端兼容 px2rem 插件 使用了 postcss-pxtorem

配置 mand ==> rem 时已经使用了 rem 适配

#### 七、配置图片懒加载

```
npm install vue-lazyload --save-dev

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  error:'./static/error.png',
  loading:'./static/loading.png'
})

    <img class="item-pic" v-lazy="newItem.picUrl"/>
    <div v-lazy:background-image="imgLink"></div>
```

#### 配置 better-Scroll

#### 配置别名、配置代理、优化分析插件

#### 配置 splitChunks 单独打包第三方模块

#### 公共库改用 CDN 引入

#### 添加 IE 兼容

#### 生产去掉 console.log

#### 封装 axios / fetch

#### 添加并封装 vconsole 调试工具

```

npm i vconsole
import Vconsole from 'vconsole'
new Vconsole

```

#### 配置常见的移动端的组件库 mand mobile

```

配置按需引入
babel.config.js
"plugins": [
  ["import", {
    "libraryName": "mand-mobile",
    "libraryDirectory": "lib"
  }]
]

```

```

配置 rem 适配

css: {
  loaderOptions: {
    postcss: {
      plugins: [
        require('postcss-pxtorem')({
          rootValue: 37.5, // 换算的基数
          minPixelValue: 2,
          propList: ['*'],
        }),
      ],
    },
  },
},

<!-- .postcssrc.js文件 会被webpack 的配置覆盖掉
  module.exports = {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 100,
        minPixelValue: 2,
        propWhiteList: []
      })
    ]
  }
webpack配置  会被css loader 的配置覆盖掉
  const pxtorem = require('postcss-pxtorem');

  // Postcss
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    minPixelValue: 2,
    propWhiteList: []
  }))

  // Poststylus（使用源码时）
  const poststylus = require('poststylus')

  webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin({
    options: {
      stylus: {
        use: [
          poststylus(pxtorem({
            rootValue: 100,
            minPixelValue: 2,
            propWhiteList: []
          }))
        ]
      }
    }
  })) -->

```

#### 配置 VS code eslint 规范

#### 视频/音频录制

#### 导入导出 excel 功能

#### H5 视频播放器 （xgplayer X5 内核规范使用）

[xgplayer 播放器](https://h5player.bytedance.com/gettingStarted/#安装)
npm install xgplayer

#### 配置二维码插件

npm install --save qrcode.vue
使用参考 src/components/qrcode.vue 文件

#### 配置图片合成插件 html2canvas

#### 配置多环境切换

#### 配置微信 jsSDK

#### 配置埋点与错误处理

#### 配置 markdown 插件 解决 img C/V 上传问题

#### 配置富文本编辑器

#### 调用系统通知

#### 红包动画

#### 配置到公众号里面

需要安全域名备案，以及微信认证（个人主体不能完成认证）暂时不行，以后完善吧

```

```
