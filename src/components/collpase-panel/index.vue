<template>
  <div class="scale-list-block">
    <collpase-item :scaleItem="item" v-for="(item, index) in scaleList" :key="index"></collpase-item>
  </div>
</template>

<script>
import collpaseItem from './module/collpase-item/index.vue'

export default {
  name: 'CollpasePanel',
  components: {
    collpaseItem
  },
  props: {
    scaleList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>
