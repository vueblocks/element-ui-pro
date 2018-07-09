<template>
  <div class="cascader-category">
    <div class="header-row">
      <div class="header-title">
        <slot name="title"></slot>
      </div>
      <div class="select-all">
        <el-checkbox
          v-if="showCheckAll&&!isEmptyList"
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAll">
          全选
        </el-checkbox>
      </div>
    </div>
    <el-collapse class="cascader-collapse" v-model="activeNames">
      <el-collapse-item
        v-for="(list, listIndex) in checkBoxList"
        :key="listIndex"
        :name="listIndex">
        <template slot="title">
          <el-checkbox
            class="check-children"
            v-model="checkChildrenList[listIndex]"
            :indeterminate="list.isIndeterminate"
            :checked="list.checked"
            @change="(val) => handleCheckAllChildren(val, listIndex)"
          >
            {{ list.title }}
          </el-checkbox>
        </template>
        <div>
          <el-checkbox-group
            v-model="checkList[listIndex]"
            class="check-group"
            @change="(val) => handleCheckChange(val, listIndex, list.list.length)"
          >
            <el-checkbox
              v-for="(item, index) in list.list"
              class="check-box"
              :key="index"
              :label="item.value"
              :checked="item.checked"
            >
              {{item.label}}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
  <!-- <div slot="footer" class="footer">
    <span class="select-all">
      <el-checkbox v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
    </span>
    <span class="dialog-footer">
      <el-button @click="close" class="btn">关闭</el-button>
      <el-button @click="submit" type="primary" class="btn submit">确认</el-button>
    </span>
  </div> -->
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

export default {
  name: 'CollapseCheckbox',
  props: {
    title: {
      type: String,
      default: ''
    },
    showCheckAll: {
      type: Boolean,
      default: false
    },
    // handleClose: {
    //   type: Function
    // },
    checkBoxList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeNames: [0],
      checkList: [],
      checkChildrenList: [],
      checkAll: false,
      isIndeterminate: false
    }
  },
  computed: {
    totalCheckBoxListLength() {
      let length = 0
      this.checkBoxList.forEach(item => {
        length += item.list.length
      })
      return length
    },
    totalCheckListLength() {
      let length = 0
      this.checkList.forEach(item => {
        length += item.length
      })
      return length
    },
    isEmptyList () {
      return _.isEmpty(this.checkBoxList)
    }
  },
  watch: {
    checkBoxList() {
      this.__init()
    }
  },
  mounted() {
    this.__init()
  },
  methods: {
    __init(checkAll) {
      this.checkBoxList.map((v, i) => {
        Vue.set(v, 'isIndeterminate', false)
        return v
      })
      if (checkAll) {
        this.isIndeterminate = false
        this.checkChildrenList = this.checkBoxList.map(item => true)
        this.checkList = this.checkBoxList.map((group) => {
          return group.list.map((item, index) => {
            return item.value
          })
        })
      } else {
        this.checkList = this.checkBoxList.map(item => [])
        this.checkChildrenList = this.checkBoxList.map(item => false)
      }
    },
    // cloneData() {
    //   this.cloneCheckList = _.cloneDeep(this.checkList)
    //   this.clonecheckChildrenList = _.cloneDeep(this.checkChildrenList)
    //   this.cloneCheckAll = this.checkAll
    // },
    // 点击关闭时还原克隆数据
    // close() {
    //   this.checkList = this.cloneCheckList
    //   this.checkChildrenList = this.clonecheckChildrenList
    //   this.checkAll = this.cloneCheckAll
    //   this.handleClose()
    // },
    // emit选择结果
    emitResult() {
      let result = []
      this.checkList.map((list) => result.push(...list))
      // console.log(result)
      this.$emit('change', result)
    },

    // vue检测数组需要替换掉数组
    handleCheckAllChildren(checkAllChildren, index) {
      this.checkList = this.checkList.map((list, listIndex) => {
        if (listIndex !== index) return list
        if (!checkAllChildren) return []
        return this.checkBoxList[index].list.map((item, index) => {
          return item.value
        })
      })
      this.setCheckbox('isIndeterminate', index, false)
      this.isCheckAll()
      this.emitResult()
    },
    handleCheckChange(val, index, length) {
      // console.group('handleCheckChange')
      // console.log(val)
      // console.log(index)
      // console.log(length)
      // console.log(this.checkChildrenList)
      // console.groupEnd()
      this.checkChildrenList = this.checkChildrenList.map((item, listIndex) => {
        if (index === listIndex) return val.length === this.checkBoxList[index].list.length
        return item
      })
      const isIndeterminate = val.length > 0 && val.length < length
      this.setCheckbox('isIndeterminate', index, isIndeterminate)
      this.isCheckAll()
      this.emitResult()
    },
    handleCheckAll(checkAll) {
      this.__init(checkAll)
      this.emitResult()
    },
    isCheckAll() {
      this.checkAll = this.totalCheckBoxListLength === this.totalCheckListLength
      this.isIndeterminate = this.totalCheckListLength > 0 && this.totalCheckListLength < this.totalCheckBoxListLength
    },
    setCheckbox (key, index, val) {
      this.checkBoxList.map((v, i) => {
        if (index === i) {
          Vue.set(v, key, val)
        }
        return v
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .cascader-category {
    .header-row {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #ebeef5;
      font-weight: 700;
    }
    .select-all {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 24px;
    }
    .cascader-collapse {
      border-top: none;
      .check-children {
        font-weight: 700;
      }
      .check-group {
        line-height: 0;
        .check-box {
          margin-bottom: 16px;
        }
      }
    }
  }
</style>
