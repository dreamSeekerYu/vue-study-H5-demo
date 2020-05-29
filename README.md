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

//TODO:以下的为待完成项

#### 配置移动端兼容 px2rem 插件

#### 配置图片懒加载

#### 配置 better-Scroll

#### 配置别名、配置代理、优化分析插件

#### 配置 splitChunks 单独打包第三方模块

#### 公共库改用 CDN 引入

#### 添加 IE 兼容

#### 生产去掉 console.log

#### 封装 axios / fetch

#### 添加并封装 vconsole 调试工具

#### 配置常见的移动端的组件库

#### 配置 VS code eslint 规范

#### 视频/音频录制

#### 导入导出 excel 功能

#### H5 视频播放器 （xgplayer X5 内核规范使用）

#### 配置二维码插件

#### 配置图片合成插件 html2canvas

#### 配置多环境切换

#### 配置微信 jsSDK

#### 配置埋点与错误处理

#### 配置 markdown 插件 解决 img C/V 上传问题

#### 配置富文本编辑器

#### 调用系统通知

#### 红包动画
