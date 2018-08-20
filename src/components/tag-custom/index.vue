<template>
  <div class="custom-tag">
    <el-button class="btn-tag btn-tag-prev" size="mini" v-show="showScroll"
               @click="() => {this.$refs.Tags.$el.scrollLeft = this.$refs.Tags.$el.scrollLeft - scrollOffset}">
      <i class="el-icon-arrow-left"></i>
    </el-button>
    <el-button class="btn-tag btn-tag-next" size="mini" v-show="showScroll"
               @click="() => {this.$refs.Tags.$el.scrollLeft = this.$refs.Tags.$el.scrollLeft + scrollOffset}">
      <i class="el-icon-arrow-right"></i>
    </el-button>
    <el-row class="group-tag" ref="Tags">
      <div class="group-border">
        <transition-group name="fade">
          <el-tag v-for="(tag, index) in tagLists" :key="tag.id" :title="tag.name" size="medium" closable
                  :class="currentTag.id === tag.id ? 'el-tag-active':''"
                  @click.native="handleChooseTag(tag)"
                  @dblclick.native="handleRenameTag(tag,index)"
                  @close="handleRemoveTag(tag,index)">
            <el-input v-if="renameShowInputIndex === index" v-model="renameInputValue" :placeholder="inputPlaceholder"
                      class="input-tag" size="mini" ref="RenameInput"
                      @keyup.enter.native="handleRenameConfirm(tag, index)"
                      @blur="handleRenameConfirm(tag, index)"/>
            <span v-else>{{tag.name}}</span>
          </el-tag>
        </transition-group>
        <el-input v-if="addInputVisible" v-model="addInputValue" :placeholder="inputPlaceholder"
                  class="input-tag" size="mini" ref="GroupAddInput"
                  @keyup.enter.native="handleAddConfirm" @blur="handleAddConfirm"/>
        <el-button v-else class="btn-tag" size="mini" @click="handleShowAdd">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
// 延时区别单双击
let clickTimer
export default {
  name: 'CustomTag',
  props: {
    tagLists: {
      type: Array,
      default() {
        return []
      }
    },
    scrollOffset: {
      type: Number,
      default() {
        return 92
      }
    }
  },
  data() {
    return {
      showScroll: false,
      currentTag: this.tagLists[0],
      addInputVisible: false,
      addInputValue: '',
      renameShowInputIndex: -1,
      renameInputValue: '',
      tagRenameTemp: '',
      inputPlaceholder: '请输入分组'
    }
  },
  watch: {
    currentTag () {}
  },
  methods: {
    handleChooseTag(tag) {
      // 取消上次延时未执行的方法
      clearTimeout(clickTimer)
      const _this = this
      clickTimer = setTimeout(function () {
        _this.currentTag = tag
        _this.$emit('currentTag', tag)
      }, 250)
    },
    handleRenameTag(tag, index) {
      clearTimeout(clickTimer)
      if (index !== 0) {
        this.tagRenameTemp = tag.name
        this.renameShowInputIndex = index

        this.$nextTick(_ => {
          this.$refs.RenameInput[0].$refs.input.focus()
        })
      }
    },
    handleRenameConfirm(tag, index) {
      let _renameInputValue = this.renameInputValue
      if (_renameInputValue && this.checkRepeat(_renameInputValue)) {
        this.$emit('renameTag', tag, index, _renameInputValue)
      }
      this.renameShowInputIndex = -1
      this.renameInputValue = ''
      this.$nextTick(_ => {
        this.groupArrowState()
      })
    },
    handleRemoveTag(tag, index) {
      this.$emit('removeTag', tag, index)
      this.currentTag = this.tagLists[0]
      this.$nextTick(_ => {
        this.groupArrowState()
      })
    },
    handleShowAdd() {
      this.addInputVisible = true
      this.$nextTick(_ => {
        this.$refs.GroupAddInput.$refs.input.focus()
      })
    },
    handleAddConfirm() {
      let _addInputValue = this.addInputValue
      if (_addInputValue && this.checkRepeat(_addInputValue)) {
        this.$emit('addTag', _addInputValue)
        this.$nextTick(_ => {
          this.groupArrowState()
        })
      }
      this.addInputVisible = false
      this.addInputValue = ''
    },
    groupArrowState() {
      this.showScroll = this.$refs.Tags.$el.scrollWidth > this.$refs.Tags.$el.clientWidth
    },
    checkRepeat(val) {
      if (val !== '') {
        for (const item of this.tagLists) {
          if (val === item.name) {
            this.$message({
              type: 'error',
              message: '名称重复！'
            })
            return false
          }
        }
      }
      return true
    }
  }
}
</script>

<style lang="less">
.custom-tag {
  padding-top: 28px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  .btn-tag {
    margin-left: 8px;
    margin-bottom: 4px;
    padding: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #333;
    background-color: transparent;
  }

  .btn-tag:hover {
    color: #000;
    border-color: rgba(0, 0, 0, .5);
  }

  .btn-tag-prev {
    float: left;
    margin: 4px 8px 0 -32px;
  }

  .btn-tag-next {
    float: right;
    margin: 4px -32px 0 8px;
  }

  .group-tag {
    font-size: 0;
    border: 0;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;

    .group-border {
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    span.el-tag:first-child {
      cursor: default;
      padding: 0 20px;

      i {
        display: none;
      }
    }

    .el-tag {
      margin-bottom: -1px;
      vertical-align: bottom;
      cursor: pointer;
      border-radius: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      color: rgba(0, 0, 0, .5);
      border: 1px solid rgba(0, 0, 0, .1);
      border-bottom-color: transparent;
      background-color: transparent !important;

      .el-icon-close {
        color: rgba(0, 0, 0, .5);
      }
      .el-icon-close:hover {
        color: #fff;
        background-color: #ccc;
      }
    }

    .el-tag:hover {
      color: #000
    }

    .el-tag + .el-tag {
      margin-left: 8px;
    }

    .el-tag-active {
      color: #000;
      border-bottom: 1px solid #fff;
    }

    input {
      border: 0;
      height: 22px;
      background-color: transparent;
    }

    .input-tag {
      margin-left: 8px;
      padding: 0;
      width: 100px;
      height: 28px;
      line-height: 28px;
      border: 0;
    }

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

}
</style>
