<template>
  <div class="extends-main">
    <el-row type="flow" :gutter="32">
      <el-col :span="12">
        <smart-widget title="日期选择组" collapse>
          <datepicker-group
            v-model="dateGroupValue"
            :disabledDate="[31, 12, 13]"
            :disabledEndMonth="disabledEndMonth"
            :defaultDate="yestoday"
            @change="onChangeDateGroup"
          />
          <div class="display-area">
            <span>选择的日期：{{dateGroupValue}}</span>
          </div>
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
    <br>
    <el-row>
      <el-col>
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>折叠选择框</span>
          </div>
          <collapse-checkbox
            showCheckAll
            :data="mockList"
            @change="handleChange"
          >
            <span slot="title">热门游戏</span>
          </collapse-checkbox>
        </el-card>
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
      ],
      mockList: [
        {
          title: '网易游戏',
          list: [
            {
              label: '阴阳师',
              value: 'yys',
              checked: true
            }, {
              label: '第五人格',
              value: 'id5'
            }, {
              label: '实况足球',
              value: 'pes'
            }
          ]
        }, {
          title: '暴雪游戏',
          list: [
            {
              label: '魔兽世界',
              value: 'wow',
              checked: true
            }, {
              label: '星际争霸2',
              value: 'sc2',
              checked: true
            }, {
              label: '守望先锋',
              value: 'overwatch'
            }, {
              label: '暗黑破坏神3',
              value: 'diablo3'
            }
          ]
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
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
  .display-area {
    font-size: 14px;
    float: right;
    padding: 8px 0;
    margin-right: 10px;
  }
</style>
