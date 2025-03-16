import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref([]);

    // TODO
    const fetchTasks = async () => {
        tasks.value = [];
    };

    return { tasks, fetchTasks };
});
