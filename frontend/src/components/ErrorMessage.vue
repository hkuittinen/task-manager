<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>

<template>
    <p class="error-message">{{ message }}</p>
</template>

<style scoped>
.error-message {
    color: red;
}
</style>
