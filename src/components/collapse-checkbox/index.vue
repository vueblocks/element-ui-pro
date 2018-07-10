<template>
  <div class="collapse-checkbox">
    <div class="collapse-checkbox__header">
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
    <el-collapse class="collapse-checkbox__collapse" v-model="activeNames">
      <el-collapse-item
        v-for="(group, groupIndex) in data"
        :key="groupIndex"
        :name="groupIndex">
        <template slot="title">
          <el-checkbox
            class="check-children"
            v-model="checkChildrenList[groupIndex]"
            :indeterminate="group.isIndeterminate"
            :checked="group.checked"
            @change="(val) => handleCheckAllChildren(val, groupIndex)"
          >
            {{ group.title }}
          </el-checkbox>
        </template>
        <div>
          <el-checkbox-group
            v-model="checkList[groupIndex]"
            class="check-group"
            @change="(val) => handleCheckChange(val, groupIndex, group.list.length)"
          >
            <el-checkbox
              v-for="(item, index) in group.list"
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
</template>

<script>
import Vue from 'vue'
import { isEmpty } from 'lodash'

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
    data: {
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
      this.data.forEach(item => {
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
      return isEmpty(this.data)
    }
  },
  watch: {
    data() {
      this.__init()
    }
  },
  mounted() {
    this.__init()
  },
  methods: {
    __init(checkAll) {
      this.data.map((v, i) => {
        Vue.set(v, 'isIndeterminate', false)
        return v
      })
      if (checkAll) {
        this.isIndeterminate = false
        this.checkChildrenList = this.data.map(item => true)
        this.checkList = this.data.map((group) => {
          return group.list.map((item, index) => {
            return item.value
          })
        })
      } else {
        this.checkList = this.data.map(item => [])
        this.checkChildrenList = this.data.map(item => false)
      }
    },
    emitResult() {
      let result = []
      this.checkList.map((list) => result.push(...list))
      this.$emit('change', result)
    },
    handleCheckAllChildren(checkAllChildren, index) {
      this.checkList = this.checkList.map((list, groupIndex) => {
        if (groupIndex !== index) return list
        if (!checkAllChildren) return []
        return this.data[index].list.map((item, index) => {
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
      this.checkChildrenList = this.checkChildrenList.map((item, groupIndex) => {
        if (index === groupIndex) return val.length === this.data[index].list.length
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
      this.data.map((v, i) => {
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
  .collapse-checkbox {
    .el-checkbox-group .el-checkbox .el-checkbox__label {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 20px;
      vertical-align: middle;
    }
    .collapse-checkbox__header {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
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
    .collapse-checkbox__collapse {
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
