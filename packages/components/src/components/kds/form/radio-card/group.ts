/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsFormFieldsetSignature } from '../fieldset';
import type { ComponentLike } from '@glint/template';
import type { KdsFormLegendSignature } from '../legend';
import type { KdsFormHelperTextSignature } from '../helper-text';
import type { KdsFormRadioCardSignature } from './index';
import type { KdsFormErrorSignature } from '../error';
import type {
  KdsFormRadioCardControlPositions,
  KdsFormRadioCardAlignments,
} from './types';

export interface KdsFormRadioCardGroupSignature {
  Args: KdsFormFieldsetSignature['Args'] & {
    controlPosition?: KdsFormRadioCardControlPositions;
    alignment?: KdsFormRadioCardAlignments;
    name?: string;
  };
  Blocks: {
    default: [
      {
        Legend?: ComponentLike<KdsFormLegendSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        RadioCard?: ComponentLike<KdsFormRadioCardSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
      },
    ];
  };
  Element: KdsFormFieldsetSignature['Element'];
}

const KdsFormRadioCardGroup =
  templateOnlyComponent<KdsFormRadioCardGroupSignature>();

export default KdsFormRadioCardGroup;
