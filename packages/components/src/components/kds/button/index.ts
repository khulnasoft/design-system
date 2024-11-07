/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsButtonSizeValues,
  KdsButtonColorValues,
  KdsButtonIconPositionValues,
} from './types.ts';

import type {
  KdsButtonSizes,
  KdsButtonColors,
  KdsButtonIconPositions,
} from './types.ts';
import type { KdsInteractiveSignature } from '../interactive/';
import type { KdsIconSignature } from '../icon';

export const SIZES: string[] = Object.values(KdsButtonSizeValues);
export const COLORS: string[] = Object.values(KdsButtonColorValues);
export const ICONPOSITIONS: string[] = Object.values(
  KdsButtonIconPositionValues
);
export const DEFAULT_SIZE = KdsButtonSizeValues.Medium;
export const DEFAULT_COLOR = KdsButtonColorValues.Primary;
export const DEFAULT_ICONPOSITION = KdsButtonIconPositionValues.Leading;

export interface KdsButtonSignature {
  Args: KdsInteractiveSignature['Args'] & {
    size?: KdsButtonSizes;
    color?: KdsButtonColors;
    text: string;
    icon?: KdsIconSignature['Args']['name'];
    iconPosition?: KdsButtonIconPositions;
    isIconOnly?: boolean;
    isFullWidth?: boolean;
    isInline?: boolean;
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsButton extends Component<KdsButtonSignature> {
  /**
   * @param text
   * @type {string}
   * @description The text of the button or value of `aria-label` if `isIconOnly` is set to `true`. If no text value is defined an error will be thrown.
   */
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Button" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the button; acceptable values are `small`, `medium`, and `large`
   */
  get size(): KdsButtonSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Button" must be one of the following: ${SIZES.join(
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
   * @description Determines the color of button to be used; acceptable values are `primary`, `secondary`, and `critical`
   */
  get color(): KdsButtonColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Button" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get icon(): KdsIconSignature['Args']['name'] | undefined {
    assert(
      `when the "Kds::Button" @color is "tertiary" an @icon is required`,
      !(this.color === 'tertiary' && !this.args.icon)
    );

    return this.args.icon ?? undefined;
  }

  /**
   * @param isIconOnly
   * @type {boolean}
   * @default false
   * @description Indicates if the button will only contain an icon; component will also ensure that accessible text is still applied to the component.
   */
  get isIconOnly(): boolean {
    if (this.icon) {
      return this.args.isIconOnly ?? false;
    }
    return false;
  }

  /**
   * @param iconPosition
   * @type {string}
   * @default leading
   * @description Positions the icon before or after the text; allowed values are `leading` or `trailing`
   */
  get iconPosition(): KdsButtonIconPositions {
    const { iconPosition = DEFAULT_ICONPOSITION } = this.args;

    assert(
      `@iconPosition for "Kds::Button" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * @param iconSize
   * @type {string}
   * @default 16
   * @description ensures that the correct icon size is used. Automatically calculated.
   */
  get iconSize(): KdsIconSignature['Args']['size'] {
    if (this.args.size === 'large') {
      return '24';
    } else {
      return '16';
    }
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
   * Get the class names to apply to the component.
   * @method Button#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-button'];

    // add a class based on the @color argument
    classes.push(`kds-button--color-${this.color}`);

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('kds-button--width-full');
    }

    // add a class based on isIconOnly argument
    if (this.isIconOnly) {
      classes.push('kds-button--is-icon-only');
    }

    // add a class based on the @isInline argument
    if (this.args.isInline) {
      classes.push('kds-button--is-inline');
    }

    // add a class based on the @size argument
    classes.push(`kds-button--size-${this.size}`);

    return classes.join(' ');
  }
}
