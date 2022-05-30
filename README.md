# fastify-4-decorateRequest-issue

This repo demonstrate the issue with decorateRequest in encapsulated context.

The `foo` definded in `plugin1.ts` is working in every contexts.
The `bar` defined in `plugin1.ts` works fine in `root` and `plugin2` contexts, but is `undefined` in `plugin3` as soon as another plugin defines any other function request decorator (here, the `barB` defined in `plugin1b.ts`, and registered on `plugin2` context)