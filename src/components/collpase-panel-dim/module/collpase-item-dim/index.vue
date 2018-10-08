<template>
  <div class="scale-single-block">
    <div class="scale-single-type">{{ scaleItem.classifyName }}</div>
    <div class="scale-single-line">|</div>
    <div class="scale-single-detail">
      <div
        class="scale-single-name2"
        v-for="(singleScale, index) in scaleItem.dimList"
        :key="index"
        v-show="index <= showNumber"
        :title="singleScale.name">
        <collpase-tree :item="singleScale"/>
      </div>
    </div>
    <div v-show="scaleItem.dimList.length > 5" @click="handleShowMore(scaleItem.dimList)"
         class="scale-single-show-more">
      <span>更多 </span>
      <i :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
    </div>
  </div>
</template>

<script>
import CollpaseTree from './tree'

export default {
  name: 'CollpaseItemDim',
  components: {
    CollpaseTree
  },
  props: {
    scaleItem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      showMore: false,
      showNumber: 4
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    handleShowMore(list) {
      this.showMore = !this.showMore
      this.showNumber = this.showMore ? list.length : 4
    }
  }
}
</script>

<style lang="less" scoped>
.scale-single-block {
  margin: 20px 0 0 0;
  font-family: '微软雅黑';
  font-size: 14px;
  color: #99ABB4;
  letter-spacing: 0;
  border-bottom: 1px dotted rgba(52, 73, 94, 0.14);
}

.scale-single-type, .scale-single-line, .scale-single-detail, .scale-single-show-more {
  display: inline-block;
  vertical-align: top;
}

.scale-single-type {
  width: 8%;
  color: #455A64;
}

.scale-single-line {
  width: 3%;
  // padding-left: 10px;
  // padding-right: 10px;
}

.scale-single-detail {
  width: 82%;
  cursor: pointer;

  .scale-single-name2 {
    padding: 0px 0 20px 0;
    float: left;
    width: 20%;
    /*&:hover {*/
    /*color: #42C0FB;*/
    /*}*/
  }
}

.scale-single-show-more {
  width: 5%;
  font-family: '微软雅黑';
  font-size: 14px;
  color: #99ABB4;
  letter-spacing: 0;
  cursor: pointer;
  &:hover {
    color: #42C0FB;
  }
}
</style>
