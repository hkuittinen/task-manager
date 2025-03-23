import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TaskListItem from '../TaskListItem.vue';
import type { Task } from '@/types';

const task: Task = {
    id: '82a4db44-adb4-430f-b978-3d2e8dc01fe6',
    name: 'Test 1',
    type: 'polygon',
};

describe('TaskListItem', () => {
    it('Renders task.', () => {
        const wrapper = mount(TaskListItem, {
            props: { markCompleted: () => {}, task },
        });
        expect(wrapper.find('.task-name').text()).toBe(task.name);
        expect(wrapper.find('.task-type').text()).toBe(task.type);
    });

    it('Marks as completed.', () => {
        let clicked = false;
        const wrapper = mount(TaskListItem, {
            props: {
                markCompleted: () => {
                    clicked = true;
                },
                task,
            },
        });
        const buttonComponent = wrapper.find('.complete-task-button');
        buttonComponent.trigger('click');
        expect(buttonComponent.text()).toBe('Complete task');
        expect(clicked).toBe(true);
    });
});
