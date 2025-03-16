import fastify from 'fastify';
import routes from './routes.ts';

const server = fastify();

server.register(routes)

const listenOptions = {
    host: '0.0.0.0',
    port: Number(process.env.BACKEND_PORT || '8080'),
};

server.listen(listenOptions, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
