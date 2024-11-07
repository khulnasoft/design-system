/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import templateOnlyComponent from '@ember/component/template-only';

export interface KdsFormSuperSelectAfterOptionsSignature {
  Args: {
    clearSelected: () => void;
    content?: string;
    resultCountMessage?: string;
    selectedCount?: string;
    showAll: () => void;
    showNoSelectedMessage?: boolean;
    showOnlySelected?: boolean;
    showSelected: () => void;
  };
}

const KdsFormSuperSelectAfterOptions =
  templateOnlyComponent<KdsFormSuperSelectAfterOptionsSignature>();

export default KdsFormSuperSelectAfterOptions;
