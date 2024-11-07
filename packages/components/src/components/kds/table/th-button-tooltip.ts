/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';

export interface KdsTableThButtonTooltipSignature {
  Args: {
    labelId?: string;
    tooltip: string;
  };
  Element: HTMLButtonElement;
}

export default class KdsTableThButtonTooltip extends Component<KdsTableThButtonTooltipSignature> {
  // Generates a unique ID for the (hidden) "label prefix" <span> element
  prefixLabelId = guidFor(this);

  get tooltip(): string {
    assert(
      `@tooltip for "KdsTableThButtonTooltip" must be a string`,
      typeof this.args.tooltip === 'string'
    );
    return this.args.tooltip;
  }

  get classNames(): string {
    const classes = ['kds-table__th-button', 'kds-table__th-button--tooltip'];

    return classes.join(' ');
  }
}
