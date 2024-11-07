/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsInteractiveSignature } from '../../interactive';

export interface KdsAppSideNavListBackLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    text: string;
  };
  Element: KdsInteractiveSignature['Element'];
}

const KdsAppSideNavListBackLink =
  TemplateOnlyComponent<KdsAppSideNavListBackLinkSignature>();

export default KdsAppSideNavListBackLink;
