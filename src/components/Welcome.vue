<template>
  <div class="welcome">
    <div class="logo"></div>
    <div class="choice">
      <router-link to="/user/home" class="choice-item left">用户入口</router-link>
      <router-link to="/user/home" class="choice-item">游客入口</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.logo {
  border: 1px solid #333333;
  border-radius: 50%;
  width: 320px;
  height: 320px;
  margin: 0 auto;
  margin-top: 100px !important;
}

.choice {
  height: 80px;
  border-bottom: 1px solid #333333;
}

.choice-item {
  float: left;
  width: 49%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  transition: all 0.8s;
}

.choice-item:hover {
  background-color: #333333;
  color: #ffffff;
}

.left {
  border-right: 1px solid #333333;
}
</style>
