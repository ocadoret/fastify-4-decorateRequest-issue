import { FastifyInstance } from "fastify";

export default async function register(server: FastifyInstance) {
    server.get('/plugin3/foo', async (request, _reply) => {
        return request.foo;
    });
    server.get('/plugin3/bar', async (request, _reply) => {
        return request.bar();
    });
}