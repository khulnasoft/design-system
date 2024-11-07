/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';
import type { KdsTextBodySignature } from '../text/body';

export interface KdsCodeBlockDescriptionSignature {
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

const KdsCodeBlockDescription =
  templateOnlyComponent<KdsCodeBlockDescriptionSignature>();

export default KdsCodeBlockDescription;
