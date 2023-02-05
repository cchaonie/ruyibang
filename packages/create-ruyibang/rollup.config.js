import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/cli.ts',
    output: {
      dir: './lib',
      format: 'es',
    },
    plugins: [nodeResolve(), typescript(), commonjs()],
  },
];
