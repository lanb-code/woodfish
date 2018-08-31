<template>
  <div class="page">

    <!-- top -->
    <Top :toggle="toggle">
      <span>{{month.year}}-{{currMonth}}</span>
    </Top>

      <!-- calendar content -->
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
            :key="rowIndex"
            v-for="(row, rowIndex) in days"
            class="days"
          >
            <li 
              :key="colIndex" 
              :class="{not_this_month: !isThisMonth(col._d), 'high': col.high, 'medium': col.medium, 'low': col.low}" 
              v-for="(col, colIndex) in row"
              @click="onMousedown(rowIndex, colIndex)"
            >
              <span class="dayLabel">
                {{col._d.getDate()}}
              </span>
              <span v-if="isToday(col._d)" class="red"></span>
            </li>
          </ol>

      </v-touch>

      <!-- start tip -->
      <!-- <div class="tip" @click="clickTip" v-if="isTip"></div> -->

        <!-- dialog -->
        <idialog :show.sync="showDialog">
          <ol>
            <li><span class="red"></span>&nbsp;23:59:01 敲代码</li>
            <li><span class="red"></span>&nbsp;23:59:01 敲代码</li>
            <li><span class="orange"></span>&nbsp;23:59:01 敲代码</li>
            <li><span class="orange"></span>&nbsp;23:59:01 敲代码</li>
            <li><span class="green"></span>&nbsp;23:59:01 敲代码</li>
          </ol>
        </idialog>

        <!-- actionsheet -->
        <iactionsheet :show.sync="showActionSheet"></iactionsheet>

        <!-- right side -->
        <v-touch @swiperight="rightSideSwiperight" :class="rightSide">
          
          <ol>
            <li v-for="col in rightSideData" :key="col.id">
              <span :class="rightSideClass(col.level)"></span>
              &nbsp;{{col.title}}</li>
          </ol>

        </v-touch>

        <div v-if="showSideMask" class="side__mask"></div>
  </div>
</template>

<script>
import moment from 'moment'
import Month from 'calendar-months'
import axios from 'axios'
export default {
  data () {
    return {
      days: [],
      day: '',
      month: {},
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      showDialog: false,
      isTip: true,
      rightSide: { 'right_side': true, 'overlay': false },
      rightSideData: [
        { level: 'high', title: '23:59:01 敲代码' },
        { level: 'high', title: '23:59:01 敲代码' },
        { level: 'medium', title: '23:59:01 敲代码' },
        { level: 'medium', title: '23:59:01 敲代码' },
        { level: 'low', title: '23:59:01 敲代码' }
      ],
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
    toggle () {
      this.showActionSheet = !this.showActionSheet
    },
    isThisMonth (date) {
      return this.month.containsDay(moment(date))
    },
    isToday (date) {
      return date.toDateString() === new Date().toDateString()
    },
    onMousedown (rowIndex, colIndex) {
      // this.showDialog = true
      if (typeof this.days[rowIndex][colIndex].data !== 'undefined') {
        this.rightSideData = this.days[rowIndex][colIndex].data
        this.rightSide.overlay = true
        this.showSideMask = true
      } else {
        this.$router.push({ name: 'ScheduleHome' })
      }
    },
    returnEvent (e) {
      window.history.back()
    },
    swipeleft (e) {
      if (this.month.month + 1 < 12) {
        this.month.month++
      } else {
        this.month.month = 0
        this.month.year++
      }
      this.days = this.month.calendarWeeks()
      this.resetData()
    },
    swiperight (e) {
      if (this.month.month > 0) {
        this.month.month--
      } else {
        this.month.month = 11
        this.month.year--
      }
      this.days = this.month.calendarWeeks()
      this.resetData()
    },
    clickTip (e) {
      this.isTip = false
    },
    rightSideSwiperight (e) {
      this.rightSide.overlay = false
      this.showSideMask = false
    },
    getData () {
      this.month = Month.create(moment())
      this.days = this.month.calendarWeeks()
      this.resetData()
    },
    rightSideClass (value) {
      if (value === 'high')
        return 'red'
      if (value === 'medium')
        return 'orange'
      if (value === 'low')
        return 'green'
    },
    resetData () {
      for (let i = 0; i < this.days.length; i++) {
        for (let j = 0; j < this.days[i].length; j++) {
          let d = this.days[i][j]._d
          if (parseInt(10 * Math.random()) / 2 == 0) {
            this.days[i][j].high = true
            this.days[i][j].data = [
              { level: 'high', title: '23:59:01 敲代码' },
              { level: 'high', title: '23:59:01 敲代码' },
              { level: 'medium', title: '23:59:01 敲代码' },
            ]
          } else if ((parseInt(10 * Math.random()) / 2 == 0)) {
            this.days[i][j].medium = true
            this.days[i][j].data = [
              { level: 'medium', title: '23:59:01 敲代码' },
              { level: 'medium', title: '23:59:01 敲代码' },
            ]
          } else if ((parseInt(10 * Math.random()) / 2 == 0)) {
            this.days[i][j].low = true
            this.days[i][j].data = [
              { level: 'low', title: '23:59:01 敲代码' }
            ]
          }
        }
      }
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

span.dayLabel {
  position: relative;
  top: 0.5em;
  right: 0.5em;
}

span.red {
  background-color: #e51c23;
  border-radius: 50%;
  width: 10px;
  display: inline-block;
  height: 10px;
}

span.orange {
  background-color: #ff9800;
  border-radius: 50%;
  width: 10px;
  display: inline-block;
  height: 10px;
}

span.green {
  background-color: #8bc34a;
  border-radius: 50%;
  width: 10px;
  display: inline-block;
  height: 10px;
}

.page {
  height: 100vh;
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
  border-right: 1px solid #c7c7c7;
  border-top: 1px solid #c7c7c7;
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
  background-size: 110px 130px;
  background-position: center center;
  text-align: center;
  line-height: 100%;
}

.right_side {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50%;
  height: 100vh;
  transition: transform 0.5s, -webkit-transform 0.5s;
  transform: translateX(100%);
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.right_side ol {
  align-self: center;
}

.overlay {
  -webkit-transform: translate(0);
  transform: translate(0);
  box-shadow: 10px 10px 10px 10px grey;
  z-index: 1001;
}

.high {
  background-color: #e51c23;
  color: #ffffff;
}

.medium {
  background-color: #ff9800;
  color: #ffffff;
}

.low {
  background-color: #8bc34a;
  color: #ffffff;
}

.side__mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  transition: all 0.5s;
}
</style>
