import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

declare module 'fastify' {
    interface FastifyRequest {
      foo?: string;
      bar: () => string;
    }
  }

export async function register(server: FastifyInstance) {
    server.decorateRequest('foo', 'toto');
    server.decorateRequest('bar', () => {
        return 'tata';
    })
}

export default fp(register, {
    name: 'plugin1',
  });