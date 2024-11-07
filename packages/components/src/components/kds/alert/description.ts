/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsAlertDescriptionSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const KdsAlertDescription =
  TemplateOnlyComponent<KdsAlertDescriptionSignature>();

export default KdsAlertDescription;
