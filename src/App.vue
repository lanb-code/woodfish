<template>
  <div id="app">
      <transition 
        :enter-active-class="transitionName"
      >
        <router-view 
          :key="$route.params.id"
        />
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'animated slideInLeft'
    }
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'animated slideInRight' : 'animated slideInLeft'
    }
  }
}
</script>

<style>
@import "./assets/global.css";
@import "./assets/normalize.css";
@import url(//at.alicdn.com/t/font_808513_zep3k2ki58q.css);
@import "./assets/animate.min.css";

html {
  height: 100vh;
  overflow: hidden;
}
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
