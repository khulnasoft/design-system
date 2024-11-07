/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

import type { KdsTextBodySignature } from '../../text/body';

export interface KdsFormErrorMessageSignature {
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

const KdsFormErrorMessage =
  templateOnlyComponent<KdsFormErrorMessageSignature>();

export default KdsFormErrorMessage;
