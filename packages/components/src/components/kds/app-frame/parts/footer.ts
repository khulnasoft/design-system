/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFrameFooterSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const KdsAppFrameFooter = TemplateOnlyComponent<KdsAppFrameFooterSignature>();

export default KdsAppFrameFooter;
