<script setup lang="ts">
defineProps<{
    onClick: () => void;
}>();
</script>

<template>
    <button
        class="get-tasks-button"
        @click="onClick"
    >
        Get tasks
    </button>
</template>

<style scoped>
.get-tasks-button {
    font-size: 2.8rem;
    padding: 0.5rem 2rem;
}
</style>
