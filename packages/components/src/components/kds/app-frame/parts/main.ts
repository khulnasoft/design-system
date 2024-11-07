/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFrameMainSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const KdsAppFrameMain = TemplateOnlyComponent<KdsAppFrameMainSignature>();

export default KdsAppFrameMain;
