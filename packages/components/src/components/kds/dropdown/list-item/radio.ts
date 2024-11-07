/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../../../utils/kds-get-element-id.ts';
import type { KdsIconSignature } from '../../icon';
import type { KdsFormRadioBaseSignature } from '../../form/radio/base.ts';

export interface KdsDropdownListItemRadioSignature {
  Args: KdsFormRadioBaseSignature['Args'] & {
    count?: string | number;
    icon?: KdsIconSignature['Args']['name'];
  };
  Blocks: {
    default: [];
  };
  Element: KdsFormRadioBaseSignature['Element'];
}

export default class KdsDropdownListItemRadio extends Component<KdsDropdownListItemRadioSignature> {
  /**
   * Determines the unique ID to assign to the radio control
   */
  get id(): string {
    return getElementId(this);
  }
}
