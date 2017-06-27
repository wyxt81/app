<!-- 这里是一个App组件 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <test></test>
    <count></count>-->
    <todos></todos>
  </div>
</template>

<script>
import Test from './components/Test'
import Count from './components/Count'
import Todos from './components/Todos'
export default {
  name: 'app',
  components:{
    Test,
    Count,
    Todos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
