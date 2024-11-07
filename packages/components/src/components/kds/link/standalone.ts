/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import {
  KdsLinkIconPositionValues,
  KdsLinkColorValues,
  KdsLinkStandaloneSizeValues,
} from './types.ts';

import type { KdsInteractiveSignature } from '../interactive/';
import type {
  KdsLinkColors,
  KdsLinkIconPositions,
  KdsLinkStandaloneSizes,
} from './types.ts';
import type { KdsIconSignature } from '../icon';

export interface KdsLinkStandaloneSignature {
  Args: KdsInteractiveSignature['Args'] & {
    size?: KdsLinkStandaloneSizes;
    color?: KdsLinkColors;
    text: string;
    icon: KdsIconSignature['Args']['name'];
    iconPosition?: KdsLinkIconPositions;
  };
  Element: KdsInteractiveSignature['Element'];
}

export const DEFAULT_ICONPOSITION = KdsLinkIconPositionValues.Leading;
export const DEFAULT_COLOR = KdsLinkColorValues.Primary;
export const DEFAULT_SIZE = KdsLinkStandaloneSizeValues.Medium;
export const ICONPOSITIONS: string[] = Object.values(KdsLinkIconPositionValues);
export const COLORS: string[] = Object.values(KdsLinkColorValues);
export const SIZES: string[] = Object.values(KdsLinkStandaloneSizeValues);

export default class KdsLinkStandalone extends Component<KdsLinkStandaloneSignature> {
  constructor(owner: unknown, args: KdsLinkStandaloneSignature['Args']) {
    super(owner, args);
    if (!(this.args.href || this.args.route)) {
      assert('@href or @route must be defined for <Kds::Link::Standalone>');
    }
  }

  /**
   * @param text
   * @type {string}
   * @description The text of the link. If no text value is defined an error will be thrown.
   */
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Link::Standalone" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of link to be used; acceptable values are `primary` and `secondary`
   */
  get color(): KdsLinkColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Link::Standalone" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  /**
   * @param icon
   * @type {string|null}
   * @default null
   * @description The name of the icon to be used. An icon name must be defined.
   */
  get icon(): KdsIconSignature['Args']['name'] {
    const { icon } = this.args;

    assert(
      '@icon for "Kds::Link::Standalone" must have a valid value',
      icon !== undefined
    );

    return icon;
  }

  /**
   * @param iconPosition
   * @type {KdsLinkIconPositions}
   * @default leading
   * @description Positions the icon before or after the text; allowed values are `leading` or `trailing`
   */
  get iconPosition(): KdsLinkIconPositions {
    const { iconPosition = DEFAULT_ICONPOSITION } = this.args;

    assert(
      `@iconPosition for "Kds::Link::Standalone" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * @param size
   * @type {KdsLinkStandaloneSizes}
   * @default medium
   * @description The size of the standalone link; acceptable values are `small`, `medium`, and `large`
   */
  get size(): KdsLinkStandaloneSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Link::Standalone" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
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
   * Get the class names to apply to the component.
   * @method LinkStandalone#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-link-standalone'];

    // add a class based on the @size argument
    classes.push(`kds-link-standalone--size-${this.size}`);

    // add a class based on the @color argument
    classes.push(`kds-link-standalone--color-${this.color}`);

    // add a class based on the @iconPosition argument
    classes.push(`kds-link-standalone--icon-position-${this.iconPosition}`);

    return classes.join(' ');
  }
}
