import { computed, ref } from "vue";

// State
const groceries = ref([
    { name: 'Rijst', price: 1.00, amount: 2, id: 1 },
    { name: 'Broccoli', price: 0.99, amount: 1, id: 2 },
    { name: 'Koekjes', price: 1.20, amount: 1, id: 3 },
    { name: 'Noten', price: 2.99, amount: 3, id: 4 }
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));
export const getGroceryIndexById = (id) => computed(() => groceries.value.indexOf(getGroceryById(id).value));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);
export const updateGrocery = (grocery) => groceries.value[getGroceryIndexById(grocery.id).value] = grocery;
export const removeGrocery = (grocery) => groceries.value.splice(getGroceryIndexById(grocery.id).value, 1);