<template>
  <smart-widget title="行内编辑" collapse>
    <el-table :data="tableData" style="width: 100%" fit>
      <el-table-column fixed prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <template v-if="scope.row._edit">
            <el-input class="edit-input" size="mini" v-model="scope.row.name" @keyup.enter.native="confirmEdit(scope.row)"></el-input>
          </template>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="province" label="省份">
      </el-table-column>
      <el-table-column prop="city" label="市区">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="zip" label="邮编">
      </el-table-column>
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
    </el-table>
  </smart-widget>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    confirmEdit (row) {
      row._edit = false
      row.originalName = row.name
      console.log(row)
    }
  },
  mounted () {
    this.tableData.map(v => {
      this.$set(v, '_edit', false)
      v.originalName = v.name
      return v
    })
  }
}
</script>

<style>

</style>
