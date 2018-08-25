<template>
  <div class="schedul">
    <div v-if="isEmpty">
      <i class="iconfont icon-add"></i>
      <span class="tip">添加日程</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEmpty: true
    }
  }
}
</script>

<style scoped>
i.icon-add {
  font-size: 50px;
}

span.tip {
  font-size: 50px;
}

.schedul {
  margin: 10px;
}
</style>
