<script setup>
import { computed } from 'vue';
import { removeGrocery } from '../store';

const props = defineProps({
    groceries: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['input']);

const handleInput = (event) => {
    emit('input', event.target.id, event.target.value);
};

const subtotal = (grocery) => {
    return grocery.price * grocery.amount;
};

const total = computed(() => {
    let result = 0;
    for (let grocery of props.groceries) {
        result += subtotal(grocery);
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
            <tr v-for="(grocery) in props.groceries" :key="grocery.id">
                <td>{{ grocery.name }}</td>
                <td>{{ parseFloat(grocery.price).toFixed(2) }}</td>
                <td><input @input="handleInput" :id="grocery.id" type="number" min="0" step="1" :value="grocery.amount"></td>
                <td>{{ parseFloat(subtotal(grocery)).toFixed(2) }}</td>
                <td><RouterLink :to="'/edit/' + grocery.id">Bewerk</RouterLink></td>
                <td><a @click="removeGrocery(grocery)">Verwijder</a></td>
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

tbody td:nth-last-child(-n+2) {
    border: none;
}

a {
    cursor: pointer;
}
</style>