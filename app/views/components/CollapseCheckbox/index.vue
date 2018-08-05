<template>
  <article class="components-article">
    <h2>CollapseCheckBox 折叠多选器</h2>
    <p class="desc">用于分组筛选</p>
    <!-- <section class="compoment-section component-code-preview" v-for="(item, index) in demoData"  :key="index">
      <h3 class="title">{{item.title}}</h3>
      <p class="desc">{{item.desc}}</p>
      <demo-block :code="item.code">
        <template slot="component">
          <tag-group-picker v-bind="item.props" @change="handleChange" />
        </template>
      </demo-block>
    </section> -->
    <section class="compoment-section component-code-preview">
      <h3 class="title">示例</h3>
      <!-- <p class="desc"></p> -->
      <demo-block>
        <template slot="component">
          <collapse-checkbox
            show-check-all
            title="热门游戏"
            v-model="checkList"
            :data="mockList"
            ref="collapseCheckbox"
            @change="handleChange"
          />
        </template>
      </demo-block>
    </section>
    <!-- <section class="compoment-section component-attributes">
      <h3>Attributes</h3>
      <el-table
        border
        stripe
        :data="attrData"
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in attrColumns"
          :key="index"
          v-bind="item"
        />
      </el-table>
    </section>
    <section class="compoment-section component-event">
      <h3>Events</h3>
      <el-table
        border
        stripe
        :data="eventData"
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in eventColumns"
          :key="index"
          v-bind="item"
        />
      </el-table>
    </section> -->
  </article>
</template>

<script>
import { attrColumns, eventColumns } from '@/constant/components'
import DemoBlock from '@/components/DemoBlock'

export default {
  components: {
    DemoBlock
  },
  data () {
    return {
      attrColumns,
      eventColumns,
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
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/components.less';
</style>
