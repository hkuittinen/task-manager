import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GetTasksButton from '../GetTasksButton.vue';

describe('GetTasksButton', () => {
    it('Renders button correctly.', async () => {
        let clickCalled = false;
        const wrapper = mount(GetTasksButton, {
            props: {
                onClick: () => {
                    clickCalled = true;
                },
            },
        });
        await wrapper.trigger('click');
        expect(wrapper.text()).toBe('Get tasks');
        expect(clickCalled).toBe(true);
    });
});
