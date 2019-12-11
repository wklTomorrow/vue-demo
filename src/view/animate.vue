<template>
  <div>
    <button v-on:click="onClick">Toggle</button>
    <transition name="slide-fade">
      <div class="t" v-if="show">
        animation-fill-mode 属性规定
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    onClick() {
      if (this.show) {
        let x = document.getElementsByClassName("t")[0];
        x.style.width = 100 + "px";
      }

      this.show = !this.show;
      //   debugger
    }
  }
};
</script>
<style lang="less" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  animation: in 0.5s;
  animation-fill-mode: forwards;
  //   transition: all 0.5s;
}
@keyframes in {
  0% {
    height: 0px;
  }
  100% {
    height: 100px;
  }
}
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   height: 0;
  // transform:  translateY(10px);
  opacity: 1;
}
.t {
  height: 100px;
  width: 100px;
  border: 1px solid red;
}
</style>