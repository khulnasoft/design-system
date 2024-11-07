/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { KdsTagColorValues } from './types.ts';
import type { KdsTagColors } from './types.ts';
import type { KdsInteractiveSignature } from '../interactive/';

export const COLORS: string[] = Object.values(KdsTagColorValues);
export const DEFAULT_COLOR = KdsTagColorValues.Primary;

export interface KdsTagSignature {
  Args: KdsInteractiveSignature['Args'] & {
    color?: KdsTagColors;
    text: string;
    ariaLabel?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDismiss?: (event: MouseEvent, ...args: any[]) => void;
  };
  Element: HTMLSpanElement;
}

export default class KdsTag extends Component<KdsTagSignature> {
  /**
   * @param onDismiss
   * @type {function}
   * @default () => {}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get onDismiss(): ((event: MouseEvent, ...args: any[]) => void) | false {
    const { onDismiss } = this.args;

    if (typeof onDismiss === 'function') {
      return onDismiss;
    } else {
      return false;
    }
  }

  /**
   * @param text
   * @type {string}
   * @description The text of the tag. If no text value is defined, an error will be thrown.
   */
  get text(): string {
    const { text } = this.args;

    assert('@text for "Kds::Tag" must have a valid value', text !== undefined);

    return text;
  }

  /**
   * @param ariaLabel
   * @type {string}
   * @default 'Dismiss'
   */
  get ariaLabel(): string {
    const tagAriaLabel = this.args.ariaLabel ?? 'Dismiss';
    return tagAriaLabel + ' ' + this.args.text;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of link to be used; acceptable values are `primary` and `secondary`
   */
  get color(): KdsTagColors | false {
    if (this.args.href || this.args.route) {
      const { color = DEFAULT_COLOR } = this.args;
      assert(
        `@color for "Kds::Tag" must be one of the following: ${COLORS.join(
          ', '
        )}; received: ${color}`,
        COLORS.includes(color)
      );
      return color;
    } else if (this.args.color) {
      assert(
        '@color can only be applied to "Kds::Tag" along with either @href or @route',
        this.args.href || this.args.route
      );
    }
    return false;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-tag'];

    // add a class based on the @color argument
    if (this.color) {
      classes.push(`kds-tag--color-${this.color}`);
    }

    return classes.join(' ');
  }
}
