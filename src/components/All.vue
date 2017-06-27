<template lang="html">
  <ul class="todo-list">
    <li class="todo" v-for="(todo,index) in todos" :class="{completed:todo.done}">
      <div class="view">
        <input type="checkbox" class="toggle" v-model="todo.done">
        <label @dblclick="toMod($event)">{{todo.text}}</label>
        <button class="destroy" @click="removeTodo(index)"></button>
      </div>
      <input type="text" class="edit"
      :value="todo.text" @keyup.esc="escup" @blur="inputblur" @keyup.enter="enterup($event,todo)">
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
    },
    toMod(e){
      e.target.parentNode.parentNode.classList.add('editing');
      e.target.parentNode.parentNode.querySelector('.edit').focus();
    },
    inputblur(e){
      e.target.parentNode.classList.remove('editing');
    },
    escup(e){
      this.inputblur(e);
    },
    enterup(e,todo){
        let text = e.target.value.trim();
        this.inputblur(e);
        if(text){
          this.$store.commit('modTodo',{todo,text});
        }
    }
  }
}
</script>

<style lang="css">
</style>
