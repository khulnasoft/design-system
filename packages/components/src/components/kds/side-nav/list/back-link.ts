/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsInteractiveSignature } from '../../interactive/';

export interface KdsSideNavListBackLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    text: string;
  };
  Element: KdsInteractiveSignature['Element'];
}

const KdsSideNavListBackLink =
  TemplateOnlyComponent<KdsSideNavListBackLinkSignature>();

export default KdsSideNavListBackLink;
