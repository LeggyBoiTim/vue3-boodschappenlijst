<script setup>
import { computed } from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['input']);

const handleInput = (e) => {
    emit('input', e.target.id, e.target.value)
}

const subtotal = (product) => {
    return product.price * product.amount;
};

const total = computed(() => {
    let result = 0;
    for (let product of props.products) {
        result += subtotal(product);
    }
    return result;
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
            <tr v-for="(product, index) in props.products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ parseFloat(product.price).toFixed(2) }}</td>
                <td><input @input="handleInput" :id="index" type="number" min="0" step="1" value="0"></td>
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
