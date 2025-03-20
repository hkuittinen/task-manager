<script setup lang="ts">
import type { Task } from '@/types';
import LoadingSpinner from './LoadingSpinner.vue';
import GetTasksButton from './GetTasksButton.vue';
import ErrorMessage from './ErrorMessage.vue';
import CompletedTasks from './CompletedTasks.vue';

defineProps<{
    fetchTasks: () => void;
    loading: boolean;
    errorMessage: string;
    completedTasks: Task[];
}>();
</script>

<template>
    <div class="no-tasks-container">
        <LoadingSpinner v-if="loading" />
        <GetTasksButton
            v-else
            :onClick="fetchTasks"
        />
        <ErrorMessage
            v-if="errorMessage"
            :message="errorMessage"
        />
        <CompletedTasks
            v-if="completedTasks.length"
            :completedTasks="completedTasks"
        />
    </div>
</template>

<style scoped>
.no-tasks-container {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
