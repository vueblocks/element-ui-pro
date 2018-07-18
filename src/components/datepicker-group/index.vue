<template>
  <div class="datepicker-group radio-block">
    <el-date-picker
      v-show="datepickerType==='day'"
      v-model="dayValue"
      :size="size"
      type="date"
      class="datepicker-group-datepicker"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      :default-value="defaultDate"
      :picker-options="dayPickerOptions"
      :clearable="false"
      @change="onChangeDay">
    </el-date-picker>
    <el-date-picker
      v-show="datepickerType==='week'"
      v-model="weekValue"
      :size="size"
      type="week"
      format="yyyy 第 WW 周"
      class="datepicker-group-datepicker"
      placeholder="选择周"
      :picker-options="weekPickerOptions"
      :clearable="false"
      @change="onChangeWeek">
    </el-date-picker>
    <el-date-picker
      v-show="datepickerType==='month'"
      v-model="monthValue"
      :size="size"
      type="month"
      format="yyyy 年 MM 月"
      value-format="yyyy-MM"
      class="datepicker-group-datepicker"
      placeholder="选择月"
      :picker-options="monthPickerOptions"
      :clearable="false"
      @change="onChangeMonth">
    </el-date-picker>
    <el-select
      v-model="datepickerType"
      :size="size"
      placeholder="请选择"
      class="datepicker-group-select"
      @change="onChangeType">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DatepickerGroup',
  props: {
    size: String,
    disabledDate: {
      type: Array,
      default () { return [0, 0, 0] }
    },
    value: {
      type: [String, Array, Date]
    },
    disabledEndMonth: {
      type: [Object, Date]
    },
    defaultDate: {
      type: [String, Date]
    }
  },
  data () {
    return {
      dayValue: '',
      weekValue: '',
      monthValue: '',
      options: [{
        value: 'day',
        label: '按日查询'
      }, {
        value: 'week',
        label: '按周查询'
      }, {
        value: 'month',
        label: '按月查询'
      }],
      datepickerType: 'day'
    }
  },
  computed: {
    dayPickerOptions () {
      const [relativeDay] = this.disabledDate
      const defaultOptions = {
        disabledDate (time) {
          return time.getTime() > Date.now() ||
            (relativeDay > 0 && moment(time.getTime()) < moment(moment().subtract(relativeDay, 'day')))
        }
      }
      return defaultOptions
    },
    weekPickerOptions () {
      const [, relativeWeek] = this.disabledDate
      const defaultOptions = {
        disabledDate (time) {
          return time.getTime() > Date.now() ||
            (relativeWeek > 0 && moment(time.getTime()) < moment(moment().subtract(relativeWeek, 'week')))
        },
        firstDayOfWeek: 1
      }
      return defaultOptions
    },
    monthPickerOptions () {
      const [, , relativeMonth] = this.disabledDate
      const disabledEndMonth = this.disabledEndMonth || Date.now()
      const defaultOptions = {
        disabledDate (time) {
          return time.getTime() > disabledEndMonth ||
            (relativeMonth > 0 && moment(time.getTime()) < moment(moment().subtract(relativeMonth, 'month')))
        }
      }
      return defaultOptions
    }
  },
  watch: {
    value (val) {
      !val && this.onChangeType()
    }
  },
  methods: {
    onChangeType (val) {
      this.dayValue = ''
      this.weekValue = ''
      this.monthValue = ''
    },
    onChangeDay (val) {
      this.$emit('change', {
        type: this.datepickerType,
        value: val
      })
      this.$emit('input', val)
    },
    onChangeWeek (val) {
      this.$emit('change', {
        type: this.datepickerType,
        value: moment(val).format('YYYY-WW')
      })
      this.$emit('input', moment(val).format('YYYY-WW'))
    },
    onChangeMonth (val) {
      this.$emit('change', {
        type: this.datepickerType,
        value: val
      })
      this.$emit('input', val)
    }
  },
  created () {
    this.dayValue = this.defaultDate
    this.$emit('input', this.dayValue)
  }
}
</script>

<style lang="less">
  .radio-block {
    display: inline-block;
    position: relative;
    margin-left: 10px;
  }
  .datepicker-group {
    .datepicker-group-datepicker {
      width: 145px;
      z-index: 11;
      .el-input__inner {
        border-radius: 4px 0 0 4px;
      }
    }
    .datepicker-group-select {
      margin-left: -4px;
      width: 100px;
      z-index: 10;
      .el-input__inner {
        border-radius: 0 4px 4px 0;
        margin-left: -1px;
      }
    }
  }
  .el-popper[x-placement^=bottom] .popper__arrow {
    display: none;
  }
</style>
