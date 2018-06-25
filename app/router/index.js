import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Charts from '@/views/charts/index.vue'
import Tables from '@/views/tables/index.vue'
import InlineEditTable from '@/views/tables/InlineEdit.vue'
import TreeTable from '@/views/tables/TreeTable.vue'
import TreeInlineEdit from '@/views/tables/TreeInlineEdit.vue'
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
      path: 'tables',
      name: 'pro-tables',
      component: Tables,
      children: [
        {
          path: 'inline-edit',
          name: 'pro-inline-edit',
          component: InlineEditTable
        },
        {
          path: 'tree-table',
          name: 'pro-tree-table',
          component: TreeTable
        },
        {
          path: 'tree-inline-edit',
          name: 'pro-tree-inline-edit',
          component: TreeInlineEdit
        }
      ]
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
