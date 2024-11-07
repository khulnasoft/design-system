/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import {
  KdsDropdownToggleButtonSizeValues,
  KdsDropdownToggleButtonColorValues,
} from './types.ts';

import type { KdsIconSignature } from '../../icon';
import type { KdsBadgeSignature } from '../../badge';
import type { KdsBadgeCountSignature } from '../../badge-count';
import type {
  KdsDropdownToggleButtonSizes,
  KdsDropdownToggleButtonColors,
} from './types';
import type { ModifierLike } from '@glint/template';
import type { SetupPrimitiveToggleModifier } from '../../popover-primitive/index.ts';

export const DEFAULT_SIZE = KdsDropdownToggleButtonSizeValues.Medium;
export const DEFAULT_COLOR = KdsDropdownToggleButtonColorValues.Primary;
export const SIZES: string[] = Object.values(KdsDropdownToggleButtonSizeValues);
export const COLORS: string[] = Object.values(
  KdsDropdownToggleButtonColorValues
);

export interface KdsDropdownToggleButtonSignature {
  Args: {
    badge?: KdsBadgeSignature['Args']['text'];
    badgeIcon?: KdsBadgeSignature['Args']['icon'];
    color?: KdsDropdownToggleButtonColors;
    count?: KdsBadgeCountSignature['Args']['text'];
    icon?: KdsIconSignature['Args']['name'];
    isFullWidth?: boolean;
    isOpen?: boolean;
    size?: KdsDropdownToggleButtonSizes;
    text: string;
    setupPrimitiveToggle?: ModifierLike<SetupPrimitiveToggleModifier>;
  };
  Element: HTMLButtonElement;
}

export default class KdsDropdownToggleButton extends Component<KdsDropdownToggleButtonSignature> {
  /**
   * Generates a unique ID for the button
   *
   * @param toggleButtonId
   */
  toggleButtonId = 'toggle-button-' + guidFor(this);

  /**
   * @param text
   * @type {string}
   * @description The text of the button. If no text value is defined an error will be thrown.
   */
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Dropdown::Toggle::Button" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the button; acceptable values are `small` and `medium`
   */
  get size(): KdsDropdownToggleButtonSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Dropdown::Toggle::Button" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of button to be used; acceptable values are `primary` and  `secondary`
   */
  get color(): KdsDropdownToggleButtonColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Dropdown::Toggle::Button" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * @param isFullWidth
   * @type {boolean}
   * @default false
   * @description Indicates that a button should take up the full width of the parent container. The default is false.
   */
  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }

  /**
   * @param badgeType
   * @type {string}
   * @default 'filled'
   * @description ensures that the correct Badge/BadgeCount type is used to meet contrast requirements
   */
  get badgeType(): KdsBadgeCountSignature['Args']['type'] {
    return this.color !== 'primary' ? 'inverted' : 'filled';
  }

  /**
   * Get the class names to apply to the component.
   * @method ToggleButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-dropdown-toggle-button'];

    // add a class based on the @size argument
    classes.push(`kds-dropdown-toggle-button--size-${this.size}`);

    // add a class based on the @color argument
    classes.push(`kds-dropdown-toggle-button--color-${this.color}`);

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('kds-dropdown-toggle-button--width-full');
    }

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('kds-dropdown-toggle-button--is-open');
    }

    return classes.join(' ');
  }
}
