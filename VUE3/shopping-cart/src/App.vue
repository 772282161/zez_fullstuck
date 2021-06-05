<template>
  <div id="app">
    <h1>Shopping-cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import ProductList from './ProductList.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    ProductList
  }
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
