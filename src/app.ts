import express from 'express';

const app = express();

app.get('/health', (_req, res) => {
  res.send('ok');
});

app.get('/health', (_req, res) => {
  res.send('we love you');
});

export default app;
