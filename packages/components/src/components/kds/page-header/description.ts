/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { KdsTextBodySignature } from '../text/body';

export interface KdsPageHeaderDescriptionSignature {
  Args: KdsTextBodySignature['Args'];
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

const KdsPageHeaderDescription =
  TemplateOnlyComponent<KdsPageHeaderDescriptionSignature>();

export default KdsPageHeaderDescription;
