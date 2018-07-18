export default {
  path: '/preview',
  name: 'preview',
  component: () => import('@/layouts/PreviewLayout.vue'),
  redirect: '/preview/dashboard',
  children: [
    {
      path: '/preview/dashboard',
      name: 'pro-dashboard',
      component: () => import('@/views/dashboard/index.vue')
    },
    {
      path: '/preview/charts',
      name: 'pro-charts',
      component: () => import('@/views/charts/index.vue')
    },
    {
      path: '/preview/tables',
      name: 'pro-tables',
      component: () => import('@/views/tables/index.vue'),
      children: [
        {
          path: '/preview/tables/inline-edit',
          name: 'pro-inline-edit',
          component: () => import('@/views/tables/InlineEdit.vue')
        },
        {
          path: '/preview/tables/tree-table',
          name: 'pro-tree-table',
          component: () => import('@/views/tables/TreeTable.vue')
        },
        {
          path: '/preview/tables/tree-inline-edit',
          name: 'pro-tree-inline-edit',
          component: () => import('@/views/tables/TreeInlineEdit.vue')
        }
      ]
    },
    {
      path: '/preview/extends',
      name: 'pro-extends',
      component: () => import('@/views/extends/index.vue')
    },
    {
      path: '/preview/exceptions',
      name: 'pro-exceptions',
      component: () => import('@/views/exceptions/index.vue')
    }
  ]
}
