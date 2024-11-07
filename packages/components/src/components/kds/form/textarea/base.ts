/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface KdsFormTextareaBaseSignature {
  Args: {
    isInvalid?: boolean;
    value?: string;
    width?: string;
    height?: string;
  };
  Element: HTMLElement;
}

export default class KdsFormTextareaBase extends Component<KdsFormTextareaBaseSignature> {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-textarea'];

    // add typographic classes
    classes.push('kds-typography-body-200', 'kds-font-weight-regular');

    // add a class based on the @isInvalid argument
    if (this.args.isInvalid) {
      classes.push(`kds-form-textarea--is-invalid`);
    }

    return classes.join(' ');
  }
}
