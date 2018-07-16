<template>
  <div class="collapse-checkbox">
    <div class="collapse-checkbox__header">
      <div class="header-title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="header-title" v-else>
        <span v-text="title"></span>
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
        v-for="(group, groupIndex) in model"
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
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'CollapseCheckbox',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    showCheckAll: {
      type: Boolean,
      default: false
    },
    labelInValue: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value || [],
      activeNames: [0],
      checkList: [],
      checkChildrenList: [],
      checkAll: false,
      isIndeterminate: false
    }
  },
  computed: {
    model () {
      return this.data
    },
    totalDataLength () {
      let length = 0
      this.data.forEach(item => {
        length += item.list.length
      })
      return length
    },
    totalCheckListLength () {
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
    data (val) {
      this.setCheckList(val)
    }
  },
  methods: {
    __init(checkAll) {
      this.data.map(v => {
        this.$set(v, 'isIndeterminate', false)
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
      if (!isEmpty(this.currentValue)) {
        this.setCheckedKeys(this.currentValue)
      }
    },
    setCheckedByKeys (keys) {
      this.data.map(group => {
        return {
          ...group,
          list: group.list.map(item => {
            this.$set(item, 'checked', keys.includes(item.value))
            return item
          })
        }
      })
      return this.data
    },
    setCheckList (val) {
      const checkList = val.map(group => {
        const checkedGroup = group.list.map(item => item.checked ? item.value : '')
        const filterList = checkedGroup.filter(vv => vv !== '')
        if (filterList.length > 0) {
          this.$set(group, 'isIndeterminate', true)
        } else {
          this.$set(group, 'isIndeterminate', false)
        }
        return filterList
      })
      this.$nextTick(_ => {
        this.checkList = checkList
        this.handleChange()
      })
    },
    handleChange () {
      const checkedList = this.checkList.reduce((a, b) => a.concat(b))
      this.setCheckedByKeys(checkedList)
      this.$emit('input', checkedList)
      if (this.labelInValue) {
        const allList = this.data.reduce((a, b) => a.list.concat(b.list))
        const labelWithValue = allList.filter(v => checkedList.includes(v.value))
        this.$emit('change', labelWithValue)
      } else {
        this.$emit('change', checkedList)
      }
      this.isCheckAll()
    },
    // 子节点选择
    handleCheckChange (val, index, length) {
      this.checkChildrenList = this.checkChildrenList.map((item, groupIndex) => {
        if (index === groupIndex) return val.length === this.data[index].list.length
        return item
      })
      const isIndeterminate = val.length > 0 && val.length < length
      this.setGroupKeys('isIndeterminate', index, isIndeterminate)
      this.handleChange()
    },
    // 组选择
    handleCheckAllChildren (checkAllChildren, index) {
      this.checkList = this.checkList.map((list, groupIndex) => {
        if (groupIndex !== index) return list
        if (!checkAllChildren) return []
        return this.data[index].list.map((item, index) => {
          return item.value
        })
      })
      this.setGroupKeys('isIndeterminate', index, false)
      this.handleChange()
    },
    // 全选
    handleCheckAll (checkAll) {
      this.__init(checkAll)
      this.handleChange()
    },
    isCheckAll () {
      this.checkAll = this.totalDataLength === this.totalCheckListLength
      this.isIndeterminate = this.totalCheckListLength > 0 && this.totalCheckListLength < this.totalDataLength
    },
    setGroupKeys (key, index, val) {
      this.data.map((v, i) => {
        if (index === i) {
          this.$set(v, key, val)
        }
        return v
      })
    },
    setCheckedKeys (keys = []) {
      const model = this.setCheckedByKeys(keys)
      this.setCheckList(model)
    }
  },
  mounted () {
    this.__init()
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
