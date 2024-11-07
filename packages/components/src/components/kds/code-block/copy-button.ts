/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsCopyButtonSignature } from '../copy/button';

export interface KdsCodeBlockCopyButtonSignature {
  Args: {
    targetToCopy?: KdsCopyButtonSignature['Args']['targetToCopy'];
  };
  Blocks: {
    default: [];
  };
  Element: KdsCopyButtonSignature['Element'];
}

const KdsCodeBlockCopyButton =
  templateOnlyComponent<KdsCodeBlockCopyButtonSignature>();

export default KdsCodeBlockCopyButton;
