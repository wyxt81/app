<template lang="html">
  <section class="todoapp">
		<header class="header">
			<h1>todos</h1>
				<input type="text" placeholder="what need to be done?" class="new-todo" v-model="newTodos" @keyup.enter="transfer">
		</header>
		<section class="main" style="">
			<input type="checkbox" class="toggle-all" v-model="selectAll" @click="select">
      <router-view></router-view>
				<!-- <ul class="todo-list">
					<li class="todo" v-for="(todo,index) in showTodos" :class="{completed:todo.done}">
						<div class="view">
							<input type="checkbox" class="toggle" v-model="todo.done">
							<label>{{todo.text}}</label>
							<button class="destroy" @click="removeTodo(index)"></button>
						</div>
						<input type="text" class="edit" style="display: none;">
					</li>
				</ul> -->
			</section>
			<footer class="footer" style="">
				<span class="todo-count"><strong>{{uncompleted.length}}</strong> items left</span>
				<ul class="filters">
          <li><router-link to="/all">all</router-link></li>
          <li><router-link to="/active" >active</router-link></li>
          <li><router-link to="/completed">completed</router-link></li>
          <!-- <li><a href="" class="selected" @click.prevent="showAll($event)">all</a></li>
					<li><a href="" class="" @click.prevent="showUn($event)">active</a></li>
					<li><a href="" class="" @click.prevent="showDone($event)">completed</a></li> -->
				</ul>
				<button class="clear-completed" v-if="completed.length>0" @click="removeDone">clear completed</button>
			</footer>
	</section>
</template>

<script>
import '@/assets/todo-mvc.css'
import {mapState,mapGetters} from 'vuex'
export default {
  data(){
    return {
      newTodos:'',
    }
  },
  computed:{
    ...mapState(['todos']),
    uncompleted(){
      return this.todos.filter(val=>!val.done);
    },
    ...mapGetters(['completed','selectAll']),
  },

  methods:{
    select(){

      //this.selectAll = !this.selectAll;
      //console.info( this.selectAll );
      this.$store.commit('select',this.selectAll);
    },
    transfer(){
      this.$store.commit('transfer',this.newTodos);
      this.newTodos = '';
    },
    removeDone(){
      this.$store.commit('removeDone');
      //console.info( this.todos,this.showTodos );
    },
  },
}
</script>

<style lang="css">
.filters li a.router-link-active,
.filters li a:hover {
	border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.router-link-active {
	border-color: rgba(175, 47, 47, 0.2);
}

</style>
