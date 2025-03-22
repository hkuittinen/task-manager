import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import type { TaskType } from '@/types';
import TasksCount from '../TasksCount.vue';
import TasksCountIcon from '../TasksCountIcon.vue';

describe('TasksCount', () => {
    it('Renders count.', () => {
        const taskType: TaskType = 'polygon';
        const count = 6;
        const wrapper = mount(TasksCount, {
            props: { taskType, count },
        });
        const iconComponent = wrapper.findComponent(TasksCountIcon);
        expect(iconComponent.exists()).toBe(true);
        expect(iconComponent.props().taskType).toBe(taskType);
        expect(wrapper.find('.count').text()).toBe(count.toString());
    });
});
