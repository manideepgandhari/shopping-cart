<template>
  <NavBar :prop1="prop1" :prop2="true" @emit1="emit1"/>
  <router-view/>
</template>
<script>
import {ref, computed} from 'vue';
import NavBar from './views/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    let num = ref(1);
    function emit1() {
      console.log('caught');
    }
    const prop1 = computed(() => num.value+1)
    return {
      emit1,
      prop1
    }
  }
}
</script>
<style>
* {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
