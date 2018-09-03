<template>

<div>
  
  <!-- top tip -->
  <div class="top-tip">
    <i class="iconfont icon-fanhui top-tip__return" @click="returnEvent"></i>
    <slot></slot>
    <i class="iconfont icon-toggle top-tip__toggle" @click="toggle"></i>
  </div>

  <!-- actionsheet -->
  <iactionsheet :show.sync="showActionSheet">
    <div class="center">
      <h2 >关于woodfish</h2>
      <p>时间管理工具神器</p>
      <p>作者: colodoo</p>
    </div>
  </iactionsheet>

</div>

</template>

<script>
export default {
  name: 'Top',
  props: {
    // toggle: {
    //   type: Function,
    //   default: function () { }
    // }
  },
  data () {
    return {
      showActionSheet: false,
      showSideMask: false
    }
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
    toggle () {
      this.showActionSheet = !this.showActionSheet
    },
  }
}
</script>

<style scoped>
.top-tip {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #96bda8;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}

.top-tip__return {
  font-size: 35px;
}

.top-tip__toggle {
  font-size: 25px;
}
</style>
