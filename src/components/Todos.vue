<template lang="html">
  <section class="todoapp">
		<header class="header">
			<h1>todos</h1>
				<input type="text" placeholder="what need to be done?" class="new-todo" @keyup.enter="transfer">
		</header>
		<section class="main" style="">
			<input type="checkbox" class="toggle-all" :checked="selectAll" @click="select(selectAll)">
				<ul class="todo-list">
					<li class="todo" v-for="(todo,index) in filterTodos" :class="{completed:todo.done}">
						<div class="view">
							<input type="checkbox" class="toggle" v-model="todo.done">
							<label @dblclick="modTodo">{{todo.text}}</label>
							<button class="destroy" @click="removeTodo(todo,index)"></button>
						</div>
						<input type="text" class="edit" @blur="blur($event)" @keyup.enter="mod($event,todo)" @keyup.esc="cancle" :value="todo.text">
					</li>
				</ul>
			</section>
			<footer class="footer" style="">
				<span class="todo-count"><strong>{{todos.filter(val=>!val.done).length}}</strong> items left</span>
				<ul class="filters">
					<li><a href="" :class="{selected:visibility=='all'}" @click.prevent="changeVisi('all')">all</a></li>
					<li><a href="" :class="{selected:visibility=='active'}" @click.prevent="changeVisi('active')">active</a></li>
					<li><a href="" :class="{selected:visibility=='completed'}" @click.prevent="changeVisi('completed')">completed</a></li>
				</ul>
				<button class="clear-completed" v-show="todos.filter(val=>val.done).length>0" @click="removeDone">clear completed</button>
			</footer>
	</section>
</template>

<script>
import '@/assets/todo-mvc.css'
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  data(){
    return {
      editing:false,
    }
  },
  computed:{
    ...mapState(['todos','visibility']),
    ...mapGetters(['filterTodos','selectAll']),
  },

  methods:{
    // select(){
    //
    //   //this.selectAll = !this.selectAll;
    //   //console.info( this.selectAll );
    //   this.$store.commit('select',this.selectAll);
    // },
    transfer(e){
      let text = e.target.value.trim();
      //console.info( text );
      if(text){
        this.$store.commit('transfer',text);
      }
      e.target.value="";
    },
    ...mapMutations(['changeVisi','removeDone','select']),
    removeTodo(todo,index){
      this.$store.commit('removeTodo',todo);
    },
    modTodo(e){
      e.target.parentNode.parentNode.classList.add('editing');
      e.target.parentNode.parentNode.querySelector('.edit').focus();
    },
    blur(e){
      e.target.parentNode.classList.remove('editing');
    },
    mod(e,todo){
      e.target.parentNode.classList.remove('editing');
      let text = e.target.value.trim();
      if(text){
        this.$store.commit('modTodo',{todo,text});
      }
      e.target.blur();
    },
    cancle(e){
      e.target.parentNode.classList.remove('editing');
      e.target.blur();
    }
  },
  mounted(){
    this.showTodos = this.todos;
  }
}
</script>

<style lang="css">
</style>
