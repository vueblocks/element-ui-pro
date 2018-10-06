<template>
  <smart-widget title="树形表格" collapse>
    <tree-table :data="tableData" :columns="columns" border></tree-table>
  </smart-widget>
</template>

<script>

export default {
  name: 'TreeTableDemo',
  data () {
    return {
      columns: [
        {
          label: '事件',
          prop: 'event',
          edit: true
        },
        {
          label: 'ID',
          prop: 'id',
          edit: true
        },
        {
          label: '时间线',
          prop: 'timeLine',
          edit: true
        },
        {
          label: '备注',
          prop: 'comment',
          showOverflowTooltip: true
        }
      ],
      tableData: [
        {
          id: 0,
          event: '事件1',
          timeLine: 50,
          comment: '无'
        },
        {
          id: 1,
          event: '事件1',
          timeLine: 100,
          comment: '无',
          children: [
            {
              id: 2,
              event: '事件2',
              timeLine: 10,
              comment: '无'
            },
            {
              id: 3,
              event: '事件3',
              timeLine: 90,
              comment: '无',
              children: [
                {
                  id: 4,
                  event: '事件4',
                  timeLine: 5,
                  comment: '无'
                },
                {
                  id: 5,
                  event: '事件5',
                  timeLine: 10,
                  comment: '无'
                },
                {
                  id: 6,
                  event: '事件6',
                  timeLine: 75,
                  comment: '无',
                  children: [
                    {
                      id: 7,
                      event: '事件7',
                      timeLine: 50,
                      comment: '无',
                      children: [
                        {
                          id: 71,
                          event: '事件71',
                          timeLine: 25,
                          comment: 'xx'
                        },
                        {
                          id: 72,
                          event: '事件72',
                          timeLine: 5,
                          comment: 'xx'
                        },
                        {
                          id: 73,
                          event: '事件73',
                          timeLine: 20,
                          comment: 'xx'
                        }
                      ]
                    },
                    {
                      id: 8,
                      event: '事件8',
                      timeLine: 25,
                      comment: '无'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
