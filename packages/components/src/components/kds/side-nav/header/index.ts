/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsSideNavHeaderSignature {
  Blocks: {
    logo?: [];
    actions?: [];
  };
  Element: HTMLDivElement;
}

const KdsSideNavHeader = TemplateOnlyComponent<KdsSideNavHeaderSignature>();

export default KdsSideNavHeader;
