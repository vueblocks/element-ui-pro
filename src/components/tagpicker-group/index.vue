<template>
  <section class="tagpicker-group">
    <label class="label" v-if="label !== ''">{{label}}：</label>
    <div
      v-for="(tag, index) in tagList"
      class="ep-tag"
      :class="{'ep-tag__checked': activeTag===tag.value}"
      :style="{
        color: hoverdTag===tag.value ? activeTag===tag.value ? '#fff' : color : '',
        backgroundColor: activeTag===tag.value ? color : ''
      }"
      :key="index"
      @click.stop="handleSelect(tag)"
      @mouseover.stop="handleHoverd(true, tag)"
      @mouseout.stop="handleHoverd(false, tag)"
    >
      <span v-text="tag.label" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'TagpickerGroup',
  props: {
    showDefaultTag: {
      type: Boolean,
      default: true
    },
    defaultTagValue: {
      type: String,
      default: 'all'
    },
    label: {
      type: String,
      default: ''
    },
    tags: {
      type: Array
    },
    color: String
  },
  data () {
    return {
      checkableTag: '',
      hoverdTag: '',
      isHover: false
    }
  },
  computed: {
    tagList () {
      const defaultTag = this.showDefaultTag ? [{
        label: '全部',
        value: 'all'
      }] : {}
      return [
        ...defaultTag,
        ...this.tags
      ]
    },
    activeTag () {
      return this.checkableTag || this.defaultTagValue
    }
  },
  methods: {
    handleSelect (tag) {
      this.checkableTag = tag.value
      this.$emit('change', tag.value)
    },
    handleHoverd (isHoverd, tag) {
      this.hoverdTag = isHoverd ? tag.value : ''
    }
  },
  created () {
    this.checkableTag = this.defaultTagValue
  }
}
</script>

<style lang="less">
  .tagpicker-group {
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .label {
      display: inline;
      margin-right: 8px;
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, .85);
    }
    .ep-tag {
      display: inline-block;
      color: rgba(0, 0, 0, .65);
      list-style: none;
      line-height: 20px;
      height: 20px;
      padding: 0px 8px;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid transparent;
      font-size: 12px;
      -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      opacity: 1;
      margin-right: 8px;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        color: #409efe;
      }
      &.ep-tag__checked {
        background-color: #409efe;
        color: #fff;
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
