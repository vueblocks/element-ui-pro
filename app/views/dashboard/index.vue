<template>
  <div class="dashboard-main">
    <smart-widget title="柱状图">
      <ve-bar-chart :data="data" :title="title" />
    </smart-widget>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        dimensions: {
          name: 'Year',
          data: [
            'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
            'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
          ]
        },
        measures: [{
          name: 'Vue',
          data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
        }, {
          name: 'React',
          data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
        }, {
          name: 'Angular',
          data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
        }]
      },
      title: {
        text: '2017前端热门框架对比',
        subtext: 'GitHub新增Star数量'
      }
    }
  }
}
</script>

<style>

</style>
