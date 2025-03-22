import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import type { TaskList as TaskListType } from '@/types';
import TaskList from '../TaskList.vue';
import TaskListItem from '../TaskListItem.vue';

const taskList: TaskListType = {
    name: 'Test List',
    tasks: [
        {
            id: '82a4db44-adb4-430f-b978-3d2e8dc01fe6',
            name: 'Test 1',
            type: 'polygon',
        },
        {
            id: '95181efe-d062-4045-a95d-51e0fb6fb1ad',
            name: 'Test 2',
            type: 'polygon',
        },
        {
            id: '7c9d0b24-3f8e-4759-bb48-91f017a5cf54',
            name: 'Test 3',
            type: 'rectangle',
        },
    ],
};

describe('TaskList', () => {
    it('Renders heading.', () => {
        const wrapper = mount(TaskList, {
            props: { name: taskList.name, tasks: taskList.tasks, markCompleted: () => {} },
        });
        expect(wrapper.find('h1').text()).toBe(taskList.name);
    });

    it('Renders all tasks list items.', () => {
        const markCompleted = () => {};
        const wrapper = mount(TaskList, {
            props: { name: taskList.name, tasks: taskList.tasks, markCompleted },
        });
        const components = wrapper.findAllComponents(TaskListItem);
        expect(components.length).toBe(taskList.tasks.length);
        components.forEach((component, index) => {
            const props = component.props();
            expect(props.task).toEqual(taskList.tasks[index]);
            expect(props.markCompleted).toBe(markCompleted);
        });
    });
});
