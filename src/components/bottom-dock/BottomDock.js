import { flattenClass } from '@/utils'

export default {
  name: 'BottomDock',
  props: {
    height: {
      type: Number,
      default: 96
    },
    backgroundColor: {
      type: String,
      default: '#42b983'
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOpen: this.open
    }
  },
  watch: {
    open(val) {
      this.isOpen = val
    }
  },
  render(h) {
    const classObj = {
      'is-open': this.isOpen
    }
    console.group()
    console.log(flattenClass(classObj))
    console.groupEnd()
    const data = {
      staticClass: `ep-bottom-dock ${flattenClass(classObj)}`,
      style: {
        'background-color': this.backgroundColor,
        height: `${this.height}px`
      }
    }
    return h('div', data, this.$slots.default)
  }
}
