# vue-study-H5-demo

常见的移动端项目配置练习 demo

<span id="top">目录</span>

- [✅ Vue-cli4](#cliorigin)
- [✅ 指定 依赖镜像源](#npmorg)
- [✅ 配置 pug 模板](#pug)
- [✅ 配置 stylus](#stylus)
- [✅ 配置 zeit 自动化部署项目](#zeit)
- [✅ 配置 px2rem ](#px2rem)
- [✅ 配置 配置图片懒加载](#lazyloadimg)
- [配置 better-scroll](#betterscroll)
- [✅ 配置 请求代理以及优化](#proxy)
- [✅ 配置 splitchunks 打包优化](#splitchunks)
- [配置 CDN](#cdn)
- [配置 IE 兼容](#ie)
- [✅ 配置 生产环境关闭 console](#noconsole)
- [配置 请求封装](#request)
- [✅ 配置 移动端调试 vconsole](#vconsole)
- [✅ 配置 mand-mobile](#mandmobile)
- [✅ 配置 eslint pretter 开发规范](#pettereslint)
- [配置 音频视频](#videoaudio)
- [配置 导入导出 exel 表格](#exel)
- [✅ 配置 西瓜视频播放器](#videoplayer)
- [✅ 配置 qrcode 二维码](#qrcode)
- [配置 html2canvas 合成图片以及 pdf 文件](#html2canvas)
- [配置多环境变量](#env)
- [配置 微信 jsSDK](#weixinsdk)
- [配置 埋点与错误处理](#errorhandler)
- [配置 markdowm 编辑器](#markdowm)
- [配置 editor 富文本编辑器](#editor)
- [配置 封装 系统通知 notify](#notify)
- [配置 微信红包](#mony)
- [配置 点赞动画红包](#dianzan)
- [配置 公众号配置](#gongzonghao)
- [配置 全局 scss，以及主题皮肤切换](#scss)
- [配置 多语言](#multilanguage)

#### <span id="cliorigin">✅ 一、@vue/cli 4.4.1 创建的模板 </span>

[cli 配合文件官网](https://cli.vuejs.org/config/)

```
  yarn install
  yarn start
  yarn build
```

[▲ 回顶部](#top)

#### <span id="npmorg">✅ 二、 根目录配置 .npmrc .yarnrc 文件指定淘宝镜像源 </span>

[▲ 回顶部](#top)

#### <span id="pug">✅ 三、 尝试配置并使用 pug 模板</span>

下包 npm i -D pug pug-html-loader pug-plain-loader vue.config.js 文件中配置

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

[▲ 回顶部](#top)

#### <span id="stylus">✅ 四、配置并且使用 stylus</span>

暂时自动保存导致自动跟改为 scss 样式，之后修改

npm i stylus stylus-loader -D

```
<style lang="stylus">即可以开始使用stylus
```

[▲ 回顶部](#top)

#### <span id="zeit">✅ 五、配置 zeit 自动化上线</span>

```
gitHub 配置 zeit 上线
https://zeit.co/signup 关联 github 账号和 github 项目即可
访问地址：
https://vue-study-h5-demo.now.sh/
```

[▲ 回顶部](#top)

#### <span id="px2rem">✅ 六、配置移动端兼容 px2rem 插件 使用了 postcss-pxtorem</span>

配置 mand ==> rem 时已经使用了 rem 适配

[▲ 回顶部](#top)

#### <span id="lazyloadimg">✅ 七、配置图片懒加载</span>

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

[▲ 回顶部](#top)

#### <span id="betterscroll"> 八、配置 better-Scroll</span>

[▲ 回顶部](#top)

#### ✅ <span id="proxy">配置别名、配置代理、优化分析插件</span>

[▲ 回顶部](#top)

#### ✅ <span id="splitchunks">配置 splitChunks 单独打包第三方模块</span>

[▲ 回顶部](#top)

#### <span id="cdn"> 公共库改用 CDN 引入</span>

[▲ 回顶部](#top)

#### <span id="ie"> 添加 IE 兼容</span>

[▲ 回顶部](#top)

#### ✅ <span id="noconsole"> 生产去掉 console.log</span>

保留了测试环境和本地环境的 `console.log`

```bash
npm i -D babel-plugin-transform-remove-console
```

在 babel.config.js 中配置

```javascript
// 获取 VUE_APP_ENV 非 NODE_ENV，测试环境依然 console
const IS_PROD = ['production', 'prod'].includes(process.env.VUE_APP_ENV)
const plugins = []
// 去除 console.log
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', {useBuiltIns: 'entry'}]],
  plugins
}
```

[▲ 回顶部](#top)

#### <span id="request"> 封装 axios / fetch </span>

[▲ 回顶部](#top)

#### ✅ <span id="vconsole">添加并封装 vconsole 调试工具 </span>

```

npm i vconsole
import Vconsole from 'vconsole'
new Vconsole

```

[▲ 回顶部](#top)

#### ✅ <span id="mandmobile">配置常见的移动端的组件库 mand mobile </span>

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

[▲ 回顶部](#top)

#### ✅ <span id="pettereslint">配置 VS code eslint 规范 ✅ Eslint + Pettier 统一开发规范 </span>

VScode 安装 `eslint` `prettier` `vetur` 插件

在文件 `.prettierrc` 里写 属于你的 pettier 规则

```bash
{
   "printWidth": 120,
   "tabWidth": 2,
   "singleQuote": true,
   "trailingComma": "none",
   "semi": false,
   "wrap_line_length": 120,
   "wrap_attributes": "auto",
   "proseWrap": "always",
   "arrowParens": "avoid",
   "bracketSpacing": false,
   "jsxBracketSameLine": true,
   "useTabs": false,
   "overrides": [{
       "files": ".prettierrc",
       "options": {
           "parser": "json"
       }
   }]
}
```

Vscode setting.json 设置

```bash
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
     // 保存时用eslint格式化
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // 两者会在格式化js时冲突，所以需要关闭默认js格式化程序
    "javascript.format.enable": false,
    "typescript.format.enable": false,
    "vetur.format.defaultFormatter.html": "none",
    // js/ts程序用eslint，防止vetur中的prettier与eslint格式化冲突
    "vetur.format.defaultFormatter.js": "none",
    "vetur.format.defaultFormatter.ts": "none",
```

[▲ 回顶部](#top)

#### <span id="videoaudio">视频/音频录制</span>

[▲ 回顶部](#top)

#### <span id="exel">导入导出 exel 功能 </span>

[▲ 回顶部](#top)

#### ✅ <span id="videoplayer"> H5 视频播放器 （xgplayer X5 内核规范使用） </span>

[xgplayer 播放器](https://h5player.bytedance.com/gettingStarted/#安装) npm install xgplayer [▲ 回顶部](#top)

#### ✅ <span id="qrcode"> 配置二维码插件 </span>

npm install --save qrcode.vue 使用参考 src/components/qrcode.vue 文件

[▲ 回顶部](#top)

#### <span id="html2canvas"> 配置图片合成插件 html2canvas </span>

[▲ 回顶部](#top)

#### <span id="env"> 配置多环境切换 </span>

[▲ 回顶部](#top)

#### <span id="weixinsdk"> 配置微信 jsSDK </span>

[▲ 回顶部](#top)

#### <span id="errorhandler"> 配置埋点与错误处理 </span>

[▲ 回顶部](#top)

#### <span id="markdowm"> 配置 markdown 插件 解决 img C/V 上传问题 </span>

[▲ 回顶部](#top)

#### <span id="editor"> 配置富文本编辑器 </span>

[▲ 回顶部](#top)

#### <span id="notify"> 调用系统通知 </span>

[▲ 回顶部](#top)

#### <span id="mony"> 红包动画 </span>

[▲ 回顶部](#top)

#### <span id="dianzan"> 点赞动画 </span>

[▲ 回顶部](#top)

#### <span id="gongzonghao"> 配置到公众号里面 </span>

需要安全域名备案，以及微信认证（个人主体不能完成认证）暂时不行，以后完善吧

```

```

[▲ 回顶部](#top)
