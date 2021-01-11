<template>
<div>
  asyncFund
  <el-button @click="nextStepErr">next step 抛出错误</el-button><br>
  <el-button @click="nextStep">next step2 捕获处理错误</el-button>
</div>
</template>

<script>
export default {
  methods: {
    async nextStepErr() {
      await this.$confirm('确定吗？')
      await this.$notify({
        title: "你去找上帝吧！",
        message: "他可以解决你的问题",
        type: "success",
      })
    },
    nextStep() {
      this.confirm('确定吗？', this.notify, [], this.cancalNotify)
    },
    notify() {
      this.$notify({
        title: "你去找上帝吧！",
        message: "他可以解决你的问题",
        type: "success",
      })
    },
    cancalNotify() {
      this.$notify({
        title: "你以取消！",
        type: "error",
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
