/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { KdsSeparatorSpacingValues } from './types.ts';
import type { KdsSeparatorSpacing } from './types.ts';

export const DEFAULT_SPACING = KdsSeparatorSpacingValues.TwentyFour;
export const SPACING: string[] = Object.values(KdsSeparatorSpacingValues);

export interface KdsSeparatorSignature {
  Args: {
    spacing?: KdsSeparatorSpacing;
  };
  Element: HTMLElement;
}

export default class KdsSeparator extends Component<KdsSeparatorSignature> {
  /**
   * Sets the margin for the separator
   * Accepted values: 24, 0
   *
   * @param spacing
   * @type {KdsSeparatorSpacing}
   * @default 24
   */
  get spacing(): KdsSeparatorSpacing {
    const { spacing = DEFAULT_SPACING } = this.args;

    assert(
      `@spacing for "Kds::Separator" must be one of the following: ${SPACING.join(
        ', '
      )}; received: ${spacing}`,
      SPACING.includes(spacing)
    );

    return spacing;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-separator'];

    // add a class based on the @spacing argument
    classes.push(`kds-separator--spacing-${this.spacing}`);

    return classes.join(' ');
  }
}
