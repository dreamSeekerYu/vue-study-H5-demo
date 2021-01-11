export default {
  // data () {
  //   return {
  //     aaa: 123
  //   }
  // },
  methods: {
    confirm(warningText, successFn, successArg = [], rejectFn, rejectArg = []) {
      this.$confirm(warningText)
        .then(res => {
          successFn && successFn(...successArg)
          return
        })
        .catch(err => {
          rejectFn && rejectFn(...rejectArg)
          return
        })
    },
  },
}

export const pageMixins = {
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      console.log('%c this is vue page mixins ....', 'color: red; font-style: italic')
    }
  },


}