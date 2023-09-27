<template>
<div v-if="product" class="ProductDetailPage" id="page-wrap">
  <div id="img-wrap">
    <img :src="product?.imageUrl" alt="productImage">
  </div>
  <div id="product-details" >
    <h1>{{ product?.name }}</h1>
    <h3 id="price">${{ product?.price }}</h3>
    <p>Average rating: {{ product?.averageRating }}</p>
    <button id="add-to-cart">Add to Cart</button>
  </div>
</div>
<div v-else>
  <NotFoundPage/>
</div>
</template>

<script>
import {ref} from 'vue';
import {products} from '../fake-data';
import {  useRoute } from 'vue-router';
import NotFoundPage from '../components/NotFoundPage.vue';

export default {
name: 'ProductDetailPage',
components: {
  NotFoundPage
},
setup() {
  const route = useRoute();
  const product = ref(
    products.find((pro) => {
      return pro.id === route.params?.id;
    })
  )
  return {
    product,
  }
}
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
