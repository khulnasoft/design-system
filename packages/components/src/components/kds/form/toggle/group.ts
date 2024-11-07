/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsFormFieldsetSignature } from '../fieldset';
import type { ComponentLike } from '@glint/template';
import type { KdsFormLegendSignature } from '../legend';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormToggleFieldSignature } from './field';
import type { KdsFormErrorSignature } from '../error';

export interface KdsFormToggleGroupSignature {
  Args: KdsFormFieldsetSignature['Args'] & {
    name?: string;
  };
  Blocks: {
    default: [
      {
        Legend?: ComponentLike<KdsFormLegendSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        ToggleField?: ComponentLike<KdsFormToggleFieldSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
      },
    ];
  };
  Element: KdsFormFieldsetSignature['Element'];
}

const KdsFormToggleGroup = templateOnlyComponent<KdsFormToggleGroupSignature>();

export default KdsFormToggleGroup;
