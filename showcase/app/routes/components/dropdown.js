/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { COLORS as TOGGLE_BUTTON_COLORS } from '@khulnasoft/design-system-components/components/kds/dropdown/toggle/button';
import { COLORS as ITEM_INTERACTIVE_COLORS } from '@khulnasoft/design-system-components/components/kds/dropdown/list-item/interactive';
import { POSITIONS } from '@khulnasoft/design-system-components/components/kds/dropdown/index';

export default class ComponentsDropdownRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const TOGGLE_STATES = ['default', 'hover', 'active', 'focus', 'disabled'];
    const ITEM_STATES = ['default', 'hover', 'active', 'focus'];
    return {
      TOGGLE_BUTTON_COLORS,
      TOGGLE_STATES,
      ITEM_INTERACTIVE_COLORS,
      ITEM_STATES,
      POSITIONS,
    };
  }
}
