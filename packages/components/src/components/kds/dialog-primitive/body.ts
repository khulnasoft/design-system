/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDialogPrimitiveBodySignature {
  Args: {
    contextualClass?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsDialogPrimitiveBody =
  templateOnlyComponent<KdsDialogPrimitiveBodySignature>();

export default KdsDialogPrimitiveBody;
