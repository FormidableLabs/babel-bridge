import 'dotenv/config';
import application from './application';

const PORT: string = process.env.PORT || '8080';
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
