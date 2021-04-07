<template>
<!-- 语义化更好 与div差不多 -->
<section>
    <section class="todoapp">
        <header class="header">
            <h1>Vue3 todos</h1>
            <!-- v-model  Vue独有双向绑定 -->
            <input type="text" class="new-todo" placeholder="王总在嫖娼" @keyup.enter="addTodo" v-model="newTodo">
        </header>
    </section>
    <section class="main">
        <ul class="todo-list">
            <!-- for of 遍历数组  for in 遍历对象 但是不建议遍历数组 map遍历 key唯一标识 -->
            <li v-for="todo in todos" :key="todo.id">
                <div class="view">
                    <label > {{todo.title}} </label>
                    <button class="destroy" @click="deleteTodo(todo)"></button>
                </div>
            </li>
        </ul>
    </section>
</section>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup(){
        const state= reactive({
            newTodo:'',
            todos:[
                {id:'1',title:'王总',complated:false},
                {id:'2',title:'嫖娼',complated:false},
                {id:'3',title:'精尽',complated:false},
                {id:'4',title:'人亡',complated:false},
            ]
        })

        

        function addTodo(){
            console.log(state.newTodo)
            // 非判断条件里 && 标识执行
            let value = state.newTodo && state.newTodo.trim()
            if(!value) return 
            state.todos.push({
                id:state.todos.length+1,
                title:value,
                complated:false
            })
            state.newTodo=''
        }

        function deleteTodo(index){
            state.todos.splice(index,1)
        }

        return {
            ...toRefs(state),
            addTodo,
            deleteTodo
        }
    }
    
}
</script>

<style>

</style>