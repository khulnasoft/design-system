/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

import type { KdsFormFieldSignature } from '../field';
import type { KdsFormTextareaBaseSignature } from './base';
import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type { KdsFormErrorSignature } from '../error';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormLabelSignature } from '../label';
import type KdsFormCharacterCountComponent from '../character-count';

export interface KdsFormTextareaFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'contextualClass' | 'layout'> &
    KdsFormTextareaBaseSignature['Args'];
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

const KdsFormTextareaField =
  templateOnlyComponent<KdsFormTextareaFieldSignature>();

export default KdsFormTextareaField;
