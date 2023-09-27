<template>
<div class="CartPage" id="page-wrap">
  <h1>Shopping Cart</h1>
  <div v-for="(product, index) in cartItems" :key="index" class="product-container">
    <img class="product-image" :src="product.imageUrl" alt="CartImage">
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
    </div>
    <button class="remove-button">Remove Item from Cart</button>
  </div>
  <div id="total-price">
    <h3>Total: {{ totalPrice }}</h3>
  </div>
</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import {products} from '../fake-data';
export default {
name: 'CartPage',
components: {},
setup() {
  const cartItems = ref([]);
  const totalPrice = ref(0);
  onMounted(() => {
    cartItems.value = [products[0]];
    totalPrice.value = products[0].price;
  })
  return {
    cartItems,
    totalPrice
  }
}
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
    padding-right: 0px;
  }

  #checkout-button {
    width: 100%;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>
