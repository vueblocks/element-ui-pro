const baseData = [
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
]

export default {
  basic: {
    code: `<tag-group-picker label="选择" :tags="tags" />`,
    props: {
      label: '选择',
      tags: baseData
    }
  },
  showDefaultTag: {
    code: `<tag-group-picker label="选择" :tags="tags" :show-default-tag="false"/>`,
    props: {
      label: '选择',
      tags: baseData,
      showDefaultTag: false
    }
  },
  changeColor: {
    code: `<tag-group-picker label="选择" :tags="tags" color="#F56C6C" />`,
    props: {
      label: '选择',
      tags: baseData,
      color: '#F56C6C'
    }
  },
  labelInValue: {
    code: `<tag-group-picker label="选择" :tags="tags" label-in-value />`,
    props: {
      label: '选择',
      tags: baseData,
      labelInValue: true
    }
  }
}
