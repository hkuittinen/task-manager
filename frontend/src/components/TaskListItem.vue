<script setup lang="ts">
import type { Task } from '@/types';

defineProps<{
    task: Task;
    markCompleted: (task: Task) => void;
}>();
</script>

<template>
    <li class="item">
        <div class="info">
            <div class="task-name">
                {{ task.name }}
            </div>
            <div class="task-type">
                {{ task.type }}
            </div>
        </div>
        <button
            class="complete-task-button"
            @click="markCompleted(task)"
        >
            Complete task
        </button>
    </li>
</template>

<style scoped>
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 2px dotted var(--color-primary);
}

.task-name {
    font-size: 1.3rem;
    font-weight: bold;
}

.task-type {
    font-size: 1rem;
}

.complete-task-button {
    font-size: 1.2rem;
}
</style>
