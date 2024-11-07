/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

import type { KdsFormIndicatorSignature } from '../indicator';

export interface KdsFormLegendSignature {
  Args: {
    contextualClass?: string;
    isOptional?: KdsFormIndicatorSignature['Args']['isOptional'];
    isRequired?: KdsFormIndicatorSignature['Args']['isRequired'];
  };
  Blocks: {
    default: [];
  };
  Element: HTMLLegendElement;
}

export default class KdsFormLegend extends Component<KdsFormLegendSignature> {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-legend'];

    // add typographic classes
    classes.push('kds-typography-body-200', 'kds-font-weight-semibold');

    // add a class based on the @contextualClass argument
    // notice: this will *not* be documented for public use
    // the reason for this is that the contextual component declarations don't pass attributes to the component
    if (this.args.contextualClass) {
      classes.push(this.args.contextualClass);
    }

    return classes.join(' ');
  }
}
