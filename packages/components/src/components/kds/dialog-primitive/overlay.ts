/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDialogPrimitiveOverlaySignature {
  Args: {
    contextualClass?: string;
  };
  Element: HTMLDivElement;
}

const KdsDialogPrimitiveOverlay =
  templateOnlyComponent<KdsDialogPrimitiveOverlaySignature>();

export default KdsDialogPrimitiveOverlay;
