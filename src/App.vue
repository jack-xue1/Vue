<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 id="xs">永远不会变的东西</h1>
    <!-- 引入路由部分 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#xs{
  color: red;
}
</style>
