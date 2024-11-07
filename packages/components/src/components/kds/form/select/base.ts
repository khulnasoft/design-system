/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { ComponentLike } from '@glint/template';
import type { KdsYieldSignature } from '../../yield';

export interface KdsFormSelectBaseSignature {
  Args: {
    isInvalid?: boolean;
    width?: string;
  };
  Blocks: {
    default: [
      {
        Options?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: HTMLSelectElement;
}

export default class KdsFormSelectBase extends Component<KdsFormSelectBaseSignature> {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-select'];

    // add typographic classes
    classes.push('kds-typography-body-200', 'kds-font-weight-regular');

    // add a class based on the @isInvalid argument
    if (this.args.isInvalid) {
      classes.push(`kds-form-select--is-invalid`);
    }

    return classes.join(' ');
  }
}
