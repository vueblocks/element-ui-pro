<template>
  <el-row type="flow">
    <smart-widget title="指标折叠面板" collapse>
      <div v-for="(item, index) in scaleLists" :key="index" class="scale-block">
        <span>{{ `${item.title} (${item.count})` }}</span>
        <collpase-panel :scaleList="item.list"/>
      </div>
    </smart-widget>

    <smart-widget title="指标折叠面板（下钻）" collapse style="margin-top: 20px">
      <collpase-panel-dim :scaleList="scaleListsTree"/>
    </smart-widget>
  </el-row>
</template>

<script>
export default {
  components: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
      scaleLists: [
        {
          'title': '客服',
          'count': 38,
          'sort': 19,
          'list': [
            {
              'title': '客服咨询',
              'sort': 3,
              'checked': false,
              'list': [
                {
                  'label': '咨询量',
                  'value': '21000493',
                  'checked': false
                },
                {
                  'label': '应答率',
                  'value': '21000494',
                  'checked': false
                },
                {
                  'label': '满意率',
                  'value': '21000495',
                  'checked': false
                },
                {
                  'label': '在线咨询下单率',
                  'value': '21000496',
                  'checked': false
                },
                {
                  'label': '响应时长',
                  'value': '21000497',
                  'checked': false
                },
                {
                  'label': '促成订单金额',
                  'value': '21000498',
                  'checked': false
                },
                {
                  'label': '出库订单金额',
                  'value': '21000499',
                  'checked': false
                },
                {
                  'label': '在线UPV',
                  'value': '21000500',
                  'checked': false
                },
                {
                  'label': '正在咨询量',
                  'value': '21000501',
                  'checked': false
                },
                {
                  'label': '接待量',
                  'value': '21000502',
                  'checked': false
                }]
            },
            {
              'title': '商品纠纷',
              'sort': 5,
              'checked': false,
              'list': [
                {
                  'label': '近一周纠纷数',
                  'value': '21000527',
                  'checked': false
                },
                {
                  'label': '总纠纷数',
                  'value': '21000528',
                  'checked': false
                }
              ]
            }
          ]
        },
        {
          'title': '店铺',
          'count': 1,
          'sort': 27,
          'list': [
            {
              'title': '店铺属性',
              'sort': 1,
              'checked': false,
              'list': [
                {
                  'label': '行业店铺数',
                  'value': '28000821',
                  'checked': false
                }
              ]
            }
          ]
        }
      ],
      scaleListsTree: [
        {
          'id': 1000046,
          'classifyName': '商品维',
          'dimList': [
            {
              'id': 70,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '品牌',
              'code': 'brand_code',
              'table': 'dim_item_brand',
              'tablePrimaryKey': 'brand_code',
              'state': 'Y',
              'desc': '品牌',
              'managerErp': 'dingyi40',
              'creator': 'lichao283',
              'createTime': '2018-07-05 13:48:07',
              'modifier': 'lichao283',
              'modifyTime': '2018-07-13 16:45:48',
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': '品牌'
            },
            {
              'id': 71,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': 'sku',
              'code': 'sku_id',
              'table': 'gdm_m03_item_sku_da',
              'tablePrimaryKey': 'dt + item_sku_id',
              'state': 'Y',
              'desc': '商品宽表快照表，每天每个sku一条数据。',
              'managerErp': 'bjgjcai',
              'creator': 'lichao283',
              'createTime': '2018-07-05 13:49:44',
              'modifier': 'lichao283',
              'modifyTime': '2018-07-13 16:45:53',
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': 'sku'
            },
            {
              'id': 72,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '商品一级分类',
              'code': 'dim_item_gen_first_cate_id',
              'table': 'dim_item_gen_first_cate',
              'tablePrimaryKey': 'dim_item_gen_first_cate_id',
              'state': 'Y',
              'desc': '商品一级分类',
              'managerErp': 'bjgjcai',
              'creator': 'lichao283',
              'createTime': '2018-07-05 13:51:58',
              'modifier': 'lichao283',
              'modifyTime': '2018-07-13 16:45:59',
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [
                {
                  'id': 73,
                  'parentId': 72,
                  'level': 2,
                  'dimClassifyId': 1000046,
                  'name': '商品二级分类',
                  'code': 'dim_item_gen_second_cate_id',
                  'table': 'dim_item_gen_second_cate',
                  'tablePrimaryKey': 'dim_item_gen_second_cate_id',
                  'state': 'Y',
                  'desc': '商品二级分类',
                  'managerErp': 'bjgjcai',
                  'creator': 'lichao283',
                  'createTime': '2018-07-05 13:55:42',
                  'modifier': 'lichao283',
                  'modifyTime': '2018-07-13 16:46:52',
                  'dimClassifyName': '商品维',
                  'parentName': '商品一级分类',
                  'parentLevel': 1,
                  'children': [
                    {
                      'id': 74,
                      'parentId': 73,
                      'level': 3,
                      'dimClassifyId': 1000046,
                      'name': '商品三级分类',
                      'code': 'dim_item_gen_third_cate_id',
                      'table': 'dim_item_gen_third_cate',
                      'tablePrimaryKey': 'dim_item_gen_third_cate_id',
                      'state': 'Y',
                      'desc': '商品三级分类',
                      'managerErp': 'bjgjcai',
                      'creator': 'lichao283',
                      'createTime': '2018-07-05 13:57:44',
                      'modifier': 'lichao283',
                      'modifyTime': '2018-07-13 16:46:52',
                      'dimClassifyName': '商品维',
                      'parentName': '商品二级分类',
                      'parentLevel': 2,
                      'children': [],
                      'event': '商品三级分类'
                    },
                    {
                      'id': 106,
                      'parentId': 73,
                      'level': 4,
                      'dimClassifyId': 1000046,
                      'name': '商品扩展三级分类',
                      'code': 'item_ext_third_cate_cd',
                      'table': 'dim_item_gen_third_cate',
                      'tablePrimaryKey': 'dim_item_gen_third_cate_id',
                      'state': 'Y',
                      'desc': '部分商品有扩展分类，即商品可能会被划分到不同的分类中',
                      'managerErp': 'bjgjcai',
                      'creator': 'bjgjcai',
                      'createTime': '2018-07-06 11:40:50',
                      'modifier': null,
                      'modifyTime': '2018-07-13 16:46:52',
                      'dimClassifyName': '商品维',
                      'parentName': '商品二级分类',
                      'parentLevel': 2,
                      'children': [],
                      'event': '商品扩展三级分类'
                    }
                  ],
                  'event': '商品二级分类'
                }
              ],
              'event': '商品一级分类'
            },
            {
              'id': 107,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '供应商',
              'code': 'major_supp_brevity_code',
              'table': 'dim_supp',
              'tablePrimaryKey': 'supp_brevity_cd',
              'state': 'Y',
              'desc': null,
              'managerErp': 'bjgjcai',
              'creator': 'bjgjcai',
              'createTime': '2018-07-06 11:40:51',
              'modifier': null,
              'modifyTime': null,
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': '供应商'
            },
            {
              'id': 108,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '商家',
              'code': 'vender_id',
              'table': 'gdm_m01_vender_da',
              'tablePrimaryKey': 'vender_id',
              'state': 'Y',
              'desc': null,
              'managerErp': 'bjgjcai',
              'creator': 'bjgjcai',
              'createTime': '2018-07-06 11:40:52',
              'modifier': null,
              'modifyTime': null,
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': '商家'
            },
            {
              'id': 109,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '店铺',
              'code': 'shop_id',
              'table': 'dim_shop',
              'tablePrimaryKey': 'shop_id',
              'state': 'Y',
              'desc': null,
              'managerErp': 'bjgjcai',
              'creator': 'bjgjcai',
              'createTime': '2018-07-06 11:40:53',
              'modifier': null,
              'modifyTime': null,
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': '店铺'
            },
            {
              'id': 110,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': 'SKU类型代码',
              'code': 'sku_data_type_cd',
              'table': 'dim_sku_data_type',
              'tablePrimaryKey': 'sku_data_type_cd',
              'state': 'Y',
              'desc': null,
              'managerErp': 'bjgjcai',
              'creator': 'bjgjcai',
              'createTime': '2018-07-06 11:40:54',
              'modifier': null,
              'modifyTime': null,
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': 'SKU类型代码'
            },
            {
              'id': 122,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000046,
              'name': '销售模式',
              'code': 'sale_mode_type',
              'table': '无维表，0-自营，1-POP',
              'tablePrimaryKey': 'sale_mode_type',
              'state': 'Y',
              'desc': '根据商品类型而来，分为POP、自营。',
              'managerErp': 'dingyi40',
              'creator': 'dingyi40',
              'createTime': '2018-07-27 10:21:29',
              'modifier': null,
              'modifyTime': null,
              'dimClassifyName': '商品维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [],
              'event': '销售模式'
            }
          ]
        },
        {
          'id': 1000054,
          'classifyName': '广告渠道维',
          'dimList': [
            {
              'id': 60,
              'parentId': -1,
              'level': 1,
              'dimClassifyId': 1000054,
              'name': '一级渠道分类',
              'code': 'chan_first_cate_cd',
              'table': 'dim_ol_chan_cate',
              'tablePrimaryKey': 'chan_fourth_cate_cd',
              'state': 'Y',
              'desc': '因没有独立的一级渠道分类维表，所以共用dim_ol_chan_cate，一级渠道分类id为chan_first_cate_cd，需要去重。',
              'managerErp': 'yuanweiping',
              'creator': 'lichao283',
              'createTime': '2018-07-05 10:15:13',
              'modifier': 'wuqiong37',
              'modifyTime': '2018-08-01 20:25:49',
              'dimClassifyName': '广告渠道维',
              'parentName': ' ',
              'parentLevel': 0,
              'children': [
                {
                  'id': 61,
                  'parentId': 60,
                  'level': 2,
                  'dimClassifyId': 1000054,
                  'name': '二级渠道分类',
                  'code': 'chan_second_cate_cd',
                  'table': 'dim_ol_chan_cate',
                  'tablePrimaryKey': 'chan_fourth_cate_cd',
                  'state': 'Y',
                  'desc': '因没有独立的一级渠道分类维表，所以共用ddim_ol_chan_cate，二级渠道分类id为chan_second_cate_cd，需要去重。',
                  'managerErp': 'yuanweiping',
                  'creator': 'lichao283',
                  'createTime': '2018-07-05 10:41:18',
                  'modifier': 'lichao283',
                  'modifyTime': '2018-08-01 20:25:49',
                  'dimClassifyName': '广告渠道维',
                  'parentName': '一级渠道分类',
                  'parentLevel': 1,
                  'children': [
                    {
                      'id': 62,
                      'parentId': 61,
                      'level': 3,
                      'dimClassifyId': 1000054,
                      'name': '三级渠道分类',
                      'code': 'chan_third_cate_cd',
                      'table': 'dim_ol_chan_cate',
                      'tablePrimaryKey': 'chan_fourth_cate_cd',
                      'state': 'Y',
                      'desc': '因没有独立的一级渠道分类维表，所以共用ddim_ol_chan_cate，三级渠道分类id为chan_third_cate_cd，需要去重。',
                      'managerErp': 'yuanweiping',
                      'creator': 'lichao283',
                      'createTime': '2018-07-05 10:47:35',
                      'modifier': 'lichao283',
                      'modifyTime': '2018-08-01 20:25:49',
                      'dimClassifyName': '广告渠道维',
                      'parentName': '二级渠道分类',
                      'parentLevel': 2,
                      'children': [
                        {
                          'id': 63,
                          'parentId': 62,
                          'level': 4,
                          'dimClassifyId': 1000054,
                          'name': '四级渠道分类',
                          'code': 'chan_fourth_cate_cd',
                          'table': 'dim_ol_chan_cate',
                          'tablePrimaryKey': 'chan_fourth_cate_cd',
                          'state': 'Y',
                          'desc': '因没有独立的一级渠道分类维表，所以共用ddim_ol_chan_cate，四级渠道分类id为chan_fourth_cate_cd，无需去重。',
                          'managerErp': 'yuanweiping',
                          'creator': 'lichao283',
                          'createTime': '2018-07-05 10:50:09',
                          'modifier': 'lichao283',
                          'modifyTime': '2018-08-01 20:25:49',
                          'dimClassifyName': '广告渠道维',
                          'parentName': '三级渠道分类',
                          'parentLevel': 3,
                          'children': [],
                          'event': '四级渠道分类'
                        }
                      ],
                      'event': '三级渠道分类'
                    }
                  ],
                  'event': '二级渠道分类'
                }
              ],
              'event': '一级渠道分类'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
    }
  }
}
</script>

<style lang="less" scoped>
.scale-block {
  margin-top: 20px;
}
</style>
