<script setup lang="ts">
import NoTasks from '@/components/NoTasks.vue';
import TasksList from '@/components/TaskList.vue';
import { useTasksStore } from '@/stores/tasks';

const tasksStore = useTasksStore();
</script>

<template>
    <NoTasks
        v-if="!tasksStore.taskList.tasks.length"
        :fetchTasks="tasksStore.fetchTasks"
        :loading="tasksStore.loading"
        :errorMessage="tasksStore.errorMessage"
        :completedTasks="tasksStore.completedTasks"
    />
    <TasksList
        v-else
        :name="tasksStore.taskList.name"
        :tasks="tasksStore.taskList.tasks"
        :markCompleted="tasksStore.markCompleted"
    />
</template>
