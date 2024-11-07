/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormRadioBaseSignature {
  Args: {
    value?: string;
  };
  Element: HTMLInputElement;
}

const KdsFormRadioBase = templateOnlyComponent<KdsFormRadioBaseSignature>();

export default KdsFormRadioBase;
