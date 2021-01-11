<template>
  <transition name="fade" appear @afterLeave="destroy">
    <div class="loading-container" @touchmove.stop.prevent v-if="show">
      <div class="loading-wrapper" v-if="!text">
        <div class="loading-circle"></div>
        <div class="loading-dsc">正在加载中…</div>
      </div>
      <div class="loading-wrapper-text" v-else>
        <div class="loading-circle"></div>
        <div class="loading-wrapper-text-des">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<style lang="stylus">
@import '../styles/variable.styl';

@keyframes rotate {
  to {
    transform: rotateZ(360deg);
  }
}

.loading-wrapper-text {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 570px;
  height: 240px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  .loading-circle {
    width: 80px;
    height: 80px;
    padding: 0;

    &::before {
      border-width: 3px;
    }
  }

  .loading-circle + .loading-wrapper-text-des {
    margin-top: 20px;
    color: $ucar_font_color;
    font-size: $ucar_font_h4;
  }
}

.loading-wrapper {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transform: translate3d(-50%, -50%, 0);
}

.loading-circle {
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 20px;
  animation: rotate 0.5s ease-in infinite;
}

.loading-dsc {
  margin-top: 30px;
  color: #f3b549;
  font-size: 32px;
  text-align: center;
}

.loading-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .8);
  box-sizing: border-box;
  z-index: 1010;
}

.loading-circle::before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 60%;
  height: 60%;
  display: block;
  border-radius: 50%;
  border-width: 13px;
  border-style: solid;
  border-color: transparent #f3b549 #f3b549 transparent;
  box-sizing: border-box;
}
</style>

<script>
export default {
  data () {
    return {
      show: true,
      type: 'normal',
      text: '',
      $$destroyed: false
    }
  },

  methods: {
    destroy () {
      this.$el.remove()
      this.$$destroyed = true
      this.$destroy()
    }
  }
}
</script>
