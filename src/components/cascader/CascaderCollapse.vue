<template>
  <div class="cascader-category">
    <div class="header-row">
      <div class="header-title">
        <slot name="title"></slot>
      </div>
      <div class="select-all">
        <el-checkbox v-if="showCheckAll&&!isEmptyList" v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
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
            @change="(val) => handleCheckChange(val, listIndex)"
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
</template>

<script>
import _ from 'lodash'

export default {
  name: 'CascaderCollapse',
  props: {
    title: {
      type: String,
      default: ''
    },
    showCheckAll: {
      type: Boolean,
      default: false
    },
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
      checkAll: false
    }
  },
  computed: {
    totalCheckBoxListLength() {
      let length = 0
      this.checkBoxList.forEach(item => length += item.list.length)
      return length
    },
    totalCheckListLength() {
      let length = 0
      this.checkList.forEach(item => length += item.length)
      return length
    },
    isEmptyList() {
      return _.isEmpty(this.checkBoxList)
    }
  },
  watch: {
    checkBoxList(val) {
      this.setChecked()
    }
  },
  mounted() {
    this.__init()
  },
  methods: {
    __init(checkAll) {
      if (checkAll) {
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
    setChecked() {
      const cloneData = _.cloneDeep(this.checkBoxList)
      this.checkChildrenList = cloneData.map(group => {
        const groupResult = group.list.map(item => item.checked)
        return !groupResult.includes(false)
      })
      const checkList = cloneData.map(group => group.list.map(item => item.checked ? item.value : ''))
      const filterList = checkList.map(v => v.filter(vv => vv !== ''))
      if (filterList.length > 0) {
        const allCheckedList = filterList.reduce((a, b) => a.concat(b))
        this.$emit('input', allCheckedList)
      }
      // 解决赋值为true的bug，有点奇葩
      this.$nextTick(_ => { this.checkList = filterList })
    },
    // emit选择结果
    emitResult() {
      let result = []
      this.checkList.map((list) => result.push(...list))
      this.$emit('change', result)
    },

    // vue检测数组需要替换掉数组
    handleCheckAllChildren(checkAllChildren, index) {
      // 勾选选中全部子节点时自动展开
      this.activeNames.push(index)
      this.checkList = this.checkList.map((list, listIndex) => {
        if (listIndex !== index) return list
        if (!checkAllChildren) return []
        return this.checkBoxList[index].list.map((item, index) => {
          return item.value
        })
      })
      this.isCheckAll()
      this.emitResult()
    },
    handleCheckChange(val, index) {
      this.checkChildrenList = this.checkChildrenList.map((item, listIndex) => {
        if (index === listIndex) return val.length === this.checkBoxList[index].list.length
        return item
      })
      this.isCheckAll()
      this.emitResult()
    },
    handleCheckAll(checkAll) {
      this.__init(checkAll)
      this.emitResult()
    },
    isCheckAll() {
      this.checkAll = this.totalCheckBoxListLength === this.totalCheckListLength
    }
  }
}
</script>

<style lang="less">
.cascader-category {
  color: #34495E;

  .el-checkbox__label {
    color: #34495E;
  }

  .el-collapse-item__arrow {
    line-height: 48px;
  }

  .header-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebeef5;
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
      color: #34495E;
      font-weight: 500;
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
