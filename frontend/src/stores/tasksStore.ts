import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Task, TaskList } from '@/types';
import api from '@/api';

export const useTasksStore = defineStore('tasks', () => {
    const loading = ref(false);
    const errorMessage = ref('');
    const taskList = ref<TaskList>({ name: '', tasks: [] });
    const completedTasks = ref<Task[]>([]);

    const fetchTasks = async () => {
        loading.value = true;
        errorMessage.value = '';
        try {
            taskList.value = await api.getTasks();
        } catch (error) {
            console.error(error);
            errorMessage.value = 'Something went wrong.';
        }
        loading.value = false;
    };

    const markCompleted = (task: Task) => {
        taskList.value.tasks = taskList.value.tasks.filter((t) => t.id !== task.id);
        completedTasks.value.push(task);
    };

    return {
        loading,
        errorMessage,
        taskList,
        fetchTasks,
        completedTasks,
        markCompleted,
    };
});
