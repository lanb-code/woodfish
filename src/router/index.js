import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import UserHome from '@/components/user/UserHome'
import ScheduleHome from '@/components/schedule/ScheduleHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/user/home',
      name: 'UserHome',
      component: UserHome
    }, {
      path: '/schedule/home',
      name: 'ScheduleHome',
      component: ScheduleHome
    }
  ]
})
