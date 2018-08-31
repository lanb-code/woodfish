<template>

  <!-- top tip -->
    <div class="top_tip">
      <i class="iconfont icon-fanhui return" @click="returnEvent"></i>
      <slot></slot>
      <i class="iconfont icon-toggle" @click="toggle"></i>
    </div>

</template>

<script>
export default {
  name: 'Top',
  props: {
    toggle: {
      type: Function,
      default: function () { }
    }
  },
  data () {
    return {}
  },
  computed: {
    currMonth: function () {
      return this.month.month + 1
    }
  },
  methods: {
    returnEvent (e) {
      window.history.back()
    },
  }
}
</script>

<style scoped>
div.top_tip {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  background-color: #96bda8;
  color: #ffffff;
  flex-flow: row wrap;
  display: flex;
}

.top_tip i.icon-toggle {
  font-size: 25px;
  width: 1.5em;
  color: #ffffff;
}

.top_tip span {
  -webkit-flex: 1;
  flex: 1;
}

.top_tip i.return {
  font-size: 35px;
  width: 1.5em;
  color: #ffffff;
  -webkit-flex: 1; /* Safari 6.1+ */
  flex: 1;
}
</style>
