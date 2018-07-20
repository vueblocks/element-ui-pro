export default {
  path: '/components',
  name: 'components',
  component: () => import('@/layouts/ComponentsLayout.vue'),
  redirect: '/components/index',
  children: [
    {
      path: '/components/index',
      name: 'pro-tagpicker-group',
      component: () => import('@/views/components/TagGroupPicker/index.vue')
    }
  ]
}
