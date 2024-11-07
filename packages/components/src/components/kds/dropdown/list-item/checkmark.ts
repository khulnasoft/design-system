/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { KdsIconSignature } from '../../icon';
import type { KdsInteractiveSignature } from '../../interactive';

export interface KdsDropdownListItemCheckmarkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    count?: string | number;
    icon?: KdsIconSignature['Args']['name'];
    selected?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsDropdownListItemCheckmark extends Component<KdsDropdownListItemCheckmarkSignature> {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = [
      'kds-dropdown-list-item',
      'kds-dropdown-list-item--color-action',
      'kds-dropdown-list-item--variant-checkmark',
    ];

    // add a class based on the @selected argument
    if (this.args.selected) {
      classes.push('kds-dropdown-list-item--variant-checkmark-selected');
    }

    return classes.join(' ');
  }
}
