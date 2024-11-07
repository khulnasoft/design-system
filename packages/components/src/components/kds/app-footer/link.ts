/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsInteractiveSignature } from '../interactive/';
import type { KdsLinkColors, KdsLinkIconPositions } from '../link/types.ts';
import type { KdsLinkInlineSignature } from '../link/inline.ts';
import type { KdsIconSignature } from '../icon';

export interface KdsAppFooterLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    color?: KdsLinkColors;
    icon?: KdsIconSignature['Args']['name'];
    iconPosition?: KdsLinkIconPositions;
  };
  Blocks: {
    default: [];
  };
  Element: KdsLinkInlineSignature['Element'];
}

const KdsAppFooterLink = TemplateOnlyComponent<KdsAppFooterLinkSignature>();

export default KdsAppFooterLink;
