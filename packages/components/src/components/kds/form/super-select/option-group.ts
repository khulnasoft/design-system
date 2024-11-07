/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export interface KdsFormSuperSelectOptionGroupSignature {
  Args: {
    group: {
      groupName?: string;
    };
  };
  Blocks: {
    default: [];
  };
}

export default class KdsFormSuperSelectOptionGroup extends Component<KdsFormSuperSelectOptionGroupSignature> {
  /**
   * Generates a unique ID for the group title
   * @return {string}
   */
  groupTitleId = 'group-title-' + guidFor(this);
}
