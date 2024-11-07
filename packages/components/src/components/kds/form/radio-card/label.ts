/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsTextDisplaySignature } from '../../text/display';

export interface KdsFormRadioCardLabelSignature {
  Blocks: {
    default: [];
  };
  Element: KdsTextDisplaySignature['Element'];
}

const KdsFormRadioCardLabel =
  templateOnlyComponent<KdsFormRadioCardLabelSignature>();

export default KdsFormRadioCardLabel;
