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
  changeColor: {
    code: `<tag-group-picker label="选择" :tags="tags" color="#F56C6C" />`,
    props: {
      label: '选择',
      tags: baseData,
      color: '#F56C6C'
    }
  }
}
