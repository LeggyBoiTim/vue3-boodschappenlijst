<script setup>
import { computed, ref } from 'vue';

const products = ref([
    { name: 'Rijst', price: 1.00, amount: 0 },
    { name: 'Broccoli', price: 0.99, amount: 0 },
    { name: 'Koekjes', price: 1.20, amount: 0 },
    { name: 'Noten', price: 2.99, amount: 0 }
]);

const subtotal = (product) => {
    return product.price * product.amount;
};

const total = computed(() => {
    let total = 0;
    for (let product of products.value) {
        total += product.price * product.amount;
    }
    return total;
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Hoeveelheid</th>
                <th>Subtotaal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.name">
                <td>{{ product.name }}</td>
                <td>{{ parseFloat(product.price).toFixed(2) }}</td>
                <td><input v-model="product.amount" type="number" min="0" step="1" value="0"></td>
                <td>{{ parseFloat(subtotal(product)).toFixed(2) }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3">Totaal</th>
                <td>{{ parseFloat(total).toFixed(2) }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

thead, tbody td:first-child, tfoot th {
    text-align: left;
}

td, th {
    border: 1px solid #888;
    padding: 10px;
}
</style>
