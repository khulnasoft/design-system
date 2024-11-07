/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../../../utils/kds-get-element-id.ts';
import type { KdsIconSignature } from '../../icon';
import type { KdsFormCheckboxBaseSignature } from '../../form/checkbox/base.ts';

export interface KdsDropdownListItemCheckboxSignature {
  Args: KdsFormCheckboxBaseSignature['Args'] & {
    count?: string | number;
    icon?: KdsIconSignature['Args']['name'];
  };
  Blocks: {
    default: [];
  };
  Element: KdsFormCheckboxBaseSignature['Element'];
}

export default class KdsDropdownListItemCheckbox extends Component<KdsDropdownListItemCheckboxSignature> {
  /**
   * Determines the unique ID to assign to the checkbox control
   */
  get id(): string {
    return getElementId(this);
  }
}
