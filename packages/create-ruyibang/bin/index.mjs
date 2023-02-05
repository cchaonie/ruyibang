#!/usr/bin/env node

import run from '../lib/index.js';

try {
  run();
} catch (e) {
  console.error(e);
}
