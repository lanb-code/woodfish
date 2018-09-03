<template>
  <div>
    <div :class="{ 'action-sheet__mask': show }" @click="click"></div>
    <div :class="{ 'action-sheet': true, 'action-sheet--run': show }">
      <slot></slot>
    </div>
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
.action-sheet {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transform: translateY(100%);
}

.action-sheet--run {
  -webkit-transform: translate(0);
  transform: translate(0);
  z-index: 1001;
}

.action-sheet__mask {
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
</style>
