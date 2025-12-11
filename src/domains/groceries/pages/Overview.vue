<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store';

const groceries = getAllGroceries;

const readInput = (id, value) => {
    groceries.value[id].amount = value;
}
</script>

<template>
    <GroceriesTable :groceries="groceries" @input="readInput"/>
</template>

<style scoped>
</style>
