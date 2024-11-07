/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDialogPrimitiveDescriptionSignature {
  Args: {
    contextualClass?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsDialogPrimitiveDescription =
  templateOnlyComponent<KdsDialogPrimitiveDescriptionSignature>();

export default KdsDialogPrimitiveDescription;
