<template>
  <div class="header">
    <Navbar></Navbar>
  </div>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar/index.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: transparent;
}
</style>
