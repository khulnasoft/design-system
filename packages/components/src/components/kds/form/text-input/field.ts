/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type { KdsFormFieldSignature } from '../field';
import type { KdsFormTextInputBaseSignature } from './base';
import type { KdsFormErrorSignature } from '../error';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormLabelSignature } from '../label';
import type { KdsFormVisibilityToggleSignature } from '../visibility-toggle';
import KdsFormCharacterCountComponent from '../character-count/index.ts';

export interface KdsFormTextInputFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'contextualClass' | 'layout'> &
    KdsFormTextInputBaseSignature['Args'] & {
      visibilityToggleAriaLabel?: KdsFormVisibilityToggleSignature['Args']['ariaLabel'];
      visibilityToggleAriaMessageText?: KdsFormVisibilityToggleSignature['Args']['ariaMessageText'];
    };
  Blocks: {
    default: [
      {
        Label?: ComponentLike<KdsFormLabelSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
        CharacterCount?: WithBoundArgs<
          typeof KdsFormCharacterCountComponent,
          'value'
        >;
      },
    ];
  };
  Element: KdsFormFieldSignature['Element'];
}

export default class KdsFormTextInputField extends Component<KdsFormTextInputFieldSignature> {
  @tracked isPasswordMasked = true;
  @tracked type;

  constructor(owner: unknown, args: KdsFormTextInputFieldSignature['Args']) {
    super(owner, args);
    this.type = this.args.type ?? 'text';
  }

  get hasVisibilityToggle(): boolean {
    return this.args.hasVisibilityToggle ?? true;
  }

  get showVisibilityToggle(): boolean {
    return this.args.type === 'password' && this.hasVisibilityToggle;
  }

  get visibilityToggleAriaLabel(): string | undefined {
    if (this.args.visibilityToggleAriaLabel) {
      return this.args.visibilityToggleAriaLabel;
    } else if (this.isPasswordMasked) {
      return 'Show password';
    } else {
      return 'Hide password';
    }
  }

  get visibilityToggleAriaMessageText(): string | undefined {
    if (this.args.visibilityToggleAriaMessageText) {
      return this.args.visibilityToggleAriaMessageText;
    } else if (this.isPasswordMasked) {
      return 'Password is hidden';
    } else {
      return 'Password is visible';
    }
  }

  @action
  onClickTogglePasswordReadability(): void {
    this.isPasswordMasked = !this.isPasswordMasked;
    this.type = this.isPasswordMasked ? 'password' : 'text';
  }
}
