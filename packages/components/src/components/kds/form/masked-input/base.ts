/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getElementId } from '../../../../utils/kds-get-element-id.ts';
import type { KdsCopyButtonSignature } from '../../copy/button/index.ts';
import type { KdsFormVisibilityToggleSignature } from '../visibility-toggle/index.ts';
import { tracked } from '@glimmer/tracking';

export interface KdsFormMaskedInputBaseSignature {
  Args: {
    copyButtonText?: KdsCopyButtonSignature['Args']['text'];
    hasCopyButton?: boolean;
    isContentMasked?: boolean;
    isInvalid?: boolean;
    isMultiline?: boolean;
    id?: string;
    value?: string;
    visibilityToggleAriaLabel?: KdsFormVisibilityToggleSignature['Args']['ariaLabel'];
    visibilityToggleAriaMessageText?: KdsFormVisibilityToggleSignature['Args']['ariaMessageText'];
    width?: string;
    height?: string;
  };
  Element: HTMLElement;
}

export default class KdsFormMaskedInputBase extends Component<KdsFormMaskedInputBaseSignature> {
  @tracked isContentMasked;

  constructor(owner: unknown, args: KdsFormMaskedInputBaseSignature['Args']) {
    super(owner, args);
    this.isContentMasked = this.args.isContentMasked ?? true;
  }

  @action
  onClickToggleMasking(): void {
    this.isContentMasked = !this.isContentMasked;
  }

  get id(): string {
    return getElementId(this);
  }

  get visibilityToggleAriaLabel(): string {
    if (this.args.visibilityToggleAriaLabel) {
      return this.args.visibilityToggleAriaLabel;
    } else if (this.isContentMasked) {
      return 'Show masked content';
    } else {
      return 'Hide masked content';
    }
  }

  get visibilityToggleAriaMessageText(): string {
    if (this.args.visibilityToggleAriaMessageText) {
      return this.args.visibilityToggleAriaMessageText;
    } else if (this.isContentMasked) {
      return 'Input content is hidden';
    } else {
      return 'Input content is visible';
    }
  }

  get copyButtonText(): string {
    if (this.args.copyButtonText) {
      return this.args.copyButtonText;
    } else {
      return 'Copy masked content';
    }
  }

  get classNames(): string {
    const classes = ['kds-form-masked-input'];

    if (this.isContentMasked) {
      classes.push(`kds-form-masked-input--is-masked`);
    } else {
      classes.push(`kds-form-masked-input--is-not-masked`);
    }

    return classes.join(' ');
  }
}
