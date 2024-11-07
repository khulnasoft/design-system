/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsPageHeaderBadgesSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsPageHeaderBadges =
  TemplateOnlyComponent<KdsPageHeaderBadgesSignature>();

export default KdsPageHeaderBadges;
