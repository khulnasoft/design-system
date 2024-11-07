/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsIconSignature } from '../icon';

interface KdsAppSideNavToggleButtonSignature {
  Args: {
    icon: KdsIconSignature['Args']['name'];
  };
  Element: HTMLButtonElement;
}

const KdsAppSideNavToggleButton =
  TemplateOnlyComponent<KdsAppSideNavToggleButtonSignature>();

export default KdsAppSideNavToggleButton;
