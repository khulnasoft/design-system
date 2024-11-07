/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFrameHeaderSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const KdsAppFrameHeader = TemplateOnlyComponent<KdsAppFrameHeaderSignature>();

export default KdsAppFrameHeader;
