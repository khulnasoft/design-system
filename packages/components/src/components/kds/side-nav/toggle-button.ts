/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';

import type { KdsIconSignature } from '../icon';

export interface KdsSideNavToggleButtonSignature {
  Args: {
    icon: KdsIconSignature['Args']['name'];
  };
  Element: HTMLButtonElement;
}

const KdsSideNavToggleButton =
  TemplateOnlyComponent<KdsSideNavToggleButtonSignature>();

export default KdsSideNavToggleButton;
