<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    // vue 生命周期
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
<style scoped></style>
