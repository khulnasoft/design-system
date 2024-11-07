/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAppFooterItemSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

const KdsAppFooterItem = TemplateOnlyComponent<KdsAppFooterItemSignature>();

export default KdsAppFooterItem;
