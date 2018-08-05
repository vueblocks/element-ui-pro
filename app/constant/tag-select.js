const baseData = [
  {
    label: '标签一',
    value: 'one'
  },
  {
    label: '标签二',
    value: 'two'
  },
  {
    label: '标签三',
    value: 'three'
  },
  {
    label: '标签四',
    value: 'four'
  },
  {
    label: '标签五',
    value: 'five'
  }
]

export default {
  basic: {
    title: '示例',
    code: `
<template>
  <tag-select label="选择" :tags="tags" />
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          label: '标签一',
          value: 'one'
        },
        {
          label: '标签二',
          value: 'two'
        },
        {
          label: '标签三',
          value: 'three'
        },
        {
          label: '标签四',
          value: 'four'
        },
        {
          label: '标签五',
          value: 'five'
        }
      ]
    }
  }
}
</script>
`,
    components: [
      {
        label: '选择：',
        tags: baseData
      }
    ]
  },
  changeColor: {
    title: '主题、颜色',
    desc:
      '通过配置 type 选择主题，也可以通过配置 color 自定义颜色，color 属性会覆盖主题',
    code: `<template>
  <tag-select label="选择" :tags="tags" type="success" />
  <tag-select label="选择" :tags="tags" color="#40b883" />
</template>

<script>
export default {
}
</script>
`,
    components: [
      {
        label: '选择：',
        tags: baseData,
        type: 'success',
        vModel: 'one'
      },
      {
        label: '选择：',
        tags: baseData,
        color: '#40b883',
        vModel: 'one'
      }
    ]
  },
  changeSize: {
    title: '不同尺寸',
    desc: '可选 medium、small、mini',
    code: `<template>
  <tag-select label="选择" :tags="tags" size="medium" />
  <tag-select label="选择" :tags="tags" size="small" />
  <tag-select label="选择" :tags="tags" size="mini" />
</template>

<script>
export default {
}
</script>
`,
    components: [
      {
        label: '选择：',
        tags: baseData,
        size: 'medium',
        labelInValue: true,
        vModel: 'one'
      },
      {
        label: '选择：',
        tags: baseData,
        size: 'small',
        vModel: 'one'
      },
      {
        label: '选择：',
        tags: baseData,
        size: 'mini',
        vModel: 'one'
      }
    ]
  },
  multiple: {
    title: '支持多选',
    desc: '适用于筛选多个类目',
    code: `<template>
  <tag-select label="选择" :tags="tags" multiple />
</template>
`,
    components: [
      {
        label: '选择：',
        tags: baseData,
        multiple: true
      }
    ]
  }
}
