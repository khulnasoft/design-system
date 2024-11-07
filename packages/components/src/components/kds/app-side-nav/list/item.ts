/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppSideNavListItemSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

const KdsAppSideNavListItem =
  TemplateOnlyComponent<KdsAppSideNavListItemSignature>();

export default KdsAppSideNavListItem;
