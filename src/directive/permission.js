import vue from 'vue'
vue.directive('permossion', {
  inserted: function(el, {arg, value}) {
    if (value && !value.includes(arg)) {
      el.parentNode.removeChild(el)
    }
  }
})


// function checkArray(key) {
//   let arr = ['1', '2', '3', '4']
//   let index = arr.indexOf(key)
//   if (index > -1) {
//     return true // 有权限
//   } else {
//     return false // 无权限
//   }
// }

// const permission = {
//   inserted: function (el, binding) {
//     let permission = binding.value // 获取到 v-permission的值
//     if (permission) {
//       let hasPermission = checkArray(permission)
//       if (!hasPermission) {
//         // 没有权限 移除Dom元素
//         el.parentNode && el.parentNode.removeChild(el)
//       }
//     }
//   },
// }

// export default permission