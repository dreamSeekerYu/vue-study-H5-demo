import vue from 'vue'

const height = el => {
  var viewportOffset = el.getBoundingClientRect()
  // console.log(viewportOffset)
  return parseInt(viewportOffset.bottom - viewportOffset.top, 10)
}
const lineheight = el => {
  const style = getComputedStyle(el)
  // console.log(style)
  var lineh = getComputedStyle(el).getPropertyValue('line-height')
  if (String('normal|initial|inherit').indexOf(lineh) > -1) {
    // very specific case
    lineh = parseInt(getComputedStyle(el).getPropertyValue('font-size'), 10) + 2
  }
  return parseInt(lineh, 10)
}
vue.directive('ellipsis', {
  inserted(el, config) {
    const defaultConfig = {
      line: 3,
      ellipsis: '…',
      className: '.clamp',
      break_word: true
    }

    if (typeof config.value === 'object') {
      Object.assign(defaultConfig, config.value)
    } else if (config.value && typeof config.value === 'number') {
      defaultConfig.line = config.value
    }

    // console.log(el.innerText, config, JSON.stringify(config.value, null, 2))
    const props = {
      height: height(el),
      lineheight: lineheight(el)
    }
    // console.log('dom 节点相关信息', props)
    // 获取dom 相关信息
    // 计算每行的字符数
    // 计算现有的内容的长度
    // 截取对应的长度,格式化
    // 添加省略号标记
    const text = el.childNodes[0].nodeValue

    console.log(text)

    el.innerText = text.slice(30) + defaultConfig.ellipsis
  }
})
