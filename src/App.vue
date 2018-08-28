<template>
  <div id="app">
      <transition :name="transitionName">
        <router-view 
          class="router-view"
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
      transitionName: ''
    }
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
@import "./assets/global.css";
@import "./assets/normalize.css";
@import url(//at.alicdn.com/t/font_808513_zep3k2ki58q.css);
@import "./assets/animate.min.css";
</style>
