import vue from 'vue'
vue.directive('permossion', {
  inserted: function(el, {arg, value}) {
    if (value && !value.includes(arg)) {
      el.parentNode.removeChild(el)
    }
  }
})
