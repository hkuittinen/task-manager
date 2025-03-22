<script setup lang="ts">
import type { TaskType } from '@/types';
import PolygonIcon from './icons/PolygonIcon.vue';
import RectangleIcon from './icons/RectangleIcon.vue';
import CircleIcon from './icons/CircleIcon.vue';

defineProps<{ taskType: TaskType }>();
</script>

<template>
    <div
        class="count-icon"
        :style="`--animation-delay: ${Math.random()}s`"
    >
        <PolygonIcon v-if="taskType === 'polygon'" />
        <RectangleIcon v-else-if="taskType === 'rectangle'" />
        <CircleIcon v-else-if="taskType === 'circle'" />
    </div>
</template>

<style scoped>
@keyframes bounce {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
}

.count-icon {
    width: 4rem;
    height: 4rem;
    animation: bounce 2s ease-in-out infinite;
    animation-delay: var(--animation-delay);
}
</style>
