<template>
  <div class="page">
    <div class="top_tip">
      <i class="iconfont icon-fanhui return" @click="returnEvent"></i>
      <span>{{month.year}}-{{month.month + 1}}</span>
      <i class="iconfont icon-toggle" @click="onMousedown"></i>
    </div>
      <v-touch @swipeleft="swipeleft" @swiperight="swiperight" class="calendar">
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
          <div class="tip" @click="clickTip" v-if="isTip"></div>
      </v-touch>
        <idialog :show.sync="showDialog" :key="1">
          <ol :key="2">
            <li>敲代码</li>
            <li>敲代码</li>
            <li>敲代码</li>
            <li>敲代码</li>
            <li>敲代码</li>
          </ol>
        </idialog>
  </div>
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
      showDialog: false,
      isTip: true
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
    },
    clickTip (e) {
      this.isTip = false
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

span.dayLabel {
  position: relative;
  top: 0.5em;
  right: 0.5em;
}

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
  padding: 0px;
  margin: 0px;
}

.calendar ol {
  display: flex;
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
  /* border-right: 0.5px solid #c7c7cc; */
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

.tip {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1009;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-name: amt-fade-in;
  animation-name: amt-fade-in;
  background-repeat: no-repeat;
  background-image: url(../../assets/tip.png);
  background-size: 30% 20%;
  background-position: center center;
  text-align: center;
  line-height: 100%;
}
</style>
