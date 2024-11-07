/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsYieldSignature {
  Blocks: {
    default: [];
  };
}

const KdsYield = TemplateOnlyComponent<KdsYieldSignature>();

export default KdsYield;
