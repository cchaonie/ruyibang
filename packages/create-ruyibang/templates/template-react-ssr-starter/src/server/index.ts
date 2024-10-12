import express from 'express';

import controller from './controllers/index.js';
import './config/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.use(controller);

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
