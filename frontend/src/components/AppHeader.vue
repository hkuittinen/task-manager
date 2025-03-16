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
h1 {
    font-size: 2rem;
}
</style>
