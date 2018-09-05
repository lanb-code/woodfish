<template>

  <div>

    <Top>
      添加日程
    </Top>

    <div class="schedule">
      <!-- <div class="schedule_add" v-if="isEmpty">
        <i class="iconfont icon-add"></i>
        <span class="tip">添加日程</span>
      </div> -->

      <div class="form">
        <div class="form__item">
          <lable>标题</lable>
          <input type="text" placeholder="请输入标题"/>
        </div>

        <div class="form__item">
          <lable>日期</lable>
          <input type="text" placeholder="请输入日期"/>
        </div>

        <div class="form__item">
          <lable>内容</lable>
          <textarea placeholder="请输入内容"></textarea>
        </div>

        <div class="form__item">
          <lable>重要程度</lable>
          <select>
            <option>一般</option>
            <option>紧急</option>
            <option>重要</option>
          </select>
        </div>

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
  font-size: 35px;
}

span.tip {
  font-size: 35px;
}

.schedule {
  height: 100vh;
  padding: 16px;
}

.schedule .schedule_add {
}

.form__item {
  margin-bottom: 16px;
}

.form__item lable {
  float: left;
  display: block;
  padding: 9px 15px;
  width: 80px;
  font-size: 14px;
  text-align: right;
}

.form__item input,
.form__item textarea,
.form__item select {
  padding: 8px;
  border: 1px solid #e6e6e6;
  transition: all 0.3s;
  border-radius: 2px;
}

.form__item textarea {
  resize: none;
}

.form__item input:focus,
.form__item textarea:focus,
.form__item select:focus {
  border: 1px solid #96bda8;
}

::-webkit-input-placeholder {
  font-size: 14px;
  /* WebKit browsers */
  color: #999;
}
:-moz-placeholder {
  font-size: 14px;
  /* Mozilla Firefox 4 to 18 */
  color: #999;
}
::-moz-placeholder {
  font-size: 14px;
  /* Mozilla Firefox 19+ */
  color: #999;
}
:-ms-input-placeholder {
  font-size: 14px;
  /* Internet Explorer 10+ */
  color: #999;
}
</style>
