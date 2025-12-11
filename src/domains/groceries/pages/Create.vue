<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery } from '../store';

const grocery = {name: '', price: 0, amount: 0};
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="addGrocery"/>
</template>

<style scoped>
</style>