/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
import type { KdsLinkStandaloneSignature } from '../link/standalone';
import type { KdsButtonSignature } from '../button';
import type { KdsDropdownSignature } from '../dropdown';

export interface KdsApplicationStateFooterSignature {
  Args: {
    hasDivider?: boolean;
  };
  Blocks: {
    default?: [
      {
        Button?: ComponentLike<KdsButtonSignature>;
        Dropdown?: ComponentLike<KdsDropdownSignature>;
        LinkStandalone?: ComponentLike<KdsLinkStandaloneSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

const KdsApplicationStateFooter =
  TemplateOnlyComponent<KdsApplicationStateFooterSignature>();

export default KdsApplicationStateFooter;
