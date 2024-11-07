/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsTextBodySignature } from '../../text/body';

export interface KdsFormRadioCardDescriptionSignature {
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

const KdsFormRadioCardDescription =
  templateOnlyComponent<KdsFormRadioCardDescriptionSignature>();

export default KdsFormRadioCardDescription;
