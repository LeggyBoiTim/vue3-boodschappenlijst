<script setup>
import { useRoute } from 'vue-router';
import GroceryForm from '../components/GroceryForm.vue';
import { getGroceryById, updateGrocery } from '../store';

const grocery = getGroceryById(useRoute().params.id).value;
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="updateGrocery"/>
</template>

<style scoped>
</style>