/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { KdsCopyButtonSizeValues } from './types.ts';
import type { KdsCopyButtonSizes } from './types.ts';
import type { KdsButtonSignature } from '../../button/';
import type { KdsClipboardModifierSignature } from '../../../../modifiers/kds-clipboard.ts';
import type { KdsIconSignature } from '../../icon';

export const DEFAULT_SIZE = KdsCopyButtonSizeValues.Medium;
export const SIZES: string[] = Object.values(KdsCopyButtonSizeValues);
export const DEFAULT_ICON = 'clipboard-copy';
export const SUCCESS_ICON = 'clipboard-checked';
export const ERROR_ICON = 'clipboard-x';
export const DEFAULT_STATUS = 'idle';

export interface KdsCopyButtonSignature {
  Args: KdsButtonSignature['Args'] & {
    size?: KdsCopyButtonSizes;
    textToCopy?: KdsClipboardModifierSignature['Args']['Named']['text'];
    targetToCopy?: KdsClipboardModifierSignature['Args']['Named']['target'];
    onSuccess?: KdsClipboardModifierSignature['Args']['Named']['onSuccess'];
    onError?: KdsClipboardModifierSignature['Args']['Named']['onError'];
  };
  Element: KdsButtonSignature['Element'];
}

export default class KdsCopyButton extends Component<KdsCopyButtonSignature> {
  @tracked status = DEFAULT_STATUS;
  @tracked timer: ReturnType<typeof setTimeout> | undefined;

  /**
   * @param icon
   * @type {string}
   * @description The icon to be displayed for each status; automatically calculated based on the tracked property `status`.
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
   * @param size
   * @type {string}
   * @default medium
   * @description The size of the copy/button; acceptable values are `small` and `medium`
   */
  get size(): KdsCopyButtonSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Copy::Button" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * Get the class names to apply to the component.
   * @method CopyButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-copy-button'];

    // add a class based on the @size argument
    classes.push(`kds-button--size-${this.size}`);

    classes.push(`kds-copy-button--status-${this.status}`);

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
