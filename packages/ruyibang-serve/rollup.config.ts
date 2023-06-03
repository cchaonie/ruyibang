import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const shared = {
  plugins: [commonjs(), typescript()],
  external: ['express'],
};

export default [
  {
    ...shared,
    input: 'src/index.ts',
    output: {
      file: 'lib/index.mjs',
      format: 'es',
    },
  },
  {
    ...shared,
    input: 'src/index.ts',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs',
    },
  },
];
