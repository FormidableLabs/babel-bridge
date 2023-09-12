import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  console.log('GET /');
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port} ...`);
});
