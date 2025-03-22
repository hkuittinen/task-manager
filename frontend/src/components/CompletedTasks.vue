<script setup lang="ts">
import type { Task, TaskType } from '@/types';
import TasksCount from './TasksCount.vue';
import { computed } from 'vue';

type Counts = Record<TaskType, number>;

const props = defineProps<{
    completedTasks: Task[];
}>();

const counts = computed<Counts>(() => {
    return props.completedTasks.reduce(
        (acc, current) => {
            acc[current.type]++;
            return acc;
        },
        {
            polygon: 0,
            rectangle: 0,
            circle: 0,
        },
    );
});
</script>

<template>
    <h2 class="counts-heading">Completed tasks</h2>
    <div class="counts-container">
        <TasksCount
            v-for="(count, taskType) in counts"
            :key="taskType"
            :taskType
            :count
        />
    </div>
</template>

<style scoped>
.counts-heading {
    margin: 32px 0 24px 0;
    font-size: 1.8rem;
}

.counts-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
}
</style>
