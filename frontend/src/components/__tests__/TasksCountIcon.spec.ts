import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TasksCountIcon from '../TasksCountIcon.vue';
import PolygonIcon from '../icons/PolygonIcon.vue';
import RectangleIcon from '../icons/RectangleIcon.vue';
import CircleIcon from '../icons/CircleIcon.vue';

describe('TasksCountIcon', () => {
    it('Renders polygon.', () => {
        const wrapper = mount(TasksCountIcon, {
            props: { taskType: 'polygon' },
        });
        expect(wrapper.findComponent(PolygonIcon).exists()).toBe(true);
        expect(wrapper.findComponent(RectangleIcon).exists()).toBe(false);
        expect(wrapper.findComponent(CircleIcon).exists()).toBe(false);
    });

    it('Renders rectangle.', () => {
        const wrapper = mount(TasksCountIcon, {
            props: { taskType: 'rectangle' },
        });
        expect(wrapper.findComponent(PolygonIcon).exists()).toBe(false);
        expect(wrapper.findComponent(RectangleIcon).exists()).toBe(true);
        expect(wrapper.findComponent(CircleIcon).exists()).toBe(false);
    });

    it('Renders circle.', () => {
        const wrapper = mount(TasksCountIcon, {
            props: { taskType: 'circle' },
        });
        expect(wrapper.findComponent(PolygonIcon).exists()).toBe(false);
        expect(wrapper.findComponent(RectangleIcon).exists()).toBe(false);
        expect(wrapper.findComponent(CircleIcon).exists()).toBe(true);
    });
});
