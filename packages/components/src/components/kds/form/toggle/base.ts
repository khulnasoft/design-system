/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormToggleBaseSignature {
  Args: {
    value?: string;
  };
  Element: HTMLInputElement;
}

const KdsFormToggleBase = templateOnlyComponent<KdsFormToggleBaseSignature>();

export default KdsFormToggleBase;
