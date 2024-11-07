/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormCheckboxBaseSignature {
  Args: {
    value?: string;
  };
  Element: HTMLInputElement;
}

const KdsFormCheckboxBase =
  templateOnlyComponent<KdsFormCheckboxBaseSignature>();

export default KdsFormCheckboxBase;
