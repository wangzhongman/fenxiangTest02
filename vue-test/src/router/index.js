import Vue from 'vue'
import Router from 'vue-router'
import HelloFenXiang from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFenXiang',
      component: HelloFenXiang
    }
  ]
})
