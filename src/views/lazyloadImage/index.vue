<template>
  <div>
    <p class="imgBox" v-for="(item, index) in imgList" :key="index">
      <img class="item-pic" v-lazy="item.imgSrc" />
      <!-- <img class="item-pic" :src="item.imgSrc" /> -->
    </p>
  </div>
</template>

<script>
// 也可以懒加载背景图
export default {
  data() {
    return {
      imgList: [
        {
          imgSrc: require('@/assets/111.jpg')
        },
        {
          imgSrc: require('@/assets/222.jpg')
        },
        {
          imgSrc: require('@/assets/333.jpg')
        },
        {
          imgSrc: require('../../assets/444.jpg')
        },
        {
          imgSrc: require('../../assets/555.jpg')
        },
        {
          imgSrc: require('@/assets/666.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 600px;
  height: 600px;
}
</style>
