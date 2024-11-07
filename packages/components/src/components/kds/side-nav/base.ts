/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

export interface KdsSideNavBaseSignature {
  Blocks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    root?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    header?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    footer?: any;
  };
  Element: HTMLDivElement;
}

const KdsSideNavBase = TemplateOnlyComponent<KdsSideNavBaseSignature>();

export default KdsSideNavBase;
