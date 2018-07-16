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
        <el-card class="smart-widget-card">
          <div slot="header" class="clearfix">
            <span>折叠选择框</span>
          </div>
          <collapse-checkbox
            show-check-all
            title="热门游戏"
            v-model="checkList"
            :data="mockList"
            ref="collapseCheckbox"
            @change="handleChange"
          >
          </collapse-checkbox>
          <div class="footer">
            <el-button @click="handleChecked">通过 key 设置</el-button>
            <el-button @click="handleClear">清空</el-button>
          </div>
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
              value: 'yys'
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
              value: 'wow'
            }, {
              label: '星际争霸2',
              value: 'sc2'
            }, {
              label: '守望先锋',
              value: 'overwatch'
            }, {
              label: '暗黑破坏神3',
              value: 'diablo3'
            }
          ]
        }
      ],
      checkList: []
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
    },
    handleChecked () {
      this.$refs.collapseCheckbox.setCheckedKeys(['id5', 'sc2'])
    },
    handleClear () {
      this.$refs.collapseCheckbox.setCheckedKeys([])
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
  // smart-widget style
  .smart-widget-card {
    .footer {
      margin-top: 16px;
    }
  }
</style>
