<template>
  <div class="extends-main">
    <el-row type="flow" :gutter="32">
      <el-col :span="12">
        <smart-widget title="日期选择组" collapse>
          <datepicker-group
            v-model="dateGroupValue"
            size="mini"
            :disabledDate="[31, 12, 13]"
            :disabledEndMonth="disabledEndMonth"
            :defaultDate="yestoday"
            @change="onChangeDateGroup"
          />
          <span style="font-size: 14px;">选择的日期：{{dateGroupValue}}</span>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="标签选择组" collapse>
          <tagpicker-group
            label="选择"
            :tags="mockTags"
            @change="onChangeTagGroup"
          />
          <tagpicker-group
            label="请选择"
            color="#ff6060"
            :tags="mockTags"
            @change="onChangeTagGroup"
          />
        </smart-widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      dateGroupValue: '',
      mockTags: [
        {
          label: '北京',
          value: 'beijing'
        },
        {
          label: '上海',
          value: 'shanghai'
        },
        {
          label: '广州',
          value: 'guangzhou'
        },
        {
          label: '深圳',
          value: 'shenzhen'
        }
      ]
    }
  },
  computed: {
    disabledEndMonth () {
      return dayjs().subtract(1, 'month')
    },
    yestoday () {
      return dayjs().subtract(1, 'day').format('YYYY-MM-DD')
    }
  },
  methods: {
    onChangeDateGroup (data) {
      console.log(data)
    },
    onChangeTagGroup (val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
