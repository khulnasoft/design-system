/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFrameSidebarSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const KdsAppFrameSidebar = TemplateOnlyComponent<KdsAppFrameSidebarSignature>();

export default KdsAppFrameSidebar;
