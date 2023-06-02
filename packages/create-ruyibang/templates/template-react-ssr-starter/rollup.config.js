import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

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

if (isPrd) {
  plugins.push(postcss({ extract: true }));
} else {
  plugins.push(postcss());
  plugins.push();
}

export default {
  input: './src/index.tsx',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins,
};
