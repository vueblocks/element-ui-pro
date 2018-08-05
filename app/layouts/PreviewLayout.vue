<template>
  <el-container>
    <el-aside width="256px" class="ep-aside">
      <el-header height="64px" class="ep-aside__header">
        <div class="header-logo">
          <img :src="require('@/assets/logo.png')" alt="Vue Logo">
        </div>
        <div class="header-title">
          <span>Element UI Pro</span>
        </div>
      </el-header>
      <el-menu
        router
        :default-active="$route.path"
        class="ep-menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001529"
        text-color="#999"
        active-text-color="#fff">
        <el-menu-item index="/preview/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/preview/charts">
          <i class="el-icon-document"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-menu-item index="/preview/extends">
          <i class="el-icon-document"></i>
          <span slot="title">组件扩展</span>
        </el-menu-item>
        <el-submenu index="/preview/tables">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>表格</span>
          </template>
          <el-menu-item index="/preview/tables/inline-edit">行内编辑</el-menu-item>
          <el-menu-item index="/preview/tables/tree-table">树形表格</el-menu-item>
          <el-menu-item index="/preview/tables/tree-inline-edit">树形行内编辑</el-menu-item>
        </el-submenu>
        <el-menu-item index="/preview/exceptions">
          <i class="el-icon-document"></i>
          <span slot="title">异常页面</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="64px" class="ep-container__header">
        <div class="header-action">
          <el-button type="text" @click="$router.push('/components/tag-select')">组件</el-button>
        </div>
      </el-header>
      <el-main>
        <!-- <transition name="fade-transverse"> -->
          <router-view />
        <!-- </transition> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'PreviewLayout',
  data () {
    return {
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/preview.less';

// 过渡动画 横向渐变
.fade-transverse-leave-active,
.fade-transverse-enter-active {
  transition: all .5s;
}
.fade-transverse-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transverse-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.ep-aside__header {
  display: flex;
  background-color: #002140;
  .header-logo {
    img {
      width: 32px;
      height: 32px;
      padding: 16px;
      padding-left: 0;
    }
  }
  .header-title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
}

.ep-container__header {
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .header-action {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 32px;
  }
}

.ep-aside {
  height: 100vh;
  transition: all .3s;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background-color: #001529;
  border-right: 0;
}
</style>
