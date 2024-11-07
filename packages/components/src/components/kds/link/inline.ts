/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { KdsLinkColorValues, KdsLinkIconPositionValues } from './types.ts';

import type { KdsInteractiveSignature } from '../interactive/';
import type { KdsLinkColors, KdsLinkIconPositions } from './types.ts';
import type { KdsIconSignature } from '../icon';

export const DEFAULT_ICONPOSITION = KdsLinkIconPositionValues.Trailing;
export const DEFAULT_COLOR = KdsLinkColorValues.Primary;
export const ICONPOSITIONS: string[] = Object.values(KdsLinkIconPositionValues);
export const COLORS: string[] = Object.values(KdsLinkColorValues);

export interface KdsLinkInlineSignature {
  Args: KdsInteractiveSignature['Args'] & {
    color?: KdsLinkColors;
    icon?: KdsIconSignature['Args']['name'];
    iconPosition?: KdsLinkIconPositions;
  };
  Blocks: {
    default: [];
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsLinkInline extends Component<KdsLinkInlineSignature> {
  constructor(owner: unknown, args: KdsLinkInlineSignature['Args']) {
    super(owner, args);
    if (!(this.args.href || this.args.route)) {
      assert('@href or @route must be defined for <Kds::Link::Inline>');
    }
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
      `@color for "Kds::Link::Inline" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
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
      `@iconPosition for "Kds::Link::Inline" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * Get the class names to apply to the component.
   * @method LinkInline#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-link-inline'];

    // add a class based on the @color argument
    classes.push(`kds-link-inline--color-${this.color}`);

    // add a class based on the @iconPosition argument
    classes.push(`kds-link-inline--icon-${this.iconPosition}`);

    return classes.join(' ');
  }
}
