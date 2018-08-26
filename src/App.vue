<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/global.css";
@import "./assets/normalize.css";
@import url(//at.alicdn.com/t/font_808513_ut2yhewrnu8.css);
@import "./assets/animate.min.css";

html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
