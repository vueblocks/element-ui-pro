<template>
  <article class="components-article">
    <h2>TagSelect 标签选择器</h2>
    <p class="desc">可根据标签快速选择，常用于列表、表格过滤。</p>
    <section class="compoment-section component-code-preview" v-for="(item, key) in demoData"  :key="key">
      <h3 class="title">{{item.title}}</h3>
      <p class="desc">{{item.desc}}</p>
      <demo-block :code="item.code">
        <template slot="component">
          <template v-for="(props, index) in item.components">
            <tag-select v-bind="props" @change="handleChange" :key="index" v-model="props.vModel" />
          </template>
        </template>
      </demo-block>
    </section>
    <section class="compoment-section component-attributes">
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
    </section>
  </article>
</template>

<script>
import { attrColumns, eventColumns } from '@/constant/components'
import demoData from '@/constant/tag-select'
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
        { attribute: 'value', description: '当前选中的标签值，开启 label-in-value 时为集合，可以使用 v-model 双向绑定数据', type: 'String, Array', acceptedValues: '-', defaultValues: '默认不选中' },
        { attribute: 'label', description: '标签文本', type: 'String', acceptedValues: '-', defaultValues: '-' },
        { attribute: 'tags', description: '标签列表', type: 'Array', acceptedValues: '-', defaultValues: '-' },
        { attribute: 'type', description: '主题', type: 'String', acceptedValues: 'success / warning / danger / info', defaultValues: '-' },
        { attribute: 'color', description: '自定义标签颜色', type: 'String', acceptedValues: '-', defaultValues: '-' },
        { attribute: 'size', description: '额外的标签大小', type: 'String', acceptedValues: 'medium / small / mini', defaultValues: '-' },
        { attribute: 'label-in-value', description: '在返回选项时，是否将 label 和 value 一并返回，默认只返回 value', type: 'Boolean', acceptedValues: '-', defaultValues: 'false' },
        { attribute: 'multiple', description: '是否多选', type: 'Boolean', acceptedValues: '-', defaultValues: 'false' }
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
@import '~@/assets/style/common/components.less';
</style>
