<template>
  <div id="product-wrap">
    <h1>{{ prop1 }}</h1>
    <div class="grid-wrap">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <img :src="product.imageUrl" alt="Image">
        <h3 class="product-name">{{ product.name }}</h3>
        <div>${{ product.price }}</div>
        <router-link :to="'/products/' + product.id">
          <button @click="emitEvent">Emit</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {products} from '../fake-data';

export default {
name: 'ProductsPage',
props: {
    prop1: String,
},
// emits: [
//     'emmit1', 'emmit2',...
// ],
// data() {
//     return {
//         products
//     }
// }
setup(){
    return {
        products,
    }
}
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>
