import minimist from 'minimist';
import createServer from '.';
import { Options } from './types';

const argv = minimist(process.argv.slice(2));

if (!argv.port) {
  console.warn('No port provided, use default port');
}

if (!argv.dir) {
  console.warn('No directory provided, use default directory');
}

const { port, dir } = argv as Options;

createServer({
  port,
  dir,
});
