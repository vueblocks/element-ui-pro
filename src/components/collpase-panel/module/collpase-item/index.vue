<template>
  <div class="scale-single-block">
    <div class="scale-single-type">{{ scaleItem.title }}</div>
    <div class="scale-single-line">|</div>
    <div class="scale-single-detail">
      <div
        @click="handleShowScale(singleScale)"
        class="scale-single-name"
        v-for="(singleScale, index) in scaleItem.list"
        :key="index" v-show="index <= showNumber"
        :title="singleScale.label">
        {{ singleScale.label.length > 10 ? `${singleScale.label.slice(0,10)}...` : singleScale.label}}
      </div>
    </div>
    <div v-show="scaleItem.list.length > 5" @click="handleShowMore(scaleItem.list)" class="scale-single-show-more">
      <span>更多 </span>
      <i :class="showMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollpaseItem',
  components: {},
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
  mounted() {},
  methods: {
    handleShowMore(list) {
      this.showMore = !this.showMore
      this.showNumber = this.showMore ? list.length : 4
    },

    handleShowScale(scale) {
      this.$router.push({
        name: 'ScaleDetail',
        query: {
          code: scale.value
        }
      })
    }
  }
}
</script>

<style lang="less">
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

  .scale-single-name {
    padding: 0px 0 20px 0;
    display: inline-block;
    width: 20%;
    a {
      text-decoration: none;
      color: #99abb4;
      &:hover {
        color: #42C0FB;
      }
    }
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
