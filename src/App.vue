<script setup>
import GroceriesTable from './components/GroceriesTable.vue';

const products = [
    { name: 'Rijst', price: 1.00, amount: 0 },
    { name: 'Broccoli', price: 0.99, amount: 0 },
    { name: 'Koekjes', price: 1.20, amount: 0 },
    { name: 'Noten', price: 2.99, amount: 0 }
];
</script>

<template>
    <GroceriesTable :products="products" />
</template>

<style scoped>
</style>
