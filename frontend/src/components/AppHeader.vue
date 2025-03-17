<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>

<template>
    <header>
        <h1> {{ text }}</h1>
    </header>
</template>

<style scoped>
header {
    padding: 16px;
    border-bottom: 4px solid var(--color-primary);
}

h1 {
    font-size: 2rem;
    margin: 0;
    color: #fff;
}
</style>
