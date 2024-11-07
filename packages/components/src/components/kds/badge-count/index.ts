/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsBadgeCountColorValues,
  KdsBadgeCountSizeValues,
  KdsBadgeCountTypeValues,
} from './types.ts';
import type {
  KdsBadgeCountColors,
  KdsBadgeCountSizes,
  KdsBadgeCountTypes,
} from './types.ts';

export const SIZES: string[] = Object.values(KdsBadgeCountSizeValues);
export const TYPES: string[] = Object.values(KdsBadgeCountTypeValues);
export const COLORS: string[] = Object.values(KdsBadgeCountColorValues);
export const DEFAULT_SIZE = KdsBadgeCountSizeValues.Medium;
export const DEFAULT_TYPE = KdsBadgeCountTypeValues.Filled;
export const DEFAULT_COLOR = KdsBadgeCountColorValues.Neutral;

export interface KdsBadgeCountSignature {
  Args: {
    size?: KdsBadgeCountSizes;
    type?: KdsBadgeCountTypes;
    color?: KdsBadgeCountColors;
    text: string | number;
  };
  Element: HTMLDivElement;
}

export default class KdsBadgeCount extends Component<KdsBadgeCountSignature> {
  /**
   * Sets the size for the component
   * Accepted sizes: small, medium, large
   *
   * @param size
   * @type {string}
   * @default 'medium'
   */
  get size(): KdsBadgeCountSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::BadgeCount" must be one of the following: ${SIZES.join(
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
   * @type {string}
   * @default 'filled'
   */
  get type(): KdsBadgeCountTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Kds::BadgeCount" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  /**
   * Sets the color scheme for the component
   * Accepted colors: neutral, neutral-dark-mode
   *
   * @param color
   * @type {string}
   * @default 'neutral'
   */
  get color(): KdsBadgeCountColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::BadgeCount" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * Get the class names to apply to the component.
   * @method BadgeCount#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-badge-count'];

    // add a class based on the @size argument
    classes.push(`kds-badge-count--size-${this.size}`);

    // add a class based on the @type argument
    classes.push(`kds-badge-count--type-${this.type}`);

    // add a class based on the @color argument
    classes.push(`kds-badge-count--color-${this.color}`);

    return classes.join(' ');
  }
}
