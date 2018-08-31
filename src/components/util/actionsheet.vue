<template>
  <div>
    <div :class="{ 'actionsheet__mask': show }" @click="click"></div>
    <div :class="{ 'actionsheet': true, 'actionsheet--run': show }"></div>
  </div>
</template>

<script>
export default {
  name: 'iactionsheet',
  props: {
    show: {
      default: false,
      type: Boolean
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
.actionsheet__mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  transition: all 0.5s;
}

.actionsheet {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transform: translateY(100%);
}

.actionsheet--run {
  -webkit-transform: translate(0);
  transform: translate(0);
  z-index: 1001;
}
</style>
