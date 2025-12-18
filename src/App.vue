<script setup>
</script>

<template>
    <nav>
        <RouterLink to="/create">Voeg Toe</RouterLink>
        <RouterLink to="/overview">Overzicht</RouterLink>
    </nav>
    <br>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>