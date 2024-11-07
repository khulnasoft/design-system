/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { COLORS as DROPDOWN_TOGGLE_BUTTON_COLORS } from '@khulnasoft/design-system-components/components/kds/dropdown/toggle/button';
import { COLORS as DROPDOWN_ITEM_INTERACTIVE_COLORS } from '@khulnasoft/design-system-components/components/kds/dropdown/list-item/interactive';

export default class ComponentsSideNavRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const DROPDOWN_TOGGLE_STATES = [
      'default',
      'hover',
      'active',
      'focus',
      'disabled',
    ];
    const DROPDOWN_ITEM_STATES = ['default', 'hover', 'active', 'focus'];

    return {
      DROPDOWN_TOGGLE_BUTTON_COLORS,
      DROPDOWN_TOGGLE_STATES,
      DROPDOWN_ITEM_INTERACTIVE_COLORS,
      DROPDOWN_ITEM_STATES,
    };
  }
}
