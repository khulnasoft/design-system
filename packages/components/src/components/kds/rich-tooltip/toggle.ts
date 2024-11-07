/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsRichTooltipToggleIconPositionValues,
  KdsRichTooltipToggleSizeValues,
} from './types.ts';
import type {
  KdsRichTooltipToggleIconPositions,
  KdsRichTooltipToggleSizes,
} from './types.ts';
import type { KdsIconSignature } from '../icon';
import type { ModifierLike } from '@glint/template';
import type { SetupPrimitiveToggleModifier } from '../popover-primitive';

export const ICONPOSITIONS: string[] = Object.values(
  KdsRichTooltipToggleIconPositionValues
);
export const DEFAULT_ICONPOSITION =
  KdsRichTooltipToggleIconPositionValues.Trailing;
export const SIZES: string[] = Object.values(KdsRichTooltipToggleSizeValues);

export interface KdsRichTooltipToggleSignature {
  Args: {
    text?: string;
    icon?: KdsIconSignature['Args']['name'];
    iconPosition?: KdsRichTooltipToggleIconPositions;
    size?: undefined | KdsRichTooltipToggleSizes;
    isInline?: boolean;
    isOpen?: boolean;
    popoverId: string;
    setupPrimitiveToggle: ModifierLike<SetupPrimitiveToggleModifier>;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLButtonElement;
}

export default class KdsRichTooltipToggle extends Component<KdsRichTooltipToggleSignature> {
  /**
   * @param isInline
   * @type {boolean}
   * @default true
   * @description sets display inline for the element
   */
  get isInline(): boolean {
    const { isInline = false } = this.args;
    return isInline;
  }

  /**
   * @param iconPosition
   * @type {string}
   * @default leading
   * @description Positions the icon before or after the text; allowed values are `leading` or `trailing`
   */
  get iconPosition(): KdsRichTooltipToggleIconPositions {
    const { iconPosition = DEFAULT_ICONPOSITION } = this.args;

    assert(
      `@iconPosition for "Kds::RichTooltip::Toggle" must be one of the following: ${ICONPOSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      ICONPOSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  /**
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the "info" text; acceptable values are `small`, `medium`, `large`
   */
  get size(): KdsRichTooltipToggleSizes | undefined {
    let size;

    // we assign a "size" only if `@text` is provided
    if (this.args.text) {
      size = this.args.size;

      assert(
        `@size for "Kds::RichTooltip::Toggle" must be one of the following: ${SIZES.join(
          ', '
        )}; received: ${size}`,
        size === undefined || SIZES.includes(size)
      );
    }

    return size;
  }

  /**
   * Get the class names to apply to the component.
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-rich-tooltip__toggle'];

    // add a class based on the @isInline argument
    if (this.isInline) {
      classes.push('kds-rich-tooltip__toggle--is-inline');
    } else {
      classes.push('kds-rich-tooltip__toggle--is-block');
    }

    // add a class based on the @size argument (if provided)
    if (this.size) {
      classes.push(`kds-rich-tooltip__toggle--size-${this.size}`);
    }

    return classes.join(' ');
  }
}
