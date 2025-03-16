import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppHeader from '../AppHeader.vue';

describe('AppHeader', () => {
    it('Renders text properly.', () => {
        const text = 'Task Manager';
        const wrapper = mount(AppHeader, { props: { text } });
        expect(wrapper.text()).toContain(text);
    });
});
