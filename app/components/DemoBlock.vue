<template>
  <section class="demo-block">
    <el-card :body-style="{padding: '0px'}" shadow="hover">
      <div class="demo-block__component" v-if="$slots.component">
        <slot name="component"></slot>
      </div>
      <el-collapse-transition>
        <div v-if="isShowCode">
          <div class="demo-block__tips">
            <slot name="tips"></slot>
          </div>
          <div class="demo-block__code">
            <code-block :sourcecode="code" />
          </div>
        </div>
      </el-collapse-transition>
      <el-button
        class="btn-block"
        type="text"
        :icon="isShowCode ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"
        @click="isShowCode = !isShowCode">
      </el-button>
    </el-card>
  </section>
</template>

<script>
import CodeBlock from '@/components/CodeBlock.vue'

export default {
  name: 'DemoBlock',
  components: {
    CodeBlock
  },
  props: {
    code: String
  },
  data () {
    return {
      isShowCode: false
    }
  },
  methods: {

  },
  mounted () {
    console.log(this.$slots)
  }
}
</script>

<style lang="less" scoped>
  .demo-block {
    .demo-block__component {
      padding: 24px;
      border-bottom: 1px solid #eaeefb;
    }
    .btn-block {
      width: 100%;
      padding: 16px;
      color: #d3dce6;
    }
    .demo-block__code {
      border-bottom: 1px solid #eaeefb;
    }
  }
</style>
