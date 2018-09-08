<template>

  <div>

    <Top>
      添加日程
    </Top>

    <div class="schedule">

      <div class="form">
        <div class="form__item">
          <label>标题</label>
          <input type="text" placeholder="请输入标题" v-model="title"/>
        </div>

        <div class="form__item">
          <label>日期</label>
          <!-- <input type="text" placeholder="请输入日期" v-model="date" /> -->
          <idatetime :day.sync="date"></idatetime>
        </div>

        <div class="form__item">
          <label>内容</label>
          <textarea placeholder="请输入内容" v-model="content"></textarea>
        </div>

        <div class="form__item">
          <label>重要程度</label>
          <select v-model="level">
            <option value="1">一般</option>
            <option value="2">紧急</option>
            <option value="3">重要</option>
          </select>
        </div>

        <div class="form__item">
          <label></label>
          <input type="button" @click="click" value="提交" />
        </div>

      </div>

    </div>

    <idialog :show.sync="show">
      <ol>
        <li>
          <span class="red"></span>&nbsp;{{date}}&nbsp;{{title}}
        </li>
      </ol>
    </idialog>

  </div>
  
</template>

<script>
export default {
  data () {
    return {
      isEmpty: true,
      show: false,
      title: '',
      date: '',
      content: '',
      level: '1'
    }
  },
  methods: {
    click () {
      this.show = true
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

.form__item label {
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

.form__item input[type="button"],
.form__item input[type="submit"] {
  background-color: #ffffff;
}

.form__item input[type="button"]:hover,
.form__item input[type="submit"]:hover {
  background-color: #96bda8;
  color: #ffffff;
}

.form__item textarea {
  resize: none;
}

.form__item input:focus,
.form__item textarea:focus,
.form__item select:focus {
  border: 1px solid #96bda8;
}

</style>
