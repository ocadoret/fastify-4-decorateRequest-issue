import fastify from "fastify";
import plugin1 from "./plugin1";
import plugin2 from "./plugin2";

const server = fastify();

server.register(plugin1);
server.get('/foo', async (request, _reply) => {
    return request.foo;
});
server.get('/bar', async (request, _reply) => {
    return request.bar();
});
server.register(plugin2, {
    prefix: 'plugin2',
});


server.ready().then(() => {
    server.log.debug(server.printRoutes());
      server.listen({
        port: 3000,
        host: '0.0.0.0',
      });
  });
  