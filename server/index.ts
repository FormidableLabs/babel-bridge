import { Elysia } from 'elysia';

import router from './router';

const PORT = 3000;

const app = new Elysia()
  .onError(({ error }) => new Response(error.message, { status: 500 }))
  .group('/api', app => app.use(router))
  .listen(PORT);

const origin = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${origin}`);
