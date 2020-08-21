<template>
  <div class="g-pt-20">
    <div style="text-align: center;">
      <v-btn @click="play" :disabled="!animation">play</v-btn>
    </div>

    <v-btn text @click="play" :disasbled="!animation">
      <div class="btn-static job-menu" v-show="!animation"></div>
      <div class="btn-animate job-menu" v-show="animation"></div>
    </v-btn>

    <div id="canvas"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import jobMenu from "@/assets/job-menu.svg";
import animationData from "@/assets/json/lottie-job-menu.json";

export default {
  data() {
    return {
      animation: null,
      jobMenu,
    };
  },
  mounted() {
    this.draw();
  },

  methods: {
    draw() {
      this.animation = lottie.loadAnimation({
        container: this.$el.querySelector(".btn-animate"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        // path: animationData,
      });
    },

    play() {
      if (!this.animation) {
        return;
      }
      this.animation.goToAndPlay(0);
    },
  },
};
</script>

<style lang="scss">
#canvas {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

$btn-size: 100px;

.job-menu {
  width: $btn-size;
  height: $btn-size;
}

.job-menu.btn-static {
  background-image: url("~@/assets/job-menu.svg");
}
</style>
