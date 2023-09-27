<template>
  <div class="container">
    <select id="data-selector">
      <option v-for="(data, index) in dropdownItems" :key="index">{{ data }}</option>
    </select>
    <input type="text" id="textInput" @input="debounceTextInput(1)">
    <button @click="functionn(1)">AddItem</button>
  </div>
</template>

<script>
import {ref, reactive, watch, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
// import {useStore} from 'vuex';
import {useRoute, useRouter} from 'vue-router';
// import Component1 from './Component1';
export default {
  name: 'NavBar',
  components: {
    // Component1,
  },
  props: {
    prop1: Number,
    prop2: Boolean
  },
  emits:['emit1', 'emit2'],
  beforeCreate() {
    console.log('beforeCreate');
  },

  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // route.params.id
    // router.push('/router-link')
    const reactiveVar = ref(props.prop1);
    const reactiveObj = reactive({
      name: 'mani',
      age: 24,
    });
    let itemText = '';
    const dropdownItems = reactive([]);
    const getterFun = computed(() => reactiveVar.value*2);
    // const setterFn = computed((abc) => reactiveVar.value = abc);

    function updateItemText(val) {
      console.log(val);
      itemText = document.getElementById('textInput').value;
    }
    function debounce(func, timer) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(args), timer);
      }
    }
    const debounceTextInput = debounce(updateItemText, 300);
    watch(() => reactiveVar.value, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    onBeforeMount(() => {
      console.log('beforeMount');
    });
    onMounted(() => {
      console.log('Mounted', route, router);
    });
    onBeforeUnmount(() => {
      console.log('beforeunMount');
    });
    onUnmounted(() => {
      console.log('unMounted');
    });
    onBeforeUpdate(() => {
      console.log('beforeUpdate');
    });
    onUpdated(()=> {
      console.log('onUpdated');
    });
    function functionn(val){
      console.log('functionn', val);
      dropdownItems.push(itemText);
    }
    return {
      reactiveVar,
      reactiveObj,
      getterFun,
      functionn,
      dropdownItems,
      debounceTextInput
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
