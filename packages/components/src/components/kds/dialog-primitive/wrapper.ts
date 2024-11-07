/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDialogPrimitiveWrapperSignature {
  Blocks: {
    header?: [];
    body?: [];
    footer?: [];
  };
  Element: HTMLDialogElement;
}

const KdsDialogPrimitiveWrapper =
  templateOnlyComponent<KdsDialogPrimitiveWrapperSignature>();

export default KdsDialogPrimitiveWrapper;
