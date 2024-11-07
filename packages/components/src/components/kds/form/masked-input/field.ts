/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type KdsFormCharacterCountComponent from '../character-count';
import type { KdsFormErrorSignature } from '../error';
import type { KdsFormFieldSignature } from '../field';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormLabelSignature } from '../label';
import type { KdsFormMaskedInputBaseSignature } from './base';

export interface KdsFormMaskedInputFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'contextualClass' | 'layout'> &
    KdsFormMaskedInputBaseSignature['Args'];
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

const KdsFormMaskedInputField =
  templateOnlyComponent<KdsFormMaskedInputFieldSignature>();

export default KdsFormMaskedInputField;
