import { FastifyInstance } from "fastify";
import plugin1b from "./plugin1b";

export default async function register(server: FastifyInstance) {
    server.get('/foo', async (request, _reply) => {
        return request.foo;
    });
    server.get('/bar', async (request, _reply) => {
        return request.bar();
    });
    server.register(import('./plugin3'));
    server.register(plugin1b);
}