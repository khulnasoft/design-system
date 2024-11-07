/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import process from 'process';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

const plugins = [
  addon.publicEntrypoints([
    '**/*.{js,ts}',
    'index.js',
    'template-registry.js',
    'styles/@khulnasoft/design-system-components.scss',
  ]),

  addon.appReexports([
    'components/**/!(*types).js',
    'helpers/**/*.js',
    'modifiers/**/*.js',
    'instance-initializers/**/*.js'
  ], {
    exclude: [
      'components/**/app-header/**/*.js',
      'components/**/app-side-nav/**/*.js',
    ],
  }),

  addon.dependencies(),

  scss({
    fileName: 'styles/@khulnasoft/design-system-components.css',
    includePaths: [
      '../../node_modules/@khulnasoft/design-system-tokens/dist/products/css',
    ],
  }),

  scss({
    fileName: 'styles/@khulnasoft/design-system-power-select-overrides.css',
  }),

  // Removed addon.kbs() as it may not exist or be needed

  addon.gjs(),

  babel({
    extensions: ['.js', '.gjs', '.ts', '.gts'],
    babelHelpers: 'bundled',
  }),

  addon.keepAssets(['**/*.css', '**/*.scss']),

  copy({
    targets: [
      { src: 'README.md', dest: 'dist' },
      { src: 'LICENSE.md', dest: 'dist' },
    ],
  }),
];

if (!process.env.development) {
  plugins.push(addon.clean());
}

export default {
  output: addon.output(),
  plugins: plugins,
  external: ['ember-modifier', 'prismjs'],
};
