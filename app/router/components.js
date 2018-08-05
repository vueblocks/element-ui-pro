export default {
  path: '/components',
  name: 'components',
  component: () => import('@/layouts/ComponentsLayout.vue'),
  redirect: '/components/tag-select',
  children: [
    {
      path: '/components/charts',
      name: 'Charts',
      component: () => import('@/views/components/Charts/index.vue')
    },
    {
      path: '/components/tag-select',
      name: 'TagGroupPicker',
      component: () => import('@/views/components/TagSelect/index.vue')
    },
    {
      path: '/components/datepicker-group',
      name: 'DatepickerGroup',
      component: () => import('@/views/components/DatepickerGroup/index.vue')
    },
    {
      path: '/components/collapse-checkbox',
      name: 'CollapseCheckbox',
      component: () => import('@/views/components/CollapseCheckbox/index.vue')
    }
  ]
}
