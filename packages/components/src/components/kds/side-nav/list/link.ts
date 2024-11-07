/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsIconSignature } from '../../icon';
import type { KdsInteractiveSignature } from '../../interactive';

export interface KdsSideNavListLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    icon?: KdsIconSignature['Args']['name'];
    text?: string;
    badge?: string;
    count?: string;
    hasSubItems?: boolean;
    isActive?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: KdsInteractiveSignature['Element'];
}

const KdsSideNavListLink = TemplateOnlyComponent<KdsSideNavListLinkSignature>();

export default KdsSideNavListLink;
