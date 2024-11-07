/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { KdsTextBodySignature } from '../../text/body';
import type { KdsBadgeSignature } from '../../badge';

export interface KdsFormIndicatorSignature {
  Args: {
    isOptional?: boolean;
    isRequired?: boolean;
  };
  Element: KdsTextBodySignature['Element'] | KdsBadgeSignature['Element'];
}

export default class KdsFormIndicator extends Component<KdsFormIndicatorSignature> {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-indicator'];

    if (this.args.isOptional) {
      // add speficic class for "optional" indicator
      classes.push('kds-form-indicator--optional');
    }

    return classes.join(' ');
  }
}
