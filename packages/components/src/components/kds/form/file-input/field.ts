/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
import type { KdsFormFieldSignature } from '../field';
import type { KdsFormLabelSignature } from '../label';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormErrorSignature } from '../error';

export interface KdsFormFileInputFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'contextualClass' | 'layout'>;
  Blocks: {
    default: [
      {
        Label?: ComponentLike<KdsFormLabelSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
      },
    ];
  };
  Element: KdsFormFieldSignature['Element'];
}

const KdsFormFileInputField =
  templateOnlyComponent<KdsFormFileInputFieldSignature>();

export default KdsFormFileInputField;
