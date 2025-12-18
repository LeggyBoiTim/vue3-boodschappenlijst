<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries, getGroceryIndexById } from '../store';

const groceries = getAllGroceries;

const readInput = (id, value) => {
    groceries.value[getGroceryIndexById(id).value].amount = value;
}
</script>

<template>
    <GroceriesTable :groceries="groceries" @input="readInput"/>
</template>

<style scoped>
</style>