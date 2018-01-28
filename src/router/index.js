import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Front from '@/components/Front'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/org_page',
      name: 'Organization Page',
      component: Home
    },
    {
      path: '/',
      name: 'Front',
      component: Front
    }
  ]
})
