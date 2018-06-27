<template>
  <!-- <smart-widget title="树形表格" collapse> -->
  <tree-table :data="tableData" :columns="columns" border inline-edit @on-inline-enter="confirmEdit">
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button v-if="scope.row._edit" type="text" size="small" @click.native.prevent="confirmEdit(scope.row)">
          保存
        </el-button>
        <el-button type="text" size="small" @click.native.prevent="scope.row._edit=!scope.row._edit" v-else>
          编辑
        </el-button>
      </template>
    </el-table-column>
  </tree-table>
  <!-- </smart-widget> -->
</template>

<script>
export default {
  name: 'TreeInlineEdit',
  data () {
    return {
      columns: [
        {
          label: '事件',
          prop: 'event',
          width: 200,
          edit: true
        },
        {
          label: 'ID',
          prop: 'id',
          width: 200,
          edit: true
        },
        {
          label: '时间线',
          prop: 'timeLine',
          width: 200,
          edit: true
        },
        {
          label: '备注',
          prop: 'comment',
          width: 200,
          showOverflowTooltip: true
        }
      ],
      tableData: [
        {
          id: 0,
          event: '事件1',
          timeLine: 50,
          comment: 'this is a comment. this is a comment. this is a comment. this is a comment.'
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
  },
  methods: {
    confirmEdit (row) {
      row._edit = false
      row.originalId = row.id
      console.log(row)
    }
  },
  mounted () {
    this.tableData.map(v => {
      this.$set(v, '_edit', false)
      v.originalId = v.id
      return v
    })
  }
}
</script>

<style>

</style>
