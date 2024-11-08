/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

const FONT_FAMILIES = ['sans-display', 'sans-text', 'mono-code'];
const FONT_WEIGHTS = ['regular', 'medium', 'semibold', 'bold'];
const DISPLAY_STYLES = [
  'display-500',
  'display-400',
  'display-300',
  'display-200',
  'display-100',
];
const BODY_STYLES = ['body-300', 'body-200', 'body-100'];
const CODE_STYLES = ['code-300', 'code-200', 'code-100'];
// we add all the allowed combinations here, per design specs
const STYLES_COMBINATIONS = {
  'display-500': ['bold'],
  'display-400': ['medium', 'semibold', 'bold'],
  'display-300': ['medium', 'semibold', 'bold'],
  'display-200': ['semibold'],
  'display-100': ['medium'],
  'body-300': ['regular', 'medium', 'semibold'],
  'body-200': ['regular', 'medium', 'semibold'],
  'body-100': ['regular', 'medium', 'semibold'],
  'code-300': ['regular', 'bold'],
  'code-200': ['regular', 'bold'],
  'code-100': ['regular', 'bold'],
};

export default class Index extends Component {
  get families() {
    return [...FONT_FAMILIES];
  }
  get weights() {
    return [...FONT_WEIGHTS];
  }
  get styles() {
    return [...DISPLAY_STYLES, ...BODY_STYLES, ...CODE_STYLES];
  }
  get cssHelpers() {
    const cssHelpers = {
      families: [],
      weights: [],
      styles: [],
    };
    this.families.forEach((family) => {
      cssHelpers.families.push({
        previewText: 'Aa',
        previewClass: `kds-font-family-${family}`,
        copyText: `kds-font-family-${family}`,
      });
    });
    this.weights.forEach((weight) => {
      cssHelpers.weights.push({
        previewText: 'Aa',
        previewClass: `kds-font-weight-${weight}`,
        copyText: `kds-font-weight-${weight}`,
      });
    });
    this.styles.forEach((style) => {
      cssHelpers.styles.push({
        previewText: 'Aa',
        previewClass: `kds-typography-${style}`,
        copyText: `kds-typography-${style}`,
      });
    });
    return cssHelpers;
  }
  get stylesCombinations() {
    const combinations = [];
    Object.keys(STYLES_COMBINATIONS).forEach((style) => {
      STYLES_COMBINATIONS[style].forEach((weight) => {
        combinations.push({
          previewText: 'The quick brown fox jumps over the lazy dog.',
          previewClass: `kds-typography-${style} kds-font-weight-${weight}`,
          otherText: `${style} (${weight})`,
        });
      });
    });
    return combinations;
  }
}
