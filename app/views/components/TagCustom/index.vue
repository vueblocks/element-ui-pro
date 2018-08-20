<template>
  <div>
    <custom-tag :tagLists="tagLists" style="width: 600px;margin-left: 50px"
                @currentTag="handleCurrentTag"
                @renameTag="handleRenameTag"
                @removeTag="handleRemoveTag"
                @addTag="handleAddTag"/>
  </div>
</template>

<script>
import CustomTag from '../../../../src/components/tag-custom/index'

export default {
  components: { CustomTag },
  data() {
    return {
      tagLists: [{ id: '0', name: '常用' }, { id: '1', name: '分组1' }, { id: '2', name: '分组2' }]
    }
  },
  methods: {
    handleCurrentTag(val) {
      this.$message({
        type: 'info',
        message: '当前选中标签：' + JSON.stringify(val)
      })
    },
    handleRenameTag(tag, tagIndex, name) {
      this.tagLists[tagIndex].name = name
    },
    handleRemoveTag(tag, index) {
      this.tagLists.splice(index, 1)
    },
    handleAddTag(name) {
      this.tagLists.push({
        id: Math.random() * 10,
        name: name
      })
    }
  }
}
</script>

<style>

</style>
