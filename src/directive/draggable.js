const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}
export default draggable

/**

<template>
  <div class="el-dialog" v-draggable></div>
</template>

需求：实现一个拖拽指令，可在页面可视区域任意拖拽元素。
思路：
设置需要拖拽的元素为相对定位，其父元素为绝对定位。
鼠标按下`(onmousedown)`时记录目标元素当前的 `left` 和 `top` 值。
鼠标移动`(onmousemove)`时计算每次移动的横向距离和纵向距离的变化值，并改变元素的 `left` 和 `top` 值
鼠标松开`(onmouseup)`时完成一次拖拽

 */