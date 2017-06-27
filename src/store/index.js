// 先引入vue.js
import Vue from 'vue'
//引入vuex.js
import Vuex from 'vuex'

//需要显式的use一下vuex
Vue.use(Vuex)

export default new Vuex.Store({
  //相当于组件中的data
  state:{
    count:1,
    todos:[
      {text:'吃饭',done:true},
      {text:'敲代码',done:false},
      {text:'打游戏',done:false}
    ],
    visibility:'all',
  },
  //类比于组件中的计算属性
  getters:{
    filterTodos(state){
      switch (state.visibility){
        case 'all':
          return state.todos;
        case 'active':
          return state.todos.filter(val=>!val.done);
        case 'completed':
          return state.todos.filter(val=>val.done);
      }
    },
    completed(state){
      return state.todos.filter(val=>val.done);
    },
    uncompleted(state){
      return state.todos.filter(val=>!val.done);
    },
    selectAll(state){
      //一句话就搞定
      return state.todos.every(val=>val.done);
    }
  },
  mutations:{
    // add(state,obj){
    //   state.count++;
    //   console.info( obj );
    // },
    // sub(state){
    //   state.count--;
    // },
    select(state,obj){
      // if(obj){
      //   //console.info( obj );
      //   state.todos.map(val=>{val.done = false});
      //
      //
      // }else{
      //   //console.info( obj );
      //   state.todos.map(val=>{val.done = true});
      // }
      //又是一句话就搞定
      state.todos.forEach(val=>{val.done=!obj});
    },
    transfer(state,obj){
      state.todos.push({text:obj,done:false});
    },
    removeDone(state){
      state.todos = state.todos.filter(val=>!val.done);
      console.info( state.todos );
    },
    removeTodo(state,obj){
      let rs = state.todos.findIndex(val=>val==obj);
      state.todos.splice(rs,1);
    },
    changeVisi(state,visibility){
      state.visibility = visibility;
    },
    modTodo(state,{todo,text}){
      let idx = state.todos.findIndex(val=>val==todo);
      state.todos[idx].text = text;
    }
  },
  actions:{
    // asyn(context){
    //   setTimeout(()=>context.commit('add'),3000);
    // }
    //可以如下简写
    //这里是解构赋值
    asyn({commit}){
      setTimeout(()=>commit('add'),3000);
    }
  }
})
