/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { KdsCopySnippetColorValues } from './types.ts';
import type { KdsCopySnippetColors } from './types.ts';
import type { KdsClipboardModifierSignature } from '../../../../modifiers/kds-clipboard.ts';
import type { KdsIconSignature } from '../../icon';

export const DEFAULT_COLOR = KdsCopySnippetColorValues.Primary;
export const COLORS: string[] = Object.values(KdsCopySnippetColorValues);

export const DEFAULT_ICON = 'clipboard-copy';
export const SUCCESS_ICON = 'clipboard-checked';
export const ERROR_ICON = 'clipboard-x';
export const DEFAULT_STATUS = 'idle';

export interface KdsCopySnippetSignature {
  Args: {
    color?: KdsCopySnippetColors;
    isFullWidth?: boolean;
    textToCopy: KdsClipboardModifierSignature['Args']['Named']['text'];
    isTruncated?: boolean;
    onSuccess?: KdsClipboardModifierSignature['Args']['Named']['onSuccess'];
    onError?: KdsClipboardModifierSignature['Args']['Named']['onError'];
  };
  Element: HTMLButtonElement;
}

export default class KdsCopySnippet extends Component<KdsCopySnippetSignature> {
  @tracked status = DEFAULT_STATUS;
  @tracked timer: ReturnType<typeof setTimeout> | undefined;

  /**
   * @method textToShow
   * @return {string}
   */
  get textToShow(): string {
    const { textToCopy = '' } = this.args;

    if (typeof textToCopy === 'string') {
      return textToCopy;
    } else {
      return textToCopy.toString();
    }
  }

  /**
   * @param icon
   * @type {string}
   * @default clipboard-copy
   * @description Determines the icon to be used, based on the success state. Note that this is auto-tracked because it depends on a tracked property (status).
   */
  get icon(): KdsIconSignature['Args']['name'] {
    let icon: KdsIconSignature['Args']['name'] = DEFAULT_ICON;
    if (this.status === 'success') {
      icon = SUCCESS_ICON;
    } else if (this.status === 'error') {
      icon = ERROR_ICON;
    }
    return icon;
  }

  /**
   * @param color
   * @type {string}
   * @default primary
   * @description Determines the color of button to be used; acceptable values are `primary` and `secondary`
   */
  get color(): KdsCopySnippetColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Copy::Snippet" must be one of the following: ${COLORS.join(
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
   * @description Indicates that the component should take up the full width of the parent container.
   */
  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }

  /**
   * @param isTruncated
   * @type {boolean}
   * @default false
   * @description Indicates that the component should be truncated instead of wrapping text and using multiple lines.
   */
  get isTruncated(): boolean {
    return this.args.isTruncated ?? false;
  }

  /**
   * Get the class names to apply to the component.
   * @method CopySnippet#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-copy-snippet'];

    // add a class based on the @color argument
    classes.push(`kds-copy-snippet--color-${this.color}`);

    // add a class based on the tracked status (idle/success/error)
    classes.push(`kds-copy-snippet--status-${this.status}`);

    // add a class based on the @isTruncated argument
    if (this.isTruncated) {
      classes.push('kds-copy-snippet--is-truncated');
    }

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('kds-copy-snippet--width-full');
    }

    return classes.join(' ');
  }

  @action
  onSuccess(
    args: KdsClipboardModifierSignature['Args']['Named']['onSuccess']
  ): void {
    this.status = 'success';
    this.resetStatusDelayed();

    const { onSuccess } = this.args;

    if (typeof onSuccess === 'function') {
      onSuccess(args);
    }
  }

  @action
  onError(
    args: KdsClipboardModifierSignature['Args']['Named']['onError']
  ): void {
    this.status = 'error';
    this.resetStatusDelayed();

    const { onError } = this.args;

    if (typeof onError === 'function') {
      onError(args);
    }
  }

  resetStatusDelayed(): void {
    clearTimeout(this.timer);
    // make it fade back to the default state
    this.timer = setTimeout((): void => {
      this.status = DEFAULT_STATUS;
    }, 1500);
  }
}
