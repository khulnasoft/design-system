/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDropdownFooterSignature {
  Args: {
    hasDivider?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsDropdownFooter = templateOnlyComponent<KdsDropdownFooterSignature>();

export default KdsDropdownFooter;
