export const blobToImg = function (blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      let img = new Image()
      img.src = reader.result
      img.addEventListener('load', () => resolve(img))
    })
    reader.readAsDataURL(blob)
  })
}
export const imgToCanvas = function (img) {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  return canvas
}
export const watermark = function (canvas, text) {
  return new Promise((resolve, reject) => {
    let ctx = canvas.getContext('2d')
    // 设置填充字号和字体，样式
    ctx.font = "24px 宋体"
    ctx.fillStyle = "#FFC82C"
    // 设置右对齐
    ctx.textAlign = 'right'
    // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
    ctx.fillText(text, canvas.width - 20, canvas.height - 20)
    canvas.toBlob(blob => resolve(blob))
  })
}