/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormSuperSelectPlaceholderSignature {
  Args: {
    placeholder?: string;
  };
}

const KdsFormSuperSelectPlaceholder =
  templateOnlyComponent<KdsFormSuperSelectPlaceholderSignature>();

export default KdsFormSuperSelectPlaceholder;
