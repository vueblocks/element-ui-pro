<template>
  <div class="condition-select">
    <span class="row-name">{{ name }}</span>
    <span
      v-for="(item,idx) in dataList" :key="idx"
      class="item-sty"
      :class="{ 'current-sty':activeVal === item.value }"
      @click="handleClick(item)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ConditionSelect',
  data() {
    return {
      activeVal: ''
    }
  },
  props: {
    name: {
      required: true,
      default: ''
    },
    dataList: {
      required: true,
      default: []
    },
    value: {
      required: false,
      default: ''
    },
    // 是否支持再次点击后取消选中
    ifCancel: {
      required: false,
      default: true
    }
  },
  watch: {
    value(val) {
      this.activeVal = val
    },
    activeVal(val) {
      this.$emit('input', val)
    }
  },
  created() {
    this.activeVal = this.value
  },
  methods: {
    handleClick(item) {
      if (this.ifCancel) this.activeVal = item.value === this.activeVal ? '' : item.value
      else this.activeVal = item.value
    }
  }
}
</script>

<style lang="less">
.condition-select {
  line-height: 50px;
  font-size: 14px;
  color: #4E6073;

  .item-sty {
    margin-right: 20px;
    padding: 1px 8px 3px 8px;
    font-size: 14px;
    color: #4E6073;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #42C0FB;
      border-radius: 2px;
    }
  }

  .current-sty {
    color: #fff;
    background-color: #42C0FB;
    border-radius: 2px;
  }
}
</style>
