import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import CartPage from '../views/CartPage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'products'
  },
  {
    path: '/products',
    name: 'products',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
