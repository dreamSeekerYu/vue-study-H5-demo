<template>
<div v-if="show">
  <el-dialog title="动态登录" :visible.sync="show">
    <div>
      <el-input v-model="username" />
      <el-input v-model="password" />
    </div>
    <div slot="footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="success">确 定</el-button>
    </div>
  </el-dialog>
</div>

<!-- 登录框 -->
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      resolve: null,
      reject: null,
      show: false
    }
  },
  methods: {
    showModal() {
      return new Promise((resolve, reject) => {
        this.show = true
        this.resolve = resolve
        this.reject = reject
      })
    },
    hideModal() {
      this.show = false
      this.reject = null
      this.resolve = null
      this.username = ''
      this.password = ''
    },
    success() {
      this.hideModal()
      this.resolve && this.resolve()
    },
    fail() {
      this.hideModal()
      this.reject && this.reject()
    }
  }
}
</script>
