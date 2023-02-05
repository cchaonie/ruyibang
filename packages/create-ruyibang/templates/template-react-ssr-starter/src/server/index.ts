import express from 'express';
import http from 'http';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist/client')));

const server = http.createServer(app);

server.listen(8080, () => console.log(`[SERVER] listening at port 8080 now`));
