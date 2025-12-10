<script setup>
</script>

<template>
    <nav>
        <RouterLink to="/create">Maak Boodschappenlijst</RouterLink>
        <RouterLink to="/overview">Overzicht</RouterLink>
    </nav>
    <h1>{{ $route.fullPath }}</h1>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
