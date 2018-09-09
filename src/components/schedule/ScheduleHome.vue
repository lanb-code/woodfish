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

.schedule .schedule_add {}
</style>
