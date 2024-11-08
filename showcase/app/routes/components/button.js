/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  SIZES,
  COLORS,
} from '@khulnasoft/design-system-components/components/kds/button';
export default class ComponentsButtonRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'active', 'focus', 'disabled'];
    return { SIZES, COLORS, STATES };
  }
}
