/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { ComponentLike } from '@glint/template';
import type { KdsButtonSignature } from '../button';
import type { KdsDropdownSignature } from '../dropdown';
import type { KdsFormSelectBaseSignature } from '../form/select/base';
import type { KdsFormTextInputBaseSignature } from '../form/text-input/base';
import type { KdsYieldSignature } from '../yield';

export interface KdsSegmentedGroupSignature {
  Blocks: {
    default: [
      {
        Button?: ComponentLike<KdsButtonSignature>;
        Dropdown?: ComponentLike<KdsDropdownSignature>;
        Select?: ComponentLike<KdsFormSelectBaseSignature>;
        TextInput?: ComponentLike<KdsFormTextInputBaseSignature>;
        Generic?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

const KdsSegmentedGroup = TemplateOnlyComponent<KdsSegmentedGroupSignature>();

export default KdsSegmentedGroup;
