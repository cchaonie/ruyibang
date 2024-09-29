import express from 'express';

import './configs/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
