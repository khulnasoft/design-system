/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { KdsTextDisplaySignature } from '../text/display';

export interface KdsPageHeaderTitleSignature {
  Args: KdsTextDisplaySignature['Args'];
  Blocks: {
    default: [];
  };
  Element: KdsTextDisplaySignature['Element'];
}

const KdsPageHeaderTitle = TemplateOnlyComponent<KdsPageHeaderTitleSignature>();

export default KdsPageHeaderTitle;
