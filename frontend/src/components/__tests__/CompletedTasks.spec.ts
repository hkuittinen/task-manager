import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CompletedTasks from '../CompletedTasks.vue';
import TasksCount from '../TasksCount.vue';
import type { Task } from '@/types';

const completedTasks: Task[] = [
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
];

describe('CompletedTasks', () => {
    it('Renders heading.', () => {
        const wrapper = mount(CompletedTasks, { props: { completedTasks } });
        expect(wrapper.find('h2').text()).toBe('Completed tasks');
    });

    it('Renders TasksCount for each task type.', () => {
        const wrapper = mount(CompletedTasks, { props: { completedTasks } });
        const components = wrapper.findAllComponents(TasksCount);
        expect(components.length).toBe(3);

        const expectedCounts = {
            polygon: 2,
            rectangle: 1,
            circle: 0,
        };
        components.forEach((component) => {
            const props = component.props();
            expect(props.count).toBe(expectedCounts[props.taskType]);
        });
    });
});
