<template>
  <div>
    <div class="dialog">
      <div v-if="show" class="dialog__inner">
        <slot></slot>
      </div>
    </div>
    <div v-if="show" @click="click" class="dialog__mask"></div>
  </div>
</template>

<script>
export default {
  name: 'idialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    click (e) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes dialog__ani--run {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.5, 0.5, 1);
    transform: scale3d(0.5, 0.5, 1);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes dialog__ani--run {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.5, 0.5, 1);
    transform: scale3d(0.5, 0.5, 1);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}

.dialog {
  position: fixed;
  z-index: 1010;
  left: 50%;
  top: 50%;
  width: 270px;
  text-align: center;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.dialog__inner {
  position: relative;
  background: #ffffff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-animation: dialog__ani--run 0.3s ease-out;
  animation: dialog__ani--run 0.3s ease-out;
  padding: 16px;
  border-radius: 2px;
}

.dialog__mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1009;
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-name: amt-fade-in;
  animation-name: amt-fade-in;
}
</style>
