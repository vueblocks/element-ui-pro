<template>
  <div class="dashboard-main">
    <smart-widget title="日期选择组">
      <div class="datepicker-group">
        <datepicker-group
          v-model="dateGroupValue"
          size="mini"
          :disabledDate="[31, 12, 13]"
          :disabledEndMonth="disabledEndMonth"
          :defaultDate="yestoday"
          @change="onChangeDateGroup"
        />
        <span>{{dateGroupValue}}</span>
      </div>
    </smart-widget>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      dateGroupValue: '',
      dateType: 'day',
      dateValue: {}
    }
  },
  computed: {
    disabledEndMonth () {
      return moment().subtract(1, 'month')
    },
    yestoday () {
      return moment().subtract(1, 'day').format('YYYY-MM-DD')
    }
  },
  methods: {
    onChangeDateGroup (data) {
      console.log(data)
    }
  }
}
</script>

<style>

</style>
