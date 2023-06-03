import express from 'express';

import { Options } from './types';

const getDefaultOptions = () => ({
  port: 6061,
  dir: process.cwd(),
});

export default function createServer(options: Options = {}) {
  const { port, dir } = {
    ...getDefaultOptions(),
    ...options,
  };

  const app = express();

  app.use(express.static(dir));

  app.listen(port, () => {
    console.log(`Server is running on port ${port} in dir ${dir}`);
  });

  return app;
}
