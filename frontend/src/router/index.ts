import { createRouter, createWebHistory } from 'vue-router';
import TasksPage from '../pages/TasksPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'tasks',
            component: TasksPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ],
});

export default router;
