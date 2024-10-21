import ReactDOMServer from 'react-dom/server';
import { Request, Response } from 'express';

import App from '../../application';
import { ServerHTML } from './serverHTML';
import path from 'path';
import fs from 'fs/promises';

export default async function (req: Request, res: Response) {
  try {
    const manifestFilePath = path.resolve(
      process.cwd(),
      'dist/client/bundle-manifest.json',
    );

    const chunkMap = await fs.readFile(manifestFilePath, { encoding: 'utf-8' });

    const manifest = JSON.parse(chunkMap);

    const scripts = Object.keys(manifest).map((filename: string, i) => {
      if (filename.endsWith('js') && manifest[filename].isEntry) {
        return <script key={`${i + 1}`} defer src={filename} />;
      }
      if (filename.endsWith('css')) {
        return <link key={`${i + 1}`} href={filename} />;
      }
    });

    const html = ReactDOMServer.renderToPipeableStream(
      <ServerHTML
        title="This is a isomorphic javascript application"
        scripts={scripts}
        content={<App />}
      />,
    );

    res.status(200);
    res.type('html');
    html.pipe(res);
  } catch (error) {
    console.error(error);

    res.type('html');
    res.end(`<div>
            <h1>500 Server Internal Error</h1>
            <p>${JSON.stringify(error)}</p>
        </div>`);
  }
}
