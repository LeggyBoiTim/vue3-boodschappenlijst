<script setup>
import { useRoute } from 'vue-router';
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery, getGroceryById } from '../store';

const grocery = getGroceryById(useRoute().params.id);

console.log(grocery);
</script>

<template>
    <!-- <GroceryForm :grocery="grocery" @submit="addGrocery"/> -->
</template>

<style scoped>
</style>