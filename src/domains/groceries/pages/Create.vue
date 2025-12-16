<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery, getAllGroceries } from '../store';

const nextId = () => {
    return
}

const grocery = {name: '', price: 0, amount: 0, id: parseInt(getAllGroceries.value[getAllGroceries.value.length - 1].id) + 1};
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="addGrocery"/>
</template>

<style scoped>
</style>