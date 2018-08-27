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
@import url(//at.alicdn.com/t/font_808513_zep3k2ki58q.css);
@import "./assets/animate.min.css";

html {
  height: 100vh;
  overflow:hidden
}
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow:hidden
}
</style>
