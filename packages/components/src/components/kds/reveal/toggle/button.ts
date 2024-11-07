/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

import type { KdsButtonSignature } from '../../button/';

export interface KdsRevealToggleButtonSignature {
  Args: {
    text: string;
    isOpen?: boolean;
  };
  Element: KdsButtonSignature['Element'];
}

export default class KdsRevealToggleButton extends Component<KdsRevealToggleButtonSignature> {
  /**
   * Get the class names to apply to the component.
   * @method ToggleButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-reveal__toggle-button'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('kds-reveal__toggle-button--is-open');
    }

    return classes.join(' ');
  }
}
