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
      name: 'html-component',
      file: 'dist/component.js',
      format: 'iife',
      sourcemap: true,
      exports: 'named',
      extend: true,
    },
    plugins,
  },
  {
    input: 'src/init.ts',
    output: {
      name: 'html-component-init',
      file: 'dist/component-init.js',
      format: 'iife',
      sourcemap: true,
      exports: 'named',
      extend: true,
    },
    plugins,
  },
];
