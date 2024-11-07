/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface KdsAppFooterCopyrightSignature {
  Args: {
    year?: string;
  };
  Element: HTMLDivElement;
}

export default class KdsAppFooterCopyright extends Component<KdsAppFooterCopyrightSignature> {
  /**
   * @param year
   * @type {string}
   * @description The copyright year
   * @default The current year (calculated via `Date()`)
   */
  get year(): string | number {
    return this.args.year ?? new Date().getFullYear();
  }
}
