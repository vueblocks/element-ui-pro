<template>
  <li>
    <div class="list-name">
     <span
       v-if="hasChild"
       @click="toggle">
        <i v-if="!open" class="el-icon-circle-plus-outline"></i>
        <i v-else class="el-icon-remove-outline"></i>
     </span>
      {{ item.name.length > 10 ? `${item.name.slice(0,10)}...` : item.name}}
    </div>
    <ul v-show="open" v-if="hasChild">
      <collpase-tree
        class="tree"
        v-for="(item, index) in item.children"
        :key="index"
        :item="item"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'CollpaseTree',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    hasChild: function() {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.hasChild) {
        this.open = !this.open
      }
    },
    showDimDetail(id) {
      this.$router.push({
        name: 'DimensionDetail',
        query: { id: id }
      })
    }

  }
}
</script>

<style lang="less" scoped>
li {
  list-style-type: none;
}

ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}

a.dim-name {
  text-decoration: none;
  color: #99abb4;
  &:hover {
    color: #42C0FB;
  }
}

.list-name:hover {
  color: #42C0FB;
}
</style>
