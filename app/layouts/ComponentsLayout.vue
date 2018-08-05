<template>
  <el-container>
    <el-header height="64px" class="ep-container__header">
      <div class="header-logo">
        <img :src="require('@/assets/logo.png')" alt="Vue Logo">
      </div>
      <div class="header-title">
        <span>Element UI Pro</span>
      </div>
      <div class="header-action">
        <el-button round plain size="medium" @click="$router.push('/preview/dashboard')">预览</el-button>
      </div>
    </el-header>
    <el-main class="ep-container__main">
      <el-row type="flow">
        <el-col :span="4">
          <el-aside width="100%" class="ep-aside">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/components/charts">
                <div class="aside-title" slot="title"><strong>Charts</strong> <span>图表</span></div>
              </el-menu-item>
              <el-menu-item index="/components/tag-select">
                <div class="aside-title" slot="title"><strong>TagSelect</strong> <span>标签选择器</span></div>
              </el-menu-item>
              <el-menu-item index="/components/datepicker-group">
                <div class="aside-title" slot="title"><strong>DatepickerGroup</strong> <span>日期选择组</span></div>
              </el-menu-item>
              <el-menu-item index="/components/collapse-checkbox">
                <div class="aside-title" slot="title"><strong>CollapseCheckbox</strong> <span>折叠多选器</span></div>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </el-col>
        <el-col :span="20">
          <el-container class="ep-main__container">
            <router-view />
          </el-container>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ComponentsLayout',
  data () {
    return {}
  },
  methods: {
    handleOpen () {
      console.log('dd')
    },
    handleClose () {
      console.log('dd')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/components.less';

.ep-container__header {
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
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
    justify-content: center;
    align-items: center;
    color: @vue-blue;
    font-size: 20px;
    font-weight: 500;
  }
  .header-action {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 32px;
  }
}
// main container
.ep-container__main {
  padding: 40px 0;
  .ep-aside {
    .aside-title {
      span {
        font-size: 13px;
      }
    }
  }
  .ep-main__container {
    margin-left: -1px;
    border-left: 1px solid #e6e6e6;
    padding: 0 64px;
  }
}
</style>
