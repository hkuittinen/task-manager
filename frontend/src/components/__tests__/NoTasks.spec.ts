import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NoTasks from '../NoTasks.vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import GetTasksButton from '../GetTasksButton.vue';
import ErrorMessage from '../ErrorMessage.vue';
import CompletedTasks from '../CompletedTasks.vue';
import type { Task } from '@/types';

describe('NoTasks', () => {
    it('Renders loading.', () => {
        const wrapper = mount(NoTasks, {
            props: { loading: true, fetchTasks: () => {}, errorMessage: '', completedTasks: [] },
        });
        expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(true);
        expect(wrapper.findComponent(GetTasksButton).exists()).toBe(false);
    });

    it('Renders fetch tasks button.', () => {
        const fetchTasks = () => {};
        const wrapper = mount(NoTasks, {
            props: { loading: false, fetchTasks, errorMessage: '', completedTasks: [] },
        });
        expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(false);
        const buttonComponent = wrapper.findComponent(GetTasksButton);
        expect(buttonComponent.exists()).toBe(true);
        expect(buttonComponent.props().onClick).toBe(fetchTasks);
    });

    it('Renders error message.', () => {
        const errorMessage = 'Error error.';
        const wrapper = mount(NoTasks, {
            props: {
                loading: false,
                fetchTasks: () => {},
                errorMessage,
                completedTasks: [],
            },
        });
        const errorComponent = wrapper.findComponent(ErrorMessage);
        expect(errorComponent.exists()).toBe(true);
        expect(errorComponent.props().message).toBe(errorMessage);
    });

    it('Does not render completed tasks.', () => {
        const wrapper = mount(NoTasks, {
            props: {
                loading: false,
                fetchTasks: () => {},
                errorMessage: '',
                completedTasks: [],
            },
        });
        const completedComponent = wrapper.findComponent(CompletedTasks);
        expect(completedComponent.exists()).toBe(false);
    });

    it('Renders completed tasks.', () => {
        const completedTasks: Task[] = [
            {
                id: '82a4db44-adb4-430f-b978-3d2e8dc01fe6',
                name: 'Test 1',
                type: 'polygon',
            },
        ];
        const wrapper = mount(NoTasks, {
            props: {
                loading: false,
                fetchTasks: () => {},
                errorMessage: 'Error error.',
                completedTasks,
            },
        });
        const completedComponent = wrapper.findComponent(CompletedTasks);
        expect(completedComponent.exists()).toBe(true);
        expect(completedComponent.props().completedTasks).toEqual(completedTasks);
    });
});
