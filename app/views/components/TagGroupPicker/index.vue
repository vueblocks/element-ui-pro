<template>
  <section class="content">
    <h2>TagGroupPicker 标签选择器</h2>
    <p>可根据标签快速选择，常用于列表、表格过滤。</p>
    <section class="code-preview">
      <h3>代码演示</h3>
      <demo-block :code="basicCode">
        <template slot="component">
          <tag-group-picker
            label="选择"
            :tags="mockTags"
            @change="onChangeTagGroup"
          />
        </template>
      </demo-block>
    </section>
  </section>
</template>

<script>
import DemoBlock from '@/components/DemoBlock'

export default {
  components: {
    DemoBlock
  },
  data () {
    return {
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
      basicCode: `
      <tag-group-picker
        label="选择"
        :tags="mockTags"
        @change="onChangeTagGroup"
      />
      `
    }
  },
  methods: {
    onChangeTagGroup (tag) {
      console.log(tag)
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
