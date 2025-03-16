import type { FastifyPluginAsync } from 'fastify';
import tasksService from './tasksService.ts';

type Options = {};

const routes: FastifyPluginAsync<Options> = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        return { message: 'Hello!' };
    });

    fastify.get('/tasks', async (request, reply) => {
        return tasksService.getTaskList();
    });
};

export default routes;
