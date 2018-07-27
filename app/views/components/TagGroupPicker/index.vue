<template>
  <section class="content">
    <h2>TagGroupPicker 标签选择器</h2>
    <p>可根据标签快速选择，常用于列表、表格过滤。</p>
    <section class="code-preview">
      <h3>代码演示</h3>
      <demo-block
        v-for="(item, index) in demoData"
        :code="item.code"
        :key="index"
      >
        <template slot="component">
          <tag-group-picker v-bind="item.props" />
        </template>
      </demo-block>
    </section>
  </section>
</template>

<script>
import demoData from '@/constant/tag-group-picker'
import DemoBlock from '@/components/DemoBlock'

export default {
  components: {
    DemoBlock
  },
  data () {
    return {
      demoData
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  .code-preview {
    margin-top: 32px;
  }
}
</style>
