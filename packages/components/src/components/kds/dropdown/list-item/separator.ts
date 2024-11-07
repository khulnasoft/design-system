/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDropdownListItemSeparatorSignature {
  Element: HTMLLIElement;
}

const KdsDropdownListItemSeparator =
  templateOnlyComponent<KdsDropdownListItemSeparatorSignature>();

export default KdsDropdownListItemSeparator;
