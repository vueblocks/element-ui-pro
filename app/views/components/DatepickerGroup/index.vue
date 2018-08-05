<template>
  <article class="components-article">
    <h2>DatapickerGroup 日期选择组</h2>
    <p class="desc">可按日、周、月选择日期，常用于列表、表格过滤。</p>
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
          <datepicker-group @change="handleChange" />
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
      eventColumns
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
