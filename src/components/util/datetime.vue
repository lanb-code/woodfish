<template>
    <div>
        <input type="text" class="datetime__input" placeholder="请选择时间..." autocomplete="off" ref="datetime__input" readonly="readonly" v-model="day" @focus="focus" @blur="blur" />
        <div class="datetime" v-if="show">
            <div class="datetime__title" ref="datetime__title">{{month.year}}&nbsp;{{month.month + 1}}</div>
            <div class="datetime__body" ref="datetime__body">
                <table class="datetime__table" ref="datetime__table">
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="row.id" v-for="row in data">
                            <td :key="col.id" :class="{'datetime__table--not-this-month': !isThisMonth(col._d)}" @mousedown="selectDay(col._d)" v-for="col in row">
                              {{col._d.getDate()}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import Month from 'calendar-months'
var df = require('date-formatter')
export default {
  name: 'idatetime',
  props: {
    day: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: false,
      data: [],
      month: {}
    }
  },
  methods: {
    blur: function (e) {
      this.show = false
    },
    focus: function (e) {
      this.show = true
      this.$nextTick(() => {
        let width = this.$refs.datetime__table.offsetWidth
        this.$refs.datetime__title.style.width = width + 'px'
      })
    },
    selectDay: function (date) {
      if (!this.isThisMonth(date)) return
      this.$emit('update:day', df(date, 'YYYY-MM-DD'))
      console.log(this.day)
      this.show = false
    },
    isThisMonth (date) {
      return this.month.containsDay(moment(date))
    }
  },
  created () {
    this.month = Month.create(moment())
    this.data = this.month.calendarWeeks()
  }
}
</script>

<style scoped>
.datetime {
  position: absolute;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  font-size: 12px;
}

.datetime__input {
  transition: all 0.5s;
  border-width: 1px;
  border-style: solid;
  border-color: #e6e6e6;
  border-radius: 2px;
  padding: 8px;
}

.datetime__input:hover,
.datetime__input:focus {
  cursor: pointer;
  border-color: #96bda8;
}

.datetime__title {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  background-color: #96bda8;
  color: #ffffff;
}

.datetime__table td {
  text-align: center;
  border-width: 1px;
  padding: 8px;
  background-color: #ffffff;
}

.datetime__table td:hover {
  cursor: pointer;
  background-color: rgb(250, 250, 250);
}

.datetime__table--not-this-month {
  color: #d2d2d2;
  cursor: not-allowed !important;
  background-color: #ffffff !important;
}
</style>
