<template>
  <section class="content">
    <h2>TagGroupPicker 标签选择器</h2>
    <p class="">可根据标签快速选择，常用于列表、表格过滤。</p>
    <section class="component-code-preview">
      <h3>代码演示</h3>
      <demo-block
        v-for="(item, index) in demoData"
        :code="item.code"
        :key="index"
      >
        <template slot="component">
          <tag-group-picker v-bind="item.props" @change="handleChange" />
        </template>
      </demo-block>
    </section>
    <section class="component-attributes">
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
    <section class="component-event">
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
    </section>
  </section>
</template>

<script>
import { attrColumns, eventColumns } from '@/constant/components'
import demoData from '@/constant/tag-group-picker'
import DemoBlock from '@/components/DemoBlock'

export default {
  components: {
    DemoBlock
  },
  data () {
    return {
      demoData,
      attrColumns,
      eventColumns,
      attrData: [
        { attribute: 'label', description: '标签文本，用于表示标签组的名称', type: 'String', acceptedValues: '-', defaultValues: '选择' },
        { attribute: 'tags', description: '标签列表', type: 'Array', acceptedValues: '-', defaultValues: '-' },
        { attribute: 'color', description: '自定义标签颜色', type: 'String', acceptedValues: '-', defaultValues: '-' },
        { attribute: 'show-default-tag', description: '是否显示默认标签，默认显示"全部"', type: 'Boolean', acceptedValues: '-', defaultValues: 'true' },
        { attribute: 'label-in-value', description: '在返回选项时，是否将 label 和 value 一并返回，默认只返回 value', type: 'Boolean', acceptedValues: '-', defaultValues: 'false' }
      ],
      eventData: [
        { eventName: 'change', description: '选中标签值发生变化时触发', callback: '目前的选中值' }
      ]
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
.content {
  width: 100%;
  .component-code-preview {
    margin-top: 32px;
  }
}
</style>
