/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFrameModalsSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const KdsAppFrameModals = TemplateOnlyComponent<KdsAppFrameModalsSignature>();

export default KdsAppFrameModals;
