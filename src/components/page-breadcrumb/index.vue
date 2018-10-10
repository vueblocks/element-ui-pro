<template>
  <section class="page-header">
    <span class="page-title">{{pageTitle}}</span>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="page-breadcrumb" v-if="routes.length > 1">
      <el-breadcrumb-item
        v-for="(item, index) in routeList"
        :key="index"
        :to="item.to"
      >
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'PageBreadcrumb',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pageTitle() {
      const routes = cloneDeep(this.routes)
      return routes.pop()
    },
    routeList() {
      const routeLevel = this.$route.path.split('/').length - 1
      const routesLength = this.routes.length
      return this.routes.map((v, i) => {
        const to = {
          path: this.$route.path.split('/', routeLevel - i).join('/')
        }
        return i < routesLength - 1 ? { name: v, to } : { name: v }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-header {
  margin-bottom: 20px;
  .page-title {
    font-size: 24px;
  }
  .page-breadcrumb {
    padding-top: 20px;
  }
}
</style>
