/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
export const ID_PREFIX = 'label-';

import type { KdsFormIndicatorSignature } from '../indicator';

export interface KdsFormLabelSignature {
  Args: {
    contextualClass?: string;
    controlId?: string;
    isOptional?: KdsFormIndicatorSignature['Args']['isOptional'];
    isRequired?: KdsFormIndicatorSignature['Args']['isRequired'];
  };
  Blocks: {
    default: [];
  };
  Element: HTMLLabelElement;
}

export default class KdsFormLabel extends Component<KdsFormLabelSignature> {
  /**
   * Determines the unique ID to assign to the element
   * @method id
   * @return {(string|null)} The "id" attribute to apply to the element or null, if no controlId is provided
   */
  get id(): string | null {
    const { controlId } = this.args;
    if (controlId) {
      return `${ID_PREFIX}${controlId}`;
    }
    return null;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-label'];

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
