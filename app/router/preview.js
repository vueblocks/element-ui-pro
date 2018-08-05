export default {
  path: '/preview',
  name: 'preview',
  component: () => import('@/layouts/PreviewLayout.vue'),
  redirect: '/preview/dashboard',
  children: [
    {
      path: '/preview/dashboard',
      name: 'pro-dashboard',
      component: () => import('@/views/preview/dashboard/index.vue')
    },
    {
      path: '/preview/charts',
      name: 'pro-charts',
      component: () => import('@/views/preview/charts/index.vue')
    },
    {
      path: '/preview/tables',
      name: 'pro-tables',
      component: () => import('@/views/preview/tables/index.vue'),
      children: [
        {
          path: '/preview/tables/inline-edit',
          name: 'pro-inline-edit',
          component: () => import('@/views/preview/tables/InlineEdit.vue')
        },
        {
          path: '/preview/tables/tree-table',
          name: 'pro-tree-table',
          component: () => import('@/views/preview/tables/TreeTable.vue')
        },
        {
          path: '/preview/tables/tree-inline-edit',
          name: 'pro-tree-inline-edit',
          component: () => import('@/views/preview/tables/TreeInlineEdit.vue')
        }
      ]
    },
    {
      path: '/preview/extends',
      name: 'pro-extends',
      component: () => import('@/views/preview/extends/index.vue')
    },
    {
      path: '/preview/exceptions',
      name: 'pro-exceptions',
      component: () => import('@/views/preview/exceptions/index.vue')
    }
  ]
}
