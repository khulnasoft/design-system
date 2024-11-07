/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsBadgeColorValues,
  KdsBadgeSizeValues,
  KdsBadgeTypeValues,
} from './types.ts';

import type { KdsBadgeColors, KdsBadgeSizes, KdsBadgeTypes } from './types.ts';
import type { KdsIconSignature } from '../icon';

export const SIZES: string[] = Object.values(KdsBadgeSizeValues);
export const TYPES: string[] = Object.values(KdsBadgeTypeValues);
export const COLORS: string[] = Object.values(KdsBadgeColorValues);
export const DEFAULT_SIZE = KdsBadgeSizeValues.Medium;
export const DEFAULT_TYPE = KdsBadgeTypeValues.Filled;
export const DEFAULT_COLOR = KdsBadgeColorValues.Neutral;

export interface KdsBadgeSignature {
  Args: {
    size?: KdsBadgeSizes;
    type?: KdsBadgeTypes;
    color?: KdsBadgeColors;
    text: string | number;
    icon?: KdsIconSignature['Args']['name'];
    isIconOnly?: boolean;
  };
  Element: HTMLDivElement;
}

export default class KdsBadge extends Component<KdsBadgeSignature> {
  /**
   * Sets the size for the component
   * Accepted values: small, medium, large
   *
   * @param size
   * @type {KdsBadgeSizes}
   * @default 'medium'
   */
  get size(): KdsBadgeSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Badge" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * Sets the type of the component
   * Accepted values: filled, inverted, outlined
   *
   * @param type
   * @type {KdsBadgeTypes}
   * @default 'filled'
   */
  get type(): KdsBadgeTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Kds::Badge" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  /**
   * Sets the color scheme for the component
   * Accepted values: neutral, neutral-dark-mode, highlight, success, warning, critical
   *
   * @param color
   * @type {KdsBadgeColors}
   * @default 'neutral'
   */
  get color(): KdsBadgeColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Badge" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * @param text
   * @type {string}
   * @description The text of the badge. If `isIconOnly` is set to `true`, the text will be visually hidden but still available to assistive technology. If no text value is defined, an error will be thrown.
   */
  get text(): string | number {
    const { text } = this.args;

    assert(
      '@text for "Kds::Badge" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param isIconOnly
   * @type {boolean}
   * @default false
   * @description Indicates if the badge will only contain an icon; component will also ensure that accessible text is still applied to the component.
   */
  get isIconOnly(): boolean {
    if (this.args.icon) {
      return this.args.isIconOnly ?? false;
    }

    return false;
  }

  /**
   * Get the class names to apply to the component.
   * @method Badge#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-badge'];

    // add a class based on the @size argument
    classes.push(`kds-badge--size-${this.size}`);

    // add a class based on the @type argument
    classes.push(`kds-badge--type-${this.type}`);

    // add a class based on the @color argument
    classes.push(`kds-badge--color-${this.color}`);

    return classes.join(' ');
  }
}
