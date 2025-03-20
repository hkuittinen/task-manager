<script setup lang="ts">
import type { Task } from '@/types';

defineProps<{
    completedTasks: Task[];
}>();
</script>

<template>
    <!-- <div> -->
        <h2>Completed</h2>
        <p>{{ completedTasks.length }}</p>
    <!-- </div> -->
</template>

<style scoped></style>
