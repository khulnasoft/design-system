/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
import type { KdsFormErrorSignature } from '../error';
import type { KdsFormFieldSignature } from '../field';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormLabelSignature } from '../label';
import type { KdsFormSelectBaseSignature } from './base';
import type { KdsYieldSignature } from '../../yield';

export interface KdsFormSelectFieldSignature {
  Args: Omit<KdsFormFieldSignature['Args'], 'contextualClass' | 'layout'> &
    KdsFormSelectBaseSignature['Args'];
  Blocks: {
    default: [
      {
        Label?: ComponentLike<KdsFormLabelSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
        Options?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: KdsFormFieldSignature['Element'];
}

const KdsFormSelectField = templateOnlyComponent<KdsFormSelectFieldSignature>();

export default KdsFormSelectField;
