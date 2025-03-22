import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useTasksStore } from '@/stores/tasksStore';
import TasksPage from '../TasksPage.vue';
import NoTasks from '@/components/NoTasks.vue';
import TaskList from '@/components/TaskList.vue';

describe('TasksPage', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Renders NoTasks.', () => {
        const wrapper = mount(TasksPage);
        expect(wrapper.findComponent(NoTasks).exists()).toBe(true);
        expect(wrapper.findComponent(TaskList).exists()).toBe(false);
    });

    it('Renders TaskList.', () => {
        const tasksStore = useTasksStore();
        tasksStore.taskList = {
            name: 'Test list',
            tasks: [
                {
                    id: '82a4db44-adb4-430f-b978-3d2e8dc01fe6',
                    name: 'Test task',
                    type: 'polygon',
                },
            ],
        };
        const wrapper = mount(TasksPage);
        expect(wrapper.findComponent(NoTasks).exists()).toBe(false);
        expect(wrapper.findComponent(TaskList).exists()).toBe(true);
    });
});
