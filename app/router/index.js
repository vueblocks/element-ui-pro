import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

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
    }
  ]
}]

export default new Router({
  routes
})
