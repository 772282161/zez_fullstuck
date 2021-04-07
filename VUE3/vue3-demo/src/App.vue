<template>
  <todoList />
</template>

<script>
// import List from './components/list'
import todoList from './components/todoList';
export default {
  name: 'App',
  components: {
    // List
    todoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>