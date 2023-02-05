#!/usr/bin/env node

import run from '../lib/cli.js';

try {
  run();
} catch (e) {
  console.error(e);
}
