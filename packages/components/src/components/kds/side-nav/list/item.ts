/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsSideNavListItemSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

const KdsSideNavListItem = TemplateOnlyComponent<KdsSideNavListItemSignature>();

export default KdsSideNavListItem;
