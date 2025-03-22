<script setup lang="ts">
import type { TaskType } from '@/types';
import TasksCountIcon from './TasksCountIcon.vue';

defineProps<{
    taskType: TaskType;
    count: number;
}>();
</script>

<template>
    <div class="count-container">
        <TasksCountIcon :taskType="taskType" />
        <div class="count">{{ count }}</div>
    </div>
</template>

<style scoped>
.count-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.count {
    font-weight: bold;
    font-size: 2rem;
}
</style>
