// @ts-nocheck

import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
  }),
  uglify(),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/component.js',
      format: 'iife',
      sourcemap: true,
      exports: 'named',
    },
    plugins,
  },
  {
    input: 'src/init.ts',
    output: {
      file: 'dist/component-init.js',
      format: 'iife',
      sourcemap: true,
      exports: 'named',
    },
    plugins,
  },
];
