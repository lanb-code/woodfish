<template>

  <div>

    <Top></Top>

    <div class="schedule">
      <div class="schedule_add" v-if="isEmpty">
        <i class="iconfont icon-add"></i>
        <span class="tip">添加日程</span>
      </div>
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

.schedule {
  height: 90vh;
  line-height: 90vh;
}

.schedule .schedule_add {
  text-align: center;
}
</style>
