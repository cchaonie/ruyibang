import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

const isPrd = process.env.NODE_ENV === 'production';

const plugins = [
  nodeResolve(),
  typescript(),
  commonjs(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(
      isPrd ? 'production' : 'development',
    ),
  }),
];

export default [
  {
    input: './src/server/index.ts',
    output: {
      dir: 'dist/server',
      format: 'es',
    },
    plugins: [...plugins, json()],
  },
  {
    input: './src/client/index.tsx',
    output: {
      dir: 'dist/client',
      format: 'es',
    },
    plugins: [...plugins, postcss(isPrd ? { extract: true } : undefined)],
  },
];
