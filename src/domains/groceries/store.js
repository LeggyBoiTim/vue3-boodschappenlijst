import { computed, ref } from "vue";

// State
const groceries = ref([
    { name: 'Rijst', price: 1.00, amount: 0 },
    { name: 'Broccoli', price: 0.99, amount: 0 },
    { name: 'Koekjes', price: 1.20, amount: 0 },
    { name: 'Noten', price: 2.99, amount: 0 }
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id)); // Klopt deze? Je kan geen parameters doorgeven aan een computed.

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);