/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsPageHeaderActionsSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsPageHeaderActions =
  TemplateOnlyComponent<KdsPageHeaderActionsSignature>();

export default KdsPageHeaderActions;
