import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

declare module 'fastify' {
    interface FastifyRequest {
      fooB?: string;
      barB: () => string;
    }
  }

export async function register(server: FastifyInstance) {
    server.decorateRequest('fooB', 'toto');
    server.decorateRequest('barB', () => {
        return 'tata';
    })
}

export default fp(register, {
    name: 'plugin1b',
  });