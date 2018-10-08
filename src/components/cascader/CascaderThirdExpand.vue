<template>
  <div class="cascade-third-select" v-if="dataLists.length > 0">

    <div class="left-container">
      <ul>
        <li
          v-for="first in dataLists" :key="first.id"
          :class="{ 'current-first': currentCate[0].id === first.id }"
          @click="handleSelectFirst(first)"
        >
          {{first.name}}
          <i :class="{ 'el-icon-arrow-right': currentCate[0].id === first.id }"/>
        </li>
      </ul>
    </div>

    <div class="right-container">
      <ul v-if="secondLists.length > 0">
        <li v-for="second in secondLists" :key="second.id">
          <div class="second-item">
            <div
              v-if="ifSelectAll"
              :class="{ 'second-item-select': ifSelectAll, 'current-second': currentCate[1].id === second.id }"
              @click="handleSelectSecond(second)"
            >
              {{ second.name }}
            </div>
            <div v-else> {{ second.name }}</div>
          </div>

          <div class="third-items">
            <span
              v-for="third in second.children" :key="third.id"
              :class="{ 'current-third': currentCate[2].id === third.id }"
              @click="handleSelectThird(second, third)"
            >
              {{ third.name }}
            </span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
const VALUE = { id: '', name: '', level: '' }

export default {
  name: 'CascaderThirdExpand',
  components: {},
  filters: {},
  mixins: [],
  props: {
    dataLists: {
      type: Array,
      required: true
    },
    ifClear: {
      type: Boolean,
      default: false
    },
    // 是否一二三级都可选
    ifSelectAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentCate: [VALUE, VALUE, VALUE]
    }
  },
  computed: {
    secondLists: function() {
      let _secondLists = []
      this.dataLists.map(item => {
        if (String(item.id) === String(this.currentCate[0].id)) _secondLists = item.children
      })
      return _secondLists
    },
    selectVal: function() {
      return {
        first: this.currentCate[0],
        second: this.currentCate[1],
        third: this.currentCate[2]
      }
    }
  },
  watch: {
    ifClear(val) {
      // 优化el-tabs嵌套切换时的体验，不清空第一级
      this.currentCate[1] = VALUE
      this.currentCate[2] = VALUE
    },
    dataLists(val) {
      if (val.length > 0) this.currentCate[0] = Object.assign({}, { name: val[0].name, id: val[0].id, level: val[0].level })
    }
  },
  methods: {
    handleSelectFirst(item) {
      this.$set(this.currentCate, 0, { name: item.name, id: item.id, level: item.level })
      this.$set(this.currentCate, 1, VALUE)
      this.$set(this.currentCate, 2, VALUE)
      if (this.ifSelectAll) { this.$emit('selectVal', this.selectVal) }
    },
    handleSelectSecond(item) {
      this.$set(this.currentCate, 1, { name: item.name, id: item.id, level: item.level })
      this.$set(this.currentCate, 2, VALUE)
      if (this.ifSelectAll) { this.$emit('selectVal', this.selectVal) }
    },
    handleSelectThird(second, third) {
      // 取消再次点击时清空
      // if (third.id === this.currentCate[2].id) {
      //   this.$set(this.currentCate, 2, VALUE)
      // } else {
      this.$set(this.currentCate, 1, { name: second.name, id: second.id, level: second.level })
      this.$set(this.currentCate, 2, { name: third.name, id: third.id, level: third.level })
      // }
      this.$emit('selectVal', this.selectVal)
    }
  }
}
</script>

<style lang="less" scoped>
.cascade-third-select {
  display: flex;
  height: 250px;

  .left-container {
    /*width: 242px;*/
    overflow-y: auto;
    ul {
      margin: 0;
      padding: 15px 0;
      width: 240px;
      height: available;
      height: -webkit-fill-available;
      list-style-type: none;

      li {
        height: 40px;
        line-height: 40px;
        padding-left: 66px;
        font-size: 14px;
        color: #4E6073;
        cursor: pointer;
        &:hover {
          background-color: #F1F3F5;;
        }

        i {
          float: right;
          margin-right: 17px;
          font-size: 14px;
          line-height: 40px;
        }

      }

      .current-first {
        color: #00C4FF;
        font-weight: 500;
        background-color: #F1F3F5;;
      }
    }

  }
  .right-container {
    flex: 1;
    overflow-y: auto;
    ul {
      padding-left: 20px;
      padding-right: 40px;
      font-size: 14px;
      list-style-type: none;

      li {
        display: flex;

        .second-item {
          flex: none;
          margin-right: 30px;
          width: 110px;
          min-height: 40px;
          text-align: right;
          color: #A5ADB5;
        }

        .second-item-select {
          cursor: pointer;

          &:hover {
            font-size: 14px;
            color: #00C2FF;
          }
        }
        .current-second {
          font-size: 14px;
          color: #00C2FF;
        }

        .third-items {

          span {
            margin-right: 10px;
            padding: 1px 8px 3px 8px;
            font-size: 14px;
            line-height: 24px;
            color: #4e6073;
            cursor: pointer;

            &:hover {
              color: #fff;
              background: #42C0FB;
              border-radius: 2px;
            }
          }

          /*span:first-child {*/
          /*padding-left: 0;*/
          /*}*/

          .current-third {
            color: #fff;
            background: #42C0FB;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>
