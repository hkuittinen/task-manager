import { vi, describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTasksStore } from '../tasksStore';
import type { TaskList } from '@/types';
import api from '@/api';

const testList: TaskList = {
    name: 'Test list',
    tasks: [
        {
            id: '82a4db44-adb4-430f-b978-3d2e8dc01fe6',
            name: 'Test task',
            type: 'polygon',
        },
    ],
};

describe('Tasks store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.restoreAllMocks();
    });

    it('Initializes with default values', () => {
        const tasksStore = useTasksStore();
        expect(tasksStore.loading).toBe(false);
        expect(tasksStore.errorMessage).toBe('');
        expect(tasksStore.taskList).toEqual({ name: '', tasks: [] });
        expect(tasksStore.completedTasks).toEqual([]);
    });

    it('Fetches tasks.', async () => {
        vi.spyOn(api, 'getTasks').mockImplementation(async () => testList);
        const tasksStore = useTasksStore();
        await tasksStore.fetchTasks();
        expect(tasksStore.loading).toBe(false);
        expect(tasksStore.errorMessage).toBe('');
        expect(tasksStore.taskList).toEqual(testList);
    });

    it('Sets error if fetching tasks fails.', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => {});
        vi.spyOn(api, 'getTasks').mockImplementation(async () => {
            throw new Error('Mock error.');
        });
        const tasksStore = useTasksStore();
        await tasksStore.fetchTasks();
        expect(tasksStore.loading).toBe(false);
        expect(tasksStore.errorMessage).toBe('Something went wrong.');
        expect(tasksStore.taskList).toEqual({ name: '', tasks: [] });
    });

    it('Marks completed.', async () => {
        const tasksStore = useTasksStore();
        tasksStore.taskList = testList;
        const taskToComplete = testList.tasks[0];
        tasksStore.markCompleted(taskToComplete);
        expect(tasksStore.taskList).toEqual({ ...testList, tasks: [] });
        expect(tasksStore.completedTasks).toEqual([taskToComplete]);
    });
});
