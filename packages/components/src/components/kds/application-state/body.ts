/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsApplicationStateBodySignature {
  Args: {
    text?: string;
  };
  Blocks: {
    default?: [];
  };
  Element: HTMLDivElement;
}

const KdsApplicationStateBody =
  TemplateOnlyComponent<KdsApplicationStateBodySignature>();

export default KdsApplicationStateBody;
