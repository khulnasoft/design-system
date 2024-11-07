/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { ID_PREFIX } from '../../label/index.ts';

import type { ComponentLike } from '@glint/template';
import type { KdsFormErrorSignature } from '../../error/index.ts';
import type { KdsFormFieldSignature } from '../../field/index.ts';
import type { KdsFormHelperTextSignature } from '../../helper-text/index.ts';
import type { KdsFormLabelSignature } from '../../label';
import type { KdsFormSuperSelectMultipleBaseSignature } from './base.ts';
import type { Select as PowerSelect } from 'ember-power-select/components/power-select';
import type { KdsYieldSignature } from '../../../yield/index.ts';

export interface KdsFormSuperSelectMultipleFieldSignature {
  Args: KdsFormSuperSelectMultipleBaseSignature['Args'] &
    KdsFormFieldSignature['Args'];
  Blocks: {
    default: [
      {
        Label?: ComponentLike<KdsFormLabelSignature>;
        HelperText?: ComponentLike<KdsFormHelperTextSignature>;
        Error?: ComponentLike<KdsFormErrorSignature>;
        Options?: ComponentLike<KdsYieldSignature>;
        options?: unknown;
        select?: PowerSelect;
      },
    ];
  };
  Element: KdsFormFieldSignature['Element'];
}

export default class KdsFormSuperSelectMultipleField extends Component<KdsFormSuperSelectMultipleFieldSignature> {
  get idPrefix(): string {
    return ID_PREFIX;
  }
}
