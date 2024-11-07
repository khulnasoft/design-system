/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormFileInputBaseSignature {
  Element: HTMLInputElement;
}

const KdsFormFileInputBase =
  templateOnlyComponent<KdsFormFileInputBaseSignature>();

export default KdsFormFileInputBase;
