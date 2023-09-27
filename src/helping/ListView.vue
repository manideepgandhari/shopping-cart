<template>
<div v-for="(item, index) in items" :key="index" @click="emitt(item)">{{ item }}</div>
</template>
<script setup>
const props = defineProps({
    items: Object,
});
const emits = defineEmits(["selectedItem"])
function emitt(val){
    emits("selectedItem", val)
}
</script>
