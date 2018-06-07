<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="handleClick">Toggle BottomDock</button>
    <bottom-dock :open="showBottomDock" />
  </div>
</template>

<script>
import BottomDock from '@/components/bottom-dock'

export default {
  name: 'HelloWorld',
  components: {
    BottomDock
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showBottomDock: false
    }
  },
  methods: {
    handleClick () {
      this.showBottomDock = !this.showBottomDock
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
