import express from 'express';

import { loadEnv } from './configs/index.js';

const config = loadEnv();

const app = express();
const port = config?.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
