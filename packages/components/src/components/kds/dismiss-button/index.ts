/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface KdsDismissButtonSignature {
  Args: {
    ariaLabel?: string;
  };
  Element: HTMLButtonElement;
}

export default class KdsDismissButton extends Component<KdsDismissButtonSignature> {
  /**
   * @param ariaLabel
   * @type {string}
   * @default 'Dismiss'
   */
  get ariaLabel(): string {
    return this.args.ariaLabel ?? 'Dismiss';
  }
}
