<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>

<template>
    <header class="app-header">
        <h1>{{ text }}</h1>
    </header>
</template>

<style scoped>
.app-header {
    padding: 16px;
    border-bottom: 4px solid var(--color-primary);
}

.app-header h1 {
    font-size: 1.8rem;
    margin: 0;
    color: var(--color-text);
}
</style>
