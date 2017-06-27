<template lang="html">
  <div class="count">
    <h3>这是count组件</h3>
    <p>{{count}}</p>
    <button type="button" name="button" @click="add">+</button>
    <button type="button" name="button" @click="sub">-</button>
    <button type="button" name="button" @click="asyn">异步</button>
    <ul>
      <li v-for="item in uncompleted">{{item.text}}---{{item.done}}</li>
    </ul>
  </div>
</template>

<script>
//从vuex中引入相应的方法
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  computed:{
    // cnt(){
    //   return this.$store.state.count;
    // }
    ...mapState(['count']),//推荐写法
    //...mapState({cnt:state=>state.count})
    // completed(){
    //   return this.$store.getters.completed;
    // },
    // uncompleted(){
    //   return this.$store.getters.uncompleted;
    // }
    //推荐写法
    //...mapGetters(['completed','uncompleted']),
    ...mapGetters({
      'completed':'completed',
      'uncompleted':'uncompleted'
    })
  },
  methods:{
    // add(){
    //   this.$store.commit('add',{a:100,b:50});
    // },
    // sub(){
    //   this.$store.commit('sub');
    // }
    //如下两种方法如果add和sub中定义了第二个参数则第二个参数是事件对象
    //mutations必须是同步函数
    ...mapMutations(['add','sub']),
    // ...mapMutations({
    //   'add':'add',
    //   'sub':'sub'
    // }),
    //异步
    ...mapActions(['asyn']),
  }
}
</script>

<style lang="css">
</style>
