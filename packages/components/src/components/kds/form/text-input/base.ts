/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { KdsFormTextInputTypeValues } from './types.ts';
import type { KdsFormTextInputTypes } from './types.ts';

// notice: we don't support all the possible HTML types, only a subset
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export const DEFAULT_TYPE = KdsFormTextInputTypeValues.Text;
export const TYPES: string[] = Object.values(KdsFormTextInputTypeValues);

export interface KdsFormTextInputBaseSignature {
  Args: {
    hasVisibilityToggle?: boolean;
    isInvalid?: boolean;
    isLoading?: boolean;
    type?: KdsFormTextInputTypes;
    value?: string;
    width?: string;
  };
  Element: HTMLInputElement;
}

export default class KdsFormTextInputBase extends Component<KdsFormTextInputBaseSignature> {
  /**
   * Sets the type of input
   *
   * @param type
   * @type {string}
   * @default 'text'
   */
  get type(): KdsFormTextInputTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Kds::Form::TextInput" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-text-input'];

    // add typographic classes
    classes.push('kds-typography-body-200', 'kds-font-weight-regular');

    // add a class based on the @isInvalid argument
    if (this.args.isInvalid) {
      classes.push(`kds-form-text-input--is-invalid`);
    }

    // add a class based on the @hasVisibilityToggle argument
    if (this.args.hasVisibilityToggle) {
      classes.push(`kds-form-text-input--has-visibility-toggle`);
    }

    // add a class based on the @isLoading argument
    if (this.args.isLoading) {
      classes.push(`kds-form-text-input--is-loading`);
    }

    return classes.join(' ');
  }
}
