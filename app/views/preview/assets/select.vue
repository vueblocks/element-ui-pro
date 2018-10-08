<template>
  <el-row type="flow" :gutter="32">
    <el-col :span="12">
      <smart-widget title="三级目录" collapse>
        <cascade-third-select
          :data-lists="cateLists"
          :if-select-all=true
          @selectVal="handleCate"
        />
        <div class="display-area"><span>选择的目录是：{{ cateVal }}</span></div>
      </smart-widget>
    </el-col>
    <el-col :span="12">
      <smart-widget title="三级目录（仅三级）" collapse>
        <cascade-third-select
          :data-lists="cateLists"
          @selectVal="handleCate2"
        />
        <div class="display-area"><span>选择的目录是：{{ cateVal2 }}</span></div>
      </smart-widget>
    </el-col>
  </el-row>

</template>

<script>
import CascadeThirdSelect from '../../../../src/components/cascade-third-select/index'

export default {
  name: 'AssetsSelect',
  components: { CascadeThirdSelect },
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
      cateVal: '',
      cateVal2: '',
      cateLists: []
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
          'id': 1,
          'name': '一级目录1',
          'level': 1,
          'children': [
            {
              'id': 11,
              'name': '二级目录11',
              'level': 2,
              'children': [
                {
                  'id': 111,
                  'name': '三级目录111',
                  'level': 3,
                  'children': []
                }, {
                  'id': 112,
                  'name': '三级目录112',
                  'level': 3,
                  'children': []
                }, {
                  'id': 113,
                  'name': '三级目录113',
                  'level': 3,
                  'children': []
                }, {
                  'id': 114,
                  'name': '三级目录114',
                  'level': 3,
                  'children': []
                }, {
                  'id': 115,
                  'name': '三级目录115',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 12,
              'name': '二级目录12',
              'level': 2,
              'children': [
                {
                  'id': 121,
                  'name': '三级目录121',
                  'level': 3,
                  'children': []
                }, {
                  'id': 122,
                  'name': '三级目录122',
                  'level': 3,
                  'children': []
                }, {
                  'id': 123,
                  'name': '三级目录123',
                  'level': 3,
                  'children': []
                }, {
                  'id': 124,
                  'name': '三级目录124',
                  'level': 3,
                  'children': []
                }, {
                  'id': 125,
                  'name': '三级目录125',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 13,
              'name': '二级目录13',
              'level': 2,
              'children': [
                {
                  'id': 131,
                  'name': '三级目录131',
                  'level': 3,
                  'children': []
                }, {
                  'id': 132,
                  'name': '三级目录132',
                  'level': 3,
                  'children': []
                }, {
                  'id': 133,
                  'name': '三级目录133',
                  'level': 3,
                  'children': []
                }, {
                  'id': 134,
                  'name': '三级目录134',
                  'level': 3,
                  'children': []
                }, {
                  'id': 135,
                  'name': '三级目录135',
                  'level': 3,
                  'children': []
                }]
            }]
        },
        {
          'id': 2,
          'name': '一级目录2',
          'level': 1,
          'children': [
            {
              'id': 21,
              'name': '二级目录21',
              'level': 2,
              'children': [
                {
                  'id': 211,
                  'name': '三级目录211',
                  'level': 3,
                  'children': []
                }, {
                  'id': 212,
                  'name': '三级目录212',
                  'level': 3,
                  'children': []
                }, {
                  'id': 213,
                  'name': '三级目录213',
                  'level': 3,
                  'children': []
                }, {
                  'id': 214,
                  'name': '三级目录214',
                  'level': 3,
                  'children': []
                }, {
                  'id': 215,
                  'name': '三级目录215',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 22,
              'name': '二级目录22',
              'level': 2,
              'children': [
                {
                  'id': 221,
                  'name': '三级目录221',
                  'level': 3,
                  'children': []
                }, {
                  'id': 222,
                  'name': '三级目录222',
                  'level': 3,
                  'children': []
                }, {
                  'id': 223,
                  'name': '三级目录223',
                  'level': 3,
                  'children': []
                }, {
                  'id': 224,
                  'name': '三级目录224',
                  'level': 3,
                  'children': []
                }, {
                  'id': 225,
                  'name': '三级目录225',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 23,
              'name': '二级目录23',
              'level': 2,
              'children': [
                {
                  'id': 231,
                  'name': '三级目录231',
                  'level': 3,
                  'children': []
                }, {
                  'id': 232,
                  'name': '三级目录232',
                  'level': 3,
                  'children': []
                }, {
                  'id': 233,
                  'name': '三级目录233',
                  'level': 3,
                  'children': []
                }, {
                  'id': 234,
                  'name': '三级目录234',
                  'level': 3,
                  'children': []
                }, {
                  'id': 235,
                  'name': '三级目录235',
                  'level': 3,
                  'children': []
                }]
            }]
        },
        {
          'id': 3,
          'name': '一级目录3',
          'level': 1,
          'children': [
            {
              'id': 31,
              'name': '二级目录31',
              'level': 2,
              'children': [
                {
                  'id': 311,
                  'name': '三级目录311',
                  'level': 3,
                  'children': []
                }, {
                  'id': 312,
                  'name': '三级目录312',
                  'level': 3,
                  'children': []
                }, {
                  'id': 313,
                  'name': '三级目录313',
                  'level': 3,
                  'children': []
                }, {
                  'id': 314,
                  'name': '三级目录314',
                  'level': 3,
                  'children': []
                }, {
                  'id': 315,
                  'name': '三级目录315',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 32,
              'name': '二级目录32',
              'level': 2,
              'children': [
                {
                  'id': 321,
                  'name': '三级目录321',
                  'level': 3,
                  'children': []
                }, {
                  'id': 322,
                  'name': '三级目录322',
                  'level': 3,
                  'children': []
                }, {
                  'id': 323,
                  'name': '三级目录323',
                  'level': 3,
                  'children': []
                }, {
                  'id': 324,
                  'name': '三级目录324',
                  'level': 3,
                  'children': []
                }, {
                  'id': 325,
                  'name': '三级目录325',
                  'level': 3,
                  'children': []
                }]
            },
            {
              'id': 33,
              'name': '二级目录33',
              'level': 2,
              'children': [
                {
                  'id': 331,
                  'name': '三级目录331',
                  'level': 3,
                  'children': []
                }, {
                  'id': 332,
                  'name': '三级目录332',
                  'level': 3,
                  'children': []
                }, {
                  'id': 333,
                  'name': '三级目录333',
                  'level': 3,
                  'children': []
                }, {
                  'id': 334,
                  'name': '三级目录334',
                  'level': 3,
                  'children': []
                }, {
                  'id': 335,
                  'name': '三级目录335',
                  'level': 3,
                  'children': []
                }]
            }]
        }]
    }
  }
}
</script>
