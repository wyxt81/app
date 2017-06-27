<template lang="html">
  <div class="test">
    <h2>这是一个测试组件</h2>
    <p>{{msg}}</p>
    <button type="button" name="button" @click="f1">点我</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'Testing Content'
    }
  },
  methods:{
    f1(){
      console.info( this.msg );
    }
  }
}
</script>
<!-- 通过lang属性来确定是css还是less -->
<style lang="less" scoped>
.test{
  p{
    color:#f40;
    font-size:30px;
  }
  h2{
    color:#999;
  }

  }
</style>
