/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { KdsTextBodySignature } from '../text/body';

export interface KdsPageHeaderSubtitleSignature {
  Args: KdsTextBodySignature['Args'];
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

const KdsPageHeaderSubtitle =
  TemplateOnlyComponent<KdsPageHeaderSubtitleSignature>();

export default KdsPageHeaderSubtitle;
