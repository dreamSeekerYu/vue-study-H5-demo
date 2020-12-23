<template>
<div>
  <div style="width:150px">
    <!-- <ellipsis :content="content" :rows="rows" :btnText="''" :ellipsisText="'......'" @click-btn="changRows()">
        </ellipsis> -->
    <div class="ellipsis-component">
      <ellipsis class="ellipsis-content" @click-btn="hideMore(false)" :content="content" :rows="rows" :btnText="btnText" :ellipsisText="ellipsisText" v-if="ellipsis">
      </ellipsis>
      <div class="ellipsis-content" v-else>
        {{ content }}
        <span class="btn" @click.stop="hideMore(true)">折叠</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      content: '啊是的发生的发生sadfa的发顺丰的啊xdafasdfadf是的发生asdf的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的啊是的发生的发生的发顺丰的',
      rows: 5,
      btnText: '查看全部',
      ellipsisText: '...',
      link: 'https://github.com/Lushenggang/vue-overflow-ellipsis',
      ellipsis: true,
      ellipsisConfig: {
        line: 5,
        ellipsis: '…',
        className: '.clamp',
        break_word: true
      }
    }
  },
  methods: {
    changRows() {
      this.rows = 10
    },
    hideMore(ellipsis) {
      console.log('hidemore')
      this.ellipsis = ellipsis
    }
  }
}
</script>

<style lang="scss" scoped></style>
