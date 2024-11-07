/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsFormFieldSignature } from '../field';
import type { ComponentLike } from '@glint/template';
import type { KdsFormLabelSignature } from '../label';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormErrorSignature } from '../error';

export interface KdsFormToggleFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'isOptional'> & {
    value?: string;
  };
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

const KdsFormToggleField = templateOnlyComponent<KdsFormToggleFieldSignature>();

export default KdsFormToggleField;
