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
    code: `<tag-group-picker label="选择" :tags="tags" />`,
    props: {
      label: '选择：',
      tags: baseData
    }
  },
  changeColor: {
    title: '不同颜色',
    desc: '可选 primary、success、warning、danger、info、颜色hex值',
    code: `<tag-group-picker label="选择" :tags="tags" color="#F56C6C" />`,
    props: {
      label: '选择：',
      tags: baseData,
      type: 'success',
      color: '#F56C6C'
    }
  },
  changeSize: {
    title: '不同尺寸',
    desc: '可选 medium、small、mini',
    code: `<tag-group-picker label="选择" :tags="tags" size="medium"/>`,
    props: {
      label: '选择：',
      tags: baseData,
      size: 'medium',
      labelInValue: true
    }
  },
  multiple: {
    title: '支持多选',
    desc: '适用于筛选多个类目',
    code: `<tag-group-picker label="选择" :tags="tags" size="small" multiple />`,
    props: {
      label: '选择：',
      tags: baseData,
      size: 'small',
      multiple: true
    }
  }
}
