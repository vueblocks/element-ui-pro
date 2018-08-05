export default {
  path: '/components',
  name: 'components',
  component: () => import('@/layouts/ComponentsLayout.vue'),
  redirect: '/components/tag-group-picker',
  children: [
    {
      path: '/components/charts',
      name: 'Charts',
      component: () => import('@/views/components/Charts/index.vue')
    },
    {
      path: '/components/tag-group-picker',
      name: 'TagGroupPicker',
      component: () => import('@/views/components/TagGroupPicker/index.vue')
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
