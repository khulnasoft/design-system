/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface KdsBreadcrumbTruncationSignature {
  Args: {
    ariaLabel?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

export default class KdsBreadcrumbTruncation extends Component<KdsBreadcrumbTruncationSignature> {
  /**
   * @param ariaLabel
   * @type {string}
   * @default 'show more'
   */
  get ariaLabel(): string {
    return this.args.ariaLabel ?? 'show more';
  }
}
