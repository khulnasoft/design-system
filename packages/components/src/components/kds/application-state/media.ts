/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsApplicationStateMediaSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsApplicationStateMedia =
  TemplateOnlyComponent<KdsApplicationStateMediaSignature>();

export default KdsApplicationStateMedia;
