<template>
  <div id="app">
    <dashboard/>
  </div>
</template>

<script>
import dashboard from './components/dashboard.vue';

export default {
  name: 'App',
  components: {
    dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

html {
  background: #f5f5f5;
}
</style>
