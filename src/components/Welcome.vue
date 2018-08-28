<template>
<div class="welcome">
    <div class="main">
      <!-- <Top></Top> -->
      <p class="big_title">时间管理神器</p>
      <div class="logo"></div>
      <p class="middle_title">
        科学管理时间
      </p>

      <p class="small_title">
        你的贴身助手
      </p>
      <router-link to="/user/home" class="start_btn">开始体验</router-link>
    </div>
    <footer>woodfish</footer>
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
* {
  font-family: "PingFang SC", -apple-system, Roboto, "Microsoft YaHei";
}

div.top_tip {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  background-color: #96bda8;
}

p.big_title {
  font-size: 20px;
  text-align: center;
}

.logo {
  border: 5px solid #ede9e6;
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
  margin: 0 auto;
  background-image: url(../assets/logo.png);
  background-size: 100% 100%;
}

p.middle_title {
  font-size: 15px;
  text-align: center;
}

p.small_title {
  font-size: 9px;
  text-align: center;
  color: #adadad;
}

a.open_btn {
  position: absolute;
  right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 5px;
}

a.start_btn {
  display: block;
  text-align: center;
  border-radius: 10px;
  width: 40vh;
  background-color: #96bda8;
  height: 35px;
  line-height: 35px;
  color: #ffffff;
  margin: 0 auto;
}

a.start_btn:hover {
  background-color: #02bda8;
}

.welcome {
  display: flex;
  min-height: 100vh;
  flex-flow: row wrap;
}

.main {
  width: 100%;
  align-self: flex-start;
}

footer {
  width: 100%;
  color: #adadad;
  text-align: center;
  align-self: flex-end;
}
</style>
