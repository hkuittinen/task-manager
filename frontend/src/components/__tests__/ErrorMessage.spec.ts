import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ErrorMessage from '../ErrorMessage.vue';

describe('ErrorMessage', () => {
    it('Renders message correctly.', () => {
        const message = 'Error message!';
        const wrapper = mount(ErrorMessage, { props: { message } });
        expect(wrapper.text()).toContain(message);
    });
});
