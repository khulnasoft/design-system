/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDropdownToggleChevronSignature {
  Element: HTMLDivElement;
}

const KdsDropdownToggleChevron =
  templateOnlyComponent<KdsDropdownToggleChevronSignature>();

export default KdsDropdownToggleChevron;
