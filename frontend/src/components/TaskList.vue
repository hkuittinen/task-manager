<script setup lang="ts">
import type { Task } from '@/types';
import TaskListItem from './TaskListItem.vue';

defineProps<{
    name: string;
    tasks: Task[];
    markCompleted: (task: Task) => void;
}>();
</script>

<template>
    <div class="task-list-container">
        <h1 class="task-list-name">{{ name }}</h1>
        <ul class="task-list">
            <TaskListItem
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                :markCompleted="markCompleted"
            />
        </ul>
    </div>
</template>

<style scoped>
.task-list-container {
    max-width: 640px;
    margin: 16px auto;
}

.task-list-name {
    font-size: 1.9rem;
    margin: 8px 0;
}

.task-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
