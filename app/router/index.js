import Vue from 'vue'
import Router from 'vue-router'
import previewRouter from '@/router/preview'
import componentsRouter from '@/router/components'

Vue.use(Router)

const routes = [
  previewRouter,
  componentsRouter,
  {
    path: '/',
    redirect: '/preview'
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new Router({
  routes
})
