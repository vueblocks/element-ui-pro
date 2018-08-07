<template>
  <section class="tag-select">
    <label class="label" v-if="label !== ''">{{label}}</label>
    <span class="ep-tag"
      v-for="(tag, index) in tagList"
      :class="[
        type && `ep-tag--${type}`,
        size && `ep-tag--${size}`,
        {'ep-tag__checked': tag.checked},
      ]"
      :style="{
        color: hoverdTag === tag.value ? tag.checked ? '#fff' : color : '',
        backgroundColor: tag.checked ? color : ''
      }"
      :key="index"
      @click.stop="handleSelect(tag)"
      @mouseover.stop="handleHoverd(true, tag)"
      @mouseout.stop="handleHoverd(false, tag)">
      {{tag.label}}
    </span>
  </section>
</template>

<script>
import { cloneDeep, omit } from 'lodash'

export default {
  name: 'TagSelect',
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    tags: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    color: String,
    size: {
      type: String,
      default: ''
    },
    multiple: {
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
      tagList: [],
      hoverdTag: ''
    }
  },
  methods: {
    init () {
      const tagList = cloneDeep(this.tags)
      this.tagList = tagList.map((v, i) => {
        v.checked = this.multiple ? this.value.includes(v.value) : v.value === this.value
        return v
      })
    },
    handleSelect (tag) {
      let [modelValue, changeValue] = ['', '']
      if (this.multiple) {
        tag.checked = !tag.checked
        modelValue = this.tagList.filter(v => v.checked).map(v => v.value)
        changeValue = this.tagList.filter(v => v.checked).map(v => this.labelInValue ? omit(v, 'checked') : v.value)
      } else {
        this.tagList.map(v => {
          v.checked = v.value === tag.value
        })
        modelValue = tag.value
        changeValue = this.labelInValue ? omit(tag, 'checked') : tag.value
      }
      this.$emit('input', modelValue)
      this.$emit('change', changeValue)
    },
    handleHoverd (isHoverd, tag) {
      this.hoverdTag = isHoverd ? tag.value : ''
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
  .tag-select {
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .label {
      display: inline;
      margin-right: 12px;
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, .85);
    }
    .ep-tag {
      display: inline-block;
      color: rgba(0, 0, 0, .65);
      list-style: none;
      line-height: 30px;
      height: 32px;
      padding: 0px 10px;
      border-radius: 4px;
      border: 1px solid transparent;
      font-size: 12px;
      box-sizing: border-box;
      -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      opacity: 1;
      cursor: pointer;
      white-space: nowrap;
      &.ep-tag--primary:hover {
        color: @element-primary;
      }
      &.ep-tag--success:hover {
        color: @element-success;
      }
      &.ep-tag--warning:hover {
        color: @element-warning;
      }
      &.ep-tag--danger:hover {
        color: @element-danger;
      }
      &.ep-tag--info:hover {
        color: @element-info;
      }
      &.ep-tag__checked {
        color: #fff;
        &:hover {
          color: #fff;
        }
        &.ep-tag--primary {
          background-color: @element-primary;
        }
        &.ep-tag--success {
          background-color: @element-success;
        }
        &.ep-tag--warning {
          background-color: @element-warning;
        }
        &.ep-tag--danger {
          background-color: @element-danger;
        }
        &.ep-tag--info {
          background-color: @element-info;
        }
      }
      &.ep-tag--medium {
        height: 28px;
        line-height: 26px;
      }
      &.ep-tag--small {
        height: 24px;
        line-height: 22px;
      }
      &.ep-tag--mini {
        height: 20px;
        line-height: 18px;
      }
    }
    .ep-tag+.ep-tag {
      margin-left: 8px;
    }
  }
</style>
