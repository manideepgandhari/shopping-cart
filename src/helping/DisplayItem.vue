<template>
    <div>
        <ListView :items="items" @selected-item="selectedItem"></ListView>
        <div>
            {{ item }}
        </div>
    </div>
</template>

<script setup>
import ListView from './ListView.vue';
import {ref, reactive} from 'vue'

const items = reactive([
    {id: 1, name: 'item1', description: 'description about item1'},
    {id: 2, name: 'item2', description: 'description about item2'},
    {id: 3, name: 'item3', description: 'description about item3'},
    {id: 4, name: 'item4', description: 'description about item4'},
])
const item = ref('')
function selectedItem(val) {
    item.value = val.name
}

</script>

<style scss>
</style>
