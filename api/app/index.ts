import application from './application';

const PORT: string = process.env.PORT || '3000';
const fastify = application();

const start = async () => {
  try {
    await fastify.listen({
      port: parseInt(PORT),
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
