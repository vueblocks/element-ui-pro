<template>
  <div>
    <el-row type="flow" :gutter="32">
      <el-col :span="12">
        <smart-widget title="三级目录" collapse>
          <cascader-third-expand
            :data-lists="cateLists"
            :if-select-all=true
            @selectVal="handleCate"
          />
          <div class="display-area"><span>选择的目录是：{{ cateVal }}</span></div>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="三级目录（仅三级）" collapse>
          <cascader-third-expand
            :data-lists="cateLists"
            @selectVal="handleCate2"
          />
          <div class="display-area"><span>选择的目录是：{{ cateVal2 }}</span></div>
        </smart-widget>
      </el-col>
    </el-row>
    <el-row class="m-t-20" type="flow">
      <smart-widget title="折叠多选" collapse>
        <cascader-collapse
          :checkBoxList="checkBoxLists"
          :showCheckAll="true"
        />
      </smart-widget>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'AssetsSelect',
  components: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
      cateVal: '',
      cateVal2: '',
      cateLists: [],
      checkBoxLists: []
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    handleCate(val) {
      if (val.third.id) {
        this.cateVal = val.first.name + '/' + val.second.name + '/' + val.third.name
      } else if (val.second.id) {
        this.cateVal = val.first.name + '/' + val.second.name
      } else if (val.first.id) {
        this.cateVal = val.first.name
      } else {
        this.cateVal = ''
      }
    },
    handleCate2(val) {
      this.cateVal2 = val.first.name + '/' + val.second.name + '/' + val.third.name
    },
    init() {
      this.cateLists = [
        {
          'id': 7,
          'name': '外部数据',
          'parentId': -1,
          'level': 1,
          'children': [
            {
              'id': 61,
              'name': '资讯',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 359,
                  'name': '舆情',
                  'parentId': 61,
                  'level': 3,
                  'children': []
                }
              ]
            },
            {
              'id': 62,
              'name': '社交',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 360,
                  'name': '社交',
                  'parentId': 62,
                  'level': 3,
                  'children': []
                }
              ]
            },
            {
              'id': 63,
              'name': '电商',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 361,
                  'name': '电商',
                  'parentId': 63,
                  'level': 3,
                  'children': []
                }
              ]
            },
            {
              'id': 64,
              'name': '游戏',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 362,
                  'name': '游戏',
                  'parentId': 64,
                  'level': 3,
                  'children': []
                }
              ]
            },
            {
              'id': 65,
              'name': '房产',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 363,
                  'name': '租房',
                  'parentId': 65,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                },
                {
                  'id': 364,
                  'name': '买卖',
                  'parentId': 65,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                }
              ]
            },
            {
              'id': 66,
              'name': '汽车',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 365,
                  'name': '整车',
                  'parentId': 66,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                },
                {
                  'id': 366,
                  'name': '配件',
                  'parentId': 66,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                }
              ]
            },
            {
              'id': 67,
              'name': '数码',
              'parentId': 7,
              'level': 2,
              'children': [
                {
                  'id': 367,
                  'name': '手机',
                  'parentId': 67,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                },
                {
                  'id': 368,
                  'name': '电脑',
                  'parentId': 67,
                  'state': '1',
                  'type': 'out',
                  'level': 3,
                  'flag': '1',
                  'children': []
                }
              ]
            }
          ]
        }
      ]
      this.checkBoxLists = [
        {
          'title': '三皇',
          'checked': false,
          'list': [
            {
              'label': '天皇、地皇、泰皇；出自《史记·秦始皇本纪》',
              'value': '04000010',
              'checked': false
            },
            {
              'label': '天皇、地皇、人皇；出自《史记·补三皇本纪》',
              'value': '04000011',
              'checked': false
            },
            {
              'label': '燧人、伏羲、神农；出自《尚书大传》',
              'value': '04000818',
              'checked': false
            },
            {
              'label': '伏羲、女娲、神农；出自《春秋运斗枢》',
              'value': '04001124',
              'checked': false
            },
            {
              'label': '伏羲、神农、黄帝。出自《三字经》',
              'value': '04001247',
              'checked': false
            }
          ]
        },
        {
          'title': '夏朝历史',
          'checked': false,
          'list': [
            {
              'label': '鲧禹治水',
              'value': '04000017',
              'checked': false
            },
            {
              'label': '讨伐三苗',
              'value': '04000020',
              'checked': false
            },
            {
              'label': '建立王朝',
              'value': '04000009',
              'checked': false
            },
            {
              'label': '太康失国（后羿）',
              'value': '04000006',
              'checked': false
            },
            {
              'label': '少康中兴',
              'value': '04000014',
              'checked': false
            },
            {
              'label': '暴桀亡国',
              'value': '04000003',
              'checked': false
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.m-t-20 {
  margin-top: 20px;
}
</style>
