<template>
  <div class="home">
    <!-- <router-link to="/products">Go to Products</router-link> -->
    <ProductsPage
      :prop1 = "'Welcome to Products'"
    ></ProductsPage>
  </div>
</template>

<script>
import ProductsPage from './ProductPage.vue';

export default {
  name: 'Home',
  components: {
    ProductsPage
  },
  setup() {
    // function emmit(val) {
    //   console.log('in emit', val);
    // }
    // return {
    //   emmit,
    // }
  }
}
</script>
