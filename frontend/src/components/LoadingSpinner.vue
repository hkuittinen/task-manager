<script setup lang="ts"></script>

<template>
    <span class="loading-spinner" />
</template>

<style scoped>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loading-spinner {
    width: 64px;
    height: 64px;
    border: 8px solid var(--color-primary);
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
}
</style>
