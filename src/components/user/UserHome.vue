<template>
  <v-touch class="page" @swipeleft="swipeleft" @swiperight="swiperight">
    <div class="top_tip">
      <i class="iconfont icon-fanhui return" @click="returnEvent"></i>
      <span>{{month.year}}-{{month.month + 1}}</span>
    </div>
    <!-- <ol class="toolBar">
      <li>{{month.year}}-{{month.month + 1}}</li>
    </ol> -->
      <div class="calendar">
          <ol class="weeks">
            <li
              :key="week.id"
              v-for="week in weeks"
            >
              {{week}}
            </li>
          </ol>
          <ol 
            :key="row.id"
            v-for="row in days"
            class="days"
          >
            <li 
              :key="col.id" 
              :class="{not_this_month: !isThisMonth(col._d)}" 
              v-for="col in row"
              @click="onMousedown"
            >
              <!-- <i class="iconfont icon-close"></i> -->
              <span class="dayLabel">
                {{col._d.getDate()}}
              </span>
              <span v-if="isToday(col._d)" class="red"></span>
            </li>
          </ol>
      </div>
    <idialog :show.sync="showDialog">
      <ol>
        <li>敲代码</li>
        <li>敲代码</li>
        <li>敲代码</li>
        <li>敲代码</li>
        <li>敲代码</li>
      </ol>
    </idialog>
  </v-touch>
</template>

<script>
import moment from 'moment'
import Month from 'calendar-months'
export default {
  data () {
    return {
      days: [],
      day: '',
      month: {},
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      showDialog: false
    }
  },
  methods: {
    isThisMonth (date) {
      return this.month.containsDay(moment(date))
    },
    isToday (date) {
      return false
    },
    onMousedown (e) {
      this.showDialog = true
      // this.$router.push({ name: 'ScheduleHome' })
    },
    returnEvent (e) {
      this.$router.push({ name: 'Welcome' })
    },
    swipeleft (e) {
      if (this.month.month + 1 < 12) {
        this.month.month++
      } else {
        this.month.month = 0
        this.month.year++
      }
      this.days = this.month.calendarWeeks()
    },
    swiperight (e) {
      if (this.month.month > 0) {
        this.month.month--
      } else {
        this.month.month = 11
        this.month.year--
      }
      this.days = this.month.calendarWeeks()
    }
  },
  created () {
    this.month = Month.create(moment())
    this.days = this.month.calendarWeeks()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

div.top_tip {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  background-color: #96bda8;
  color: #ffffff;
  flex-flow: row;
  display: flex;
}

/* .top_tip span {} */

i.return {
  font-size: 5vh;
  width: 1.5em;
  color: #ffffff;
}

span.dayLabel {
  position: relative;
  top: 0.5em;
  right: 0.5em;
}

/* i.icon-close {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  font-size: 5px;
  z-index: 10001;
  display: none;
} */

/* i.icon-close:hover {
  color: #e51c23;
} */

span.red {
  background-color: #e51c23;
  border-radius: 50%;
  width: 0.5em;
  display: inline-block;
  height: 0.5em;
  line-height: 0.5em;
  position: absolute;
  top: 0.3em;
  left: 0.3em;
}

span.orange {
  border-radius: 50%;
  width: 0.5em;
  display: inline-block;
  height: 0.5em;
  line-height: 0.5em;
  background-color: #ff9800;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}

span.green {
  border-radius: 50%;
  width: 0.5em;
  display: inline-block;
  height: 0.5em;
  line-height: 0.5em;
  background-color: #8bc34a;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
}

.calendar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

ol {
  list-style: none;
}

.calendar ol {
  display: flex;
  padding: 0px;
  margin: 0px;
}

.calendar ol > li {
  width: 14.2857%;
  text-align: right;
}

ol.toolBar {
  padding: 16px;
}

/* .calendar .weeks ol {} */
.calendar ol.weeks li {
  padding: 0.5em 1em;
  border-right: 0.5px solid #c7c7cc;
  border-top: 0.5px solid #c7c7cc;
}

.calendar > ol.days {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}

.calendar > ol.days > li {
  border-right: 0.5px solid #c7c7cc;
  border-top: 0.5px solid #c7c7cc;
  position: relative;
  transition: box-shadow 0.3s;
}

.calendar > ol.days > li:nth-child(7n) {
  border-right: none;
}

/* .calendar > ol.days > li:hover:not(.not_this_month) {
  border: 0px;
  -webkit-box-shadow: 5px 5px 5px 5px #dcdcdc;
  box-shadow: 5px 5px 5px 5px #dcdcdc;
  background:#ffc;
} */

.calendar > ol.days > li:hover:not(.not_this_month) > i.icon-close {
  display: block;
}

.not_this_month {
  color: #c3c3c3;
}
</style>
