/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { COLORS } from '@khulnasoft/design-system-components/components/kds/link/inline';

export default class ComponentsLinkInlineRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'active', 'focus'];
    return { COLORS, STATES };
  }
}
