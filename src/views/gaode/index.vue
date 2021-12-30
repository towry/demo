<template>
  <div>
    <br />
    <div><h3>似乎是占用大量内存导致页面不断刷新</h3></div>
    <br />
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.start();
  },

  methods: {
    async start() {
      await this.loadScript();
      await this.draw();
    },

    async draw() {
      if (!window.AMap) {
        alert("no amap");
        return;
      }

      const map = new window.AMap.Map(this.$refs.map, {
        zoom: true,
        resizeEnable: true,
      });
      console.log(map);
      window.map = map;
    },

    async loadScript() {
      if (window.AMap) {
        return Promise.resolve(undefined);
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://webapi.amap.com/maps?v=1.4.15";
        document.body.appendChild(script);
        script.onload = () => {
          script.onload = null;
          resolve(undefined);
        };
        script.onerror = () => {
          script.onerror = null;
          reject(new Error("loadScript error"));
        };
      });
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  min-height: 500px;
}
</style>
