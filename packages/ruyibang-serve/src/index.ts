import path from 'node:path';
import express, { Express } from 'express';

import { Options } from './types';

export default function createServer(options: Options): Express {
  const { port = 6061, dir = process.cwd() } = options;

  const staticDir = path.resolve(process.cwd(), dir);

  const app = express();

  app.use((req, _, next) => {
    console.log(
      `[IncomingRequest]: URL -> ${req.url}, Method -> ${req.method}.`
    );
    next();
  });

  app.use(express.static(staticDir));

  app.listen(port, () => {
    console.log(
      `Server is running on port ${port}.\nFiles in directory ${staticDir} are served now.`
    );
  });

  return app;
}
