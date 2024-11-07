/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDropdownHeaderSignature {
  Args: {
    hasDivider?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsDropdownHeader = templateOnlyComponent<KdsDropdownHeaderSignature>();

export default KdsDropdownHeader;
