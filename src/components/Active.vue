<template lang="html">
  <ul class="todo-list">
    <li class="todo" v-for="(todo,index) in todos" v-if="!todo.done" :class="{completed:todo.done}">
      <div class="view">
        <input type="checkbox" class="toggle" v-model="todo.done">
        <label>{{todo.text}}</label>
        <button class="destroy" @click="removeTodo(index)"></button>
      </div>
      <input type="text" class="edit" style="display: none;">
    </li>
  </ul>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['todos']),
  },
  methods:{
    removeTodo(index){
      this.todos.splice(index,1);
    }
  }
}
</script>

<style lang="css">
</style>
