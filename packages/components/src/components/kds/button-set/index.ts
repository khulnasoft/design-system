/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
export interface KdsButtonSetSignature {
  Blocks: { default: [] };
  Element: HTMLDivElement;
}
const KdsButtonSet = TemplateOnlyComponent<KdsButtonSetSignature>();

export default KdsButtonSet;
