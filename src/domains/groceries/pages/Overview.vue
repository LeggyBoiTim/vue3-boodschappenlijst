<script setup>
import { ref } from 'vue';
import GroceriesTable from '../../../components/GroceriesTable.vue';

const products = ref([
    { name: 'Rijst', price: 1.00, amount: 0 },
    { name: 'Broccoli', price: 0.99, amount: 0 },
    { name: 'Koekjes', price: 1.20, amount: 0 },
    { name: 'Noten', price: 2.99, amount: 0 }
]);

const readInput = (id, value) => {
    products.value[id].amount = value;
}

</script>

<template>
    <GroceriesTable :products="products" @input="readInput"/>
</template>

<style scoped>
</style>
