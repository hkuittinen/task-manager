<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
    <AppHeader text="Task Manager" />
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
main {
    padding: 16px;
}
</style>
