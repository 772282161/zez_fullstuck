<template>
  <div id="app">
  {{$store.state.count}}
  {{evenOrOdd}}
  <button @click="increment()">Increment</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed:mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    // 'decrement',
    // 'incrementIfOdd',
    // 'incrementAsync'
  ]),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
