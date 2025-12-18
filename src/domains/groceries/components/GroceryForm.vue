<script setup>

const props = defineProps({
    grocery: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['submit']);

const handleSubmit = (event) => {
    const grocery = {
        name: event.target.name.value,
        price: event.target.price.value,
        amount: event.target.amount.value,
        id: event.target.id.value
    };
    emit('submit', grocery);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <p>Product: <input name="name" type="text" :value="grocery.name" required></p>
        <p>Prijs: <input name="price" type="number" min="0" step=".01" :value="parseFloat(grocery.price).toFixed(2)"></p>
        <p>Aantal: <input name="amount" type="number" min="0" step="1" :value="grocery.amount"></p></br>
        <input name="id" type="hidden" :value="grocery.id">
        <button type="submit">Toevoegen</button>
    </form>
</template>

<style scoped>
</style>