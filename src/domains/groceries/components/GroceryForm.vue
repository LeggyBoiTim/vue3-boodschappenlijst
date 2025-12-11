<script setup>

const props = defineProps({
    grocery: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['submit']);

const handleSubmit = (object) => {
    emit('submit', console.log(object)); // object.target.name.value, object.target.price.value, object.target.amount.value
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <p>Product: <input id="name" name="name" type="text" :value="grocery.name" required></p>
        <p>Prijs: <input id="price" name="price" type="number" min="0" step=".01" :value="parseFloat(grocery.price).toFixed(2)"></p>
        <p>Aantal: <input id="amount" name="amount" type="number" min="0" step="1" :value="grocery.amount"></p></br>
        <button type="submit">Toevoegen</button>
    </form>
</template>

<style scoped>
</style>