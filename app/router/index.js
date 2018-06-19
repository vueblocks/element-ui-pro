import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Charts from '@/views/charts/index.vue'
import Extends from '@/views/extends/index.vue'
import Exceptions from '@/views/exceptions/index.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'basic-layout',
  component: BasicLayout,
  redirect: {
    name: 'pro-dashboard'
  },
  children: [
    // Dashboard
    {
      path: 'dashboard',
      name: 'pro-dashboard',
      component: Dashboard
    },
    {
      path: 'charts',
      name: 'pro-charts',
      component: Charts
    },
    {
      path: 'extends',
      name: 'pro-extends',
      component: Extends
    },
    {
      path: 'exceptions',
      name: 'pro-exceptions',
      component: Exceptions
    }
  ]
}]

export default new Router({
  routes
})
