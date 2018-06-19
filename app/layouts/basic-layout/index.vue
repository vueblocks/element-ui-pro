<template>
  <el-container>
    <el-aside width="200px" class="ep-aside">
      <el-header height="64px" class="ep-aside__header">
        <div class="header-logo">
          <img :src="require('@/assets/logo.png')" alt="Vue Logo">
        </div>
        <div class="header-title">
          <span>Element Pro</span>
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
        <el-menu-item index="/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/charts">
          <i class="el-icon-document"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-menu-item index="/extends">
          <i class="el-icon-document"></i>
          <span slot="title">组件扩展</span>
        </el-menu-item>
        <!-- <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>组件扩展</span>
          </template>
          <el-menu-item-group>
            <template slot="title">日期类</template>
            <el-menu-item index="1-1">日期选择组</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="1-2">标签选择组</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="/exceptions">
          <i class="el-icon-document"></i>
          <span slot="title">异常页面</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="64px" class="ep-container__header">
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
  name: 'BasicLayout',
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

<style lang="less">
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
  padding: 0 0 16px 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.ep-aside {
  height: 100vh;
  transition: all .3s;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background-color: #001529;
  border-right: 0;
  .ep-menu {
    border-right: 0;
    background-color: #001529;
    .el-menu-item {
      height: 48px;
      line-height: 48px;
    }
    .el-submenu.is-active {
      .el-submenu__title {
        color: #fff !important;
      }
    }
    .el-menu-item.is-active {
      background-color: #1890ff !important;
    }
  }
}
</style>
