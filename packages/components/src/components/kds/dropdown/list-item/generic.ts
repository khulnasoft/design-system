/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsDropdownListItemGenericSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLLIElement;
}

const KdsDropdownListItemGeneric =
  templateOnlyComponent<KdsDropdownListItemGenericSignature>();

export default KdsDropdownListItemGeneric;
